<template>
  <canvas
    v-if="!!canvasId"
    :type="forceUseOldCanvas?'':'2d'"
    class="ec-canvas"
    :id="canvasId"
    :canvasId="canvasId"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd">
  </canvas>
</template>

<script>
import WxCanvas2 from './wx-canvas2';
import WxCanvas from './wx-canvas';

function compareVersion(v1s, v2s) {
  const v1 = v1s.split('.');
  const v2 = v2s.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (let i = 0; i < len; i += 1) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}

function wrapTouch(e) {
  for (let i = 0; i < e.mp.touches.length; i += 1) {
    const touch = e.mp.touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }
  return e;
}


export default {
  name: "awxEcharts",
  props: {
    forceUseOldCanvas: {
      type: Boolean,
      default: false,
    },
    canvasId: {
      type: String,
      default: 'ec-canvas',
    },
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    disableTouch: {
      type: Boolean,
      default: false,
    },
    throttleTouch: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['init'],
  data(){
    return {
      isUseNewCanvas: true,
      canvasNode: null,
      canvas: null,
      ctx: null,
    }
  },
  mounted() {
    if (!this.lazyLoad) {
      this.init();
    }
  },

  methods: {
    init() {
      const version = wx.getSystemInfoSync().SDKVersion;

      const canUseNewCanvas = compareVersion(version, '2.9.0') >= 0;
      this.isUseNewCanvas = canUseNewCanvas && !this.forceUseOldCanvas;

      if (this.forceUseOldCanvas && canUseNewCanvas) {
        console.warn('开发者强制使用旧canvas,建议关闭');
      }

      if (this.isUseNewCanvas) {
        this.initByNewWay();
      } else {
        const isValid = compareVersion(version, '1.9.91') >= 0;
        if (!isValid) {
          console.error('微信基础库版本过低，需大于等于 1.9.91。');
        } else {
          console.warn('建议将微信基础库调整大于等于2.9.0版本。升级后绘图将有更好性能');
          this.initByOldWay();
        }
      }
    },
    initByNewWay() {
      // version >= 2.9.0：使用新的方式初始化
      const { canvasId } = this;
      const query = wx.createSelectorQuery().in(this);

      query
        .select(`#${canvasId}`)
        .fields({ node: true, size: true })
        .exec((res) => {
          const _canvasNode = res[0].node;
          this.canvasNode = _canvasNode;

          const canvasDpr = wx.getSystemInfoSync().pixelRatio;
          const canvasWidth = res[0].width;
          const canvasHeight = res[0].height;

          const ctx = _canvasNode.getContext('2d');

          const _canvas = new WxCanvas2(ctx, canvasId, true, _canvasNode);
          // echarts.setCanvasCreator(() => _canvas);

          this.$emit('init', {
            canvas: _canvas,
            width: canvasWidth,
            height: canvasHeight,
            dpr: canvasDpr,
          });
          this.canvas = _canvas;
        });
    },
    initByOldWay() {
      // 1.9.91 <= version < 2.9.0：原来的方式初始化
      const { canvasId } = this;
      this.ctx = wx.createCanvasContext(canvasId, this);

      const _canvas = new WxCanvas(this.ctx, canvasId);

      // echarts.setCanvasCreator(() => _canvas);

      // const canvasDpr = wx.getSystemInfoSync().pixelRatio // 微信旧的canvas不能传入dpr
      const canvasDpr = 1;

      const query = wx.createSelectorQuery().in(this);
      query.select(`#${canvasId}`).boundingClientRect((res) => {
        if (!res) {
          setTimeout(() => this.init(), 50);
          return;
        }

        const { width, height } = res;

        this.$emit('init', {
          canvas: _canvas,
          width,
          height,
          dpr: canvasDpr,
        });
        this.canvas = _canvas;
      }).exec();
    },
    canvasToTempFilePath(opt) {
      const { canvasId } = this;
      if (this.isUseNewCanvas) {
        // 新版
        const query = wx.createSelectorQuery().in(this);
        query
          .select(`#${canvasId}`)
          .fields({ node: true, size: true })
          .exec((res) => {
            const canvasNode = res[0].node;
            Object.assign(opt, { canvas: canvasNode });
            wx.canvasToTempFilePath(opt);
          });
      } else {
        // 旧的
        this.ctx.draw(true, () => {
          wx.canvasToTempFilePath({
            canvasId,
            ...opt,
          });
        });
      }
    },
    touchStart(e) {
      const { disableTouch, canvas } = this;

      const touches = e.touches || e.mp.touches;
      e.mp = e;
      
      if (!canvas || disableTouch || !canvas.chart || !touches.length) return;

      const chart = canvas.chart;

      const touch = touches[0];
      const { handler } = chart._zr;
      handler.dispatch('mousedown', Object.assign({
        zrX: touch.x,
        zrY: touch.y,
      }, e));
      handler.dispatch('mousemove', Object.assign({
        zrX: touch.x,
        zrY: touch.y,
      }, e));
      const processGesture = handler.proxy.processGesture || (() => {});
      processGesture(wrapTouch(e), 'start');
    },
    touchMove(e) {
      const {
        disableTouch, throttleTouch, canvas, lastMoveTime,
      } = this;

      const touches = e.touches || e.mp.touches;
      e.mp = e;

      
      if (!canvas || disableTouch || !canvas.chart || !touches.length) return;

      const chart = canvas.chart;

      if (throttleTouch) {
        const currMoveTime = Date.now();
        if (currMoveTime - lastMoveTime < 150) return;
        this.lastMoveTime = currMoveTime;
      }

      const touch = touches[0];
      const { handler } = chart._zr;
      handler.dispatch('mousemove', Object.assign({
        zrX: touch.x,
        zrY: touch.y,
      }, e));
      const processGesture = handler.proxy.processGesture || (() => {});
      processGesture(wrapTouch(e), 'change');
    },
    touchEnd(e) {
      const { disableTouch, canvas } = this;
      
      if (!canvas || disableTouch || !canvas.chart) return;

      const chart = canvas.chart;

      const changedTouches = e.changedTouches || e.mp.changedTouches;
      e.mp = e;

      const touch = changedTouches ? changedTouches[0] : {};
      const { handler } = chart._zr;
      handler.dispatch('mouseup', Object.assign({
        zrX: touch.x,
        zrY: touch.y,
      }, e));
      handler.dispatch('click', Object.assign({
        zrX: touch.x,
        zrY: touch.y,
      }, e));
      const processGesture = handler.proxy.processGesture || (() => {});
      processGesture(wrapTouch(e), 'end');
    },
  },
};
</script>

<style scoped>
.ec-canvas {
  width: 100%;
  height: 100%;
}
</style>
