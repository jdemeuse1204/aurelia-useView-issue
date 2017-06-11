/* beautify preserve:start */
import { PLATFORM } from 'aurelia-pal';
import { HttpClient } from 'aurelia-http-client';
import { Router } from 'aurelia-router';
import { inject, useView } from 'aurelia-framework';
/* beautify preserve:end */

@useView(PLATFORM.moduleName('views/app.html'))
@inject(HttpClient, Router)
export class App {

  constructor(http, router) {
    this.http = http;
    this.router = router;
  }

  configureRouter(config, router) {
    config.title = 'Credit Matters';

    // these are the routes
    config.map([
      /* beautify preserve:start */
      { route: ['', 'home:code'], name: 'home',      moduleId: PLATFORM.moduleName('./home'),      nav: true, title: 'Home' }
      /* beautify preserve:end */
    ]);

    this.router = router;
  }
}
