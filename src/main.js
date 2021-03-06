// we want font-awesome to load as soon as possible to show the fa-spinner
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'babel-polyfill';
import 'whatwg-fetch';
import * as Bluebird from 'bluebird';
import { ViewLocator } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({
  warnings: {
    wForgottenReturn: false
  }
});

export async function configure(aurelia) {
  // ViewLocator.prototype.convertOriginToViewUrl = (origin) => {
  //   let moduleId = origin.moduleId;
  //   let id = moduleId.endsWith('.js') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
  //   return `${id.replace('viewmodels', 'views')}.html`;
  // };

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = true;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 9999;
    })
    .plugin('aurelia-validation')
    .plugin('aurelia-validatejs');

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('viewmodels/app'));
}
