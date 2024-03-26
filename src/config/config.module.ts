import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from './database';
import { EnvironmentVariables } from '../types/env-variables';

export class AppConfigService extends ConfigService<EnvironmentVariables, true> {}

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      //validationSchema: envValidationSchema,
      load: [databaseConfig],
    }),
  ],
})
export class AppConfigModule {}
