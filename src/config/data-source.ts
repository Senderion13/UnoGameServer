import * as dotenv from 'dotenv';
import * as pg from 'pg';
import { DataSource, DataSourceOptions } from 'typeorm';

//import { Environments, NON_PRODUCTION_ENVIRONMENTS } from 'consts';

dotenv.config();

//const isTestEnvironment = process.env.NODE_ENV === Environments.TEST;
const url = process.env.DATABASE_URL;
//const isProduction = !NON_PRODUCTION_ENVIRONMENTS.includes(process.env.ENVIRONMENT as Environments);
// when running migrations, determine directory / extension from the filename
const [dir, ext] = RegExp(/(src|dist)\/modules\/service\/modules\/database\/data-source\.(js|ts)/i)
  .exec(__filename)
  ?.slice(1) ?? ['dist', 'js'];

// Enable parse decimals to numbers. We have to be sure that our data won't run into precision issues
pg.types.setTypeParser(1700, parseFloat);

export const dataSourceConfig = (): { dataSource: DataSourceOptions } => ({
  dataSource: {
    type: 'postgres',
    url,
    logging: process.env.DB_LOGGING === 'true',
    //namingStrategy: new NamingStrategy(),
    //ssl: isProduction ? { rejectUnauthorized: false } : process.env.DB_SSL === 'true',
    synchronize: false,
    entities: [`${dir}/**/*.entity.${ext}`],
    migrations: [`${dir}/modules/service/modules/database/migrations/*.${ext}`],
  },
});

export const dataSource = new DataSource(dataSourceConfig().dataSource);

export type DataSourceConfig = ReturnType<typeof dataSourceConfig>['dataSource'];
