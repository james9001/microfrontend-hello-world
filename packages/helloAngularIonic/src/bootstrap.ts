import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

const mount = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
}

export { mount }