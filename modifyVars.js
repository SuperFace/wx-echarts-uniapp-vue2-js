/**
 * 根据构建的小程序类型：测试小程序线上版本和正式小程序的线上版本，来动态修改manifest.json中的appid，减少人工修改的繁琐操作
 * 测试小程序线上版本构建命令：npm run build-test:mp-weixin
 * 正式小程序线上版本构建命令：npm run build-production:mp-weixin
 * 测试小程序和正式小程序的appid配置在根目录下config.js中
 * 新增了测试版小程序的api域名配置文件 .env.test，对应构建的 mode 为 test
 */

const fs = require('fs');
const config = require(`${__dirname}/config.js`);
const APP_ENV = process.env.APP_ENV;
// 环境修改 appid
let appid = config[APP_ENV]['appid'];
const manifestPath = `${__dirname}/src/manifest.json`;
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' });
function replaceManifest(path, value) {
  const arr = path.split('.');
  const len = arr.length;
  const lastItem = arr[len - 1];

  let i = 0;
  let ManifestArr = Manifest.split(/\n/);

  for (let index = 0; index < ManifestArr.length; index++) {
    const item = ManifestArr[index];
    if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
    if (i === len) {
      const hasComma = /,/.test(item);
      ManifestArr[index] = item.replace(
        new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`),
        `"${lastItem}": ${value}${hasComma ? ',' : ''}`
      );
      break;
    }
  }

  Manifest = ManifestArr.join('\n');
}

// 使用
replaceManifest('mp-weixin.appid', `"${appid}"`);
replaceManifest('app-plus.distribute.sdkConfigs.share.weixin.appid', `"${appid}"`);
fs.writeFileSync(manifestPath, Manifest, {
  flag: 'w',
});
