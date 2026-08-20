import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppConfig } from './app-config.model';
import { AppConfigService } from './app-config.service';

export async function loadConfig(
  http: HttpClient,
  configService: AppConfigService,
  path: string
): Promise<void> {

  const config = await firstValueFrom(
    http.get<AppConfig>(path)
  );

  configService.setConfig(config);
}
