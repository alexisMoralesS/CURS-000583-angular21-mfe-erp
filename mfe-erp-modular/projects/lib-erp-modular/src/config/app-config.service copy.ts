import { Injectable, inject, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

import { AppConfig } from './app-config.model';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private readonly http = inject(HttpClient);

  readonly config = signal<AppConfig | null>(null);

  async load(configPath: string): Promise<void> {
    const config = await firstValueFrom(this.http.get<AppConfig>(configPath));

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
