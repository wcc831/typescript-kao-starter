
const { PROJECT_ENV } = process.env;
const ENV_WHITELIST = ['local', 'testing', 'staging', 'production'];

/* istanbul ignore if */
if (!PROJECT_ENV || !ENV_WHITELIST.includes(PROJECT_ENV)) {
  throw new Error(`PROJECT_ENV: must be one of ${ENV_WHITELIST}`);
}

interface ProjectEnv {
  REQUEST_LOGS: boolean;
  LOG_LEVEL?: string;
  JWT_SECRET: string;

  DB: string
  DB_HOST: string
  DB_USERNAME: string
  DB_PASSWORD: string
  DB_DIALECT: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'mariadb'
}

export const k: ProjectEnv = require(`../env/${PROJECT_ENV}`);
