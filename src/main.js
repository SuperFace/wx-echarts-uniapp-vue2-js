import Vue from 'vue';
import App from './App';

Vue.config.errorHandler = function (err, vm, info) {
  // err 就是错误信息
  // vm相当于this实例
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  if (window) {
    window.onerror = e => {
      console.log('-------------999999999-----------', e);
    };
  }
  console.log(err, vm, info, '-------err, vm, 000sinfo------');
};

Vue.config.productionTip = false;

// console.Olog = console.log;
// console.log = () => {};

App.mpType = 'app';
Vue.prototype.bus = new Vue();


Vue.prototype.seqids = null;
Vue.prototype.task = null;


const app = new Vue({
  ...App,
});
app.$mount();
