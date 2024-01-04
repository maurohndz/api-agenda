class BuildResponse {
  code: number;
  message: string;
  data: any;
  skip: number | null;
  limit: number | null;

  constructor(type: string, body: { data?: any, skip?: number, limit?: number }) {
    const info = {
      code: 200,
      message: ''
    };

    this.code = info.code;
    this.message = info.message;
    this.data = body?.data ?? null;
    this.skip = body?.skip ?? null;
    this.limit = body?.limit ?? null;
  }

  getResponse(): { code: number; message: string, data: any } {
    return {
      message: this.message,
      code: this.code,
      data: this.data,
      ...(this.skip && { skip: this.skip }),
      ...(this.limit && { limit: this.limit }),
    };
  }
}

export default BuildResponse;
