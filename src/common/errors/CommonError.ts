class CommonError extends Error {
  constructor({ statusCode: number, message: string }) {
    super();
  }
}

export default CommonError;
