import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule, AppConfigService } from '../config/config.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: AppConfigService) => {
        return configService.get('dataSource');
      },
      inject: [AppConfigService],
    }),
  ],
})
export class DatabaseModule {}
