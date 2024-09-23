export type Env = {
  Variables: {
    api_key: string;
    db_host: string;
    db_username: string;
    db_password: string;
    db_name: string;
    gh_pat: string;
  };
};

export type DOT_ENV = {
  DEVELOP: string;
  X_API_KEY: string;
  DB_HOST: string;
  DB_USERNAME: string;
  DEV_DB_USERNAME: string;
  DB_PASSWORD: string;
  DEV_DB_PASSWORD: string;
  DB_NAME: string;
  GH_PAT: string;
};
