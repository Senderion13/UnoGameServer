import { Global, Injectable, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { database } from './';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EnvironmentVariables } from '../types/env-variables';

export class AppConfigService extends ConfigService<EnvironmentVariables, true> {}

@Global()
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot({
      cache: true,
      //validationSchema: envValidationSchema,
      load: [database],
    }),
  ],
  providers: [AppConfigService],
})
export class AppConfigModule {}
