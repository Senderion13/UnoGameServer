import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dataSourceConfig } from './data-source';
import { EnvironmentVariables } from '../types/env-variables';
import { envValidationSchema } from '../validation/env';

export class AppConfigService extends ConfigService<EnvironmentVariables, true> {}

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      validationSchema: envValidationSchema,
      load: [dataSourceConfig],
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
