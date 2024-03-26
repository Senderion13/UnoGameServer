import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule, AppConfigService } from '../config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: AppConfigService) => {
        return config.get('database');
      },
    }),
  ],
})
export class DatabaseModule {}
