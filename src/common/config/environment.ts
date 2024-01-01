const config = {
  API: {
    PORT: process.env.PORT ?? '4000',
    VERSION: process.env.VERSION ?? 'v0',
    ENVIRONMENT: process.env.ENVIRONMENT ?? 'development'
  },
  DB: {
    DATABASE_NAME: process.env.DATABASE_NAME ?? '',
    DATABASE_USER: process.env.DATABASE_USER ?? '',
    DATABASE_PASS: process.env.DATABASE_PASS ?? '',
    DATABASE_HOST: process.env.DATABASE_HOST ?? '',
    DATABASE_PORT: Number(process.env.DATABASE_PORT),
  }
};

export default config;
