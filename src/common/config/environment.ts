const config = {
  API: {
    PORT: process.env.PORT ?? '4000',
    VERSION: process.env.VERSION ?? 'v0',
    ENVIRONMENT: process.env.ENVIRONMENT ?? 'development'
  },
  DB: {
    NAME: process.env.DATABASE_NAME ?? '',
    USER: process.env.DATABASE_USER ?? '',
    PASS: process.env.DATABASE_PASS ?? '',
    HOST: process.env.DATABASE_HOST ?? '',
    PORT: Number(process.env.DATABASE_PORT),
  }
};

export default config;
