const config = {
  API: {
    PORT: process.env.PORT ?? '4000',
    VERSION: process.env.VERSION ?? 'v0',
    ENVIRONMENT: process.env.ENVIRONMENT ?? 'development'
  },
  DB: {
    PORT: Number(process.env.DATABASE_PORT),
    NAME: process.env.DATABASE_NAME ?? '',
    USER: process.env.DATABASE_USER ?? '',
    PASS: process.env.DATABASE_PASS ?? '',
    HOST: process.env.DATABASE_HOST ?? ''
  }
};

export default config;
