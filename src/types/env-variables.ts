import { DataSourceConfig } from '../config';

export interface EnvironmentVariables {
  PORT: number;
  DATABASE_URL: string;
  dataSource: DataSourceConfig;
}
