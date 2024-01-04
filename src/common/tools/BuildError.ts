class BuildError extends Error {
  statusCode: number;

  constructor({ code, message }: { code: number, message: string }) {
    super(message);

    this.statusCode = code;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default BuildError;
