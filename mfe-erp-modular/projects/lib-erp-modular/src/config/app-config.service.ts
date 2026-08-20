import { Injectable, inject, signal } from '@angular/core';

import { AppConfig } from './app-config.model';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  readonly config = signal<AppConfig | null>(null);

  setConfig(config: AppConfig): void {
    this.config.set(config);
  }

  get value(): AppConfig {

    const config = this.config();

    if (!config) {
      throw new Error('Config no cargada');
    }

    return config;
  }
}
