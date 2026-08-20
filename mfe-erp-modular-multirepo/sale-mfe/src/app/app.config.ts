import { providePrimeNG } from 'primeng/config';
import { AppConfigService, loadConfig } from 'lib-erp-modular';
import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  APP_INITIALIZER,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { HttpClient } from '@angular/common/http';
function initializeConfig() {
  return async () => {
    const http = inject(HttpClient);

    const configService = inject(AppConfigService);

    await loadConfig(http, configService, 'config.json');
  };
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {},
      },
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      multi: true,
    },
  ],
};
