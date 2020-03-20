interface GenericException {
  error: string
  code: number
  message: any
}

export class UnknownException implements GenericException {
  error = 'UNKNOWN'
  code = 500
  message = {}
}

export class ApiException implements GenericException {
  error = 'INPUT_ERROR'
  code = 400
  message = {}

  constructor(error?: string, message?: string) {
    this.error = error || 'INPUT_ERROR';
    this.message = message;
  }
}

export const accessDeniedException = (message: string = null): ApiException => ({
  error: 'ACCESS_DENIED',
  code: 401,
  message: message || 'Access denied'
});

export const notFoundException = (message: string = null): ApiException => ({
  error: 'NOT_FOUND',
  code: 404,
  message: message || 'Not found'
});

export const invalidParamException = (message: string = null): ApiException => ({
  error: 'INPUT_ERROR',
  code: 400,
  message: message || 'Invalid paramaters'
})