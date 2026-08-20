import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { AppConfigService, loadConfig } from 'lib-erp-modular';

function initializeConfig() {
  return async () => {
    const http = inject(HttpClient);

    const configService = inject(AppConfigService);

    await loadConfig(http, configService, 'config.json');
  };
}
import { routes } from './app.routes';
import { HttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      multi: true,
    },
  ],
};
