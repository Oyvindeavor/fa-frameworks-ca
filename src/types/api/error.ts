// Type definition for error responses from the NOROFF API.

export type ErrorResponse = {
  errors: { message: string }[];
  status: string;
  statusCode: number;
};
