const config = {
  API: {
    PORT: process.env.PORT ?? '4000',
    VERSION: process.env.VERSION ?? 'v0',
    ENVIRONMENT: process.env.ENVIRONMENT ?? 'development'
  }
};

export default config;
