export interface EnvironmentVariables {
  PORT: number;
  database: {
    TYPE: string;
    HOST: string;
    PORT: number;
    USERNAME: string;
    PASSWORD: string;
    NAME: string;
  };
}
