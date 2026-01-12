export const ERROR_MESSAGE = {
  // Network Errors
  NETWORK_ERROR: 'Unable to connect. Please check your internet connection.',
  NETWORK_TIMEOUT: 'Request timed out. Please try again.',
  NO_INTERNET: 'No internet connection available.',

  // Authentication Errors
  JWT_EXPIRED: 'Your session has expired. Please log in again.',
  JWT_INVALID: 'Authentication failed. Please log in again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',

  // Server Errors
  INTERNAL_SERVER_ERROR:
    'Something went wrong on our end. Please try again later.',
  BAD_REQUEST: 'Invalid request. Please check your input.',
  NOT_FOUND: 'Resource not found.',
  CONFLICT: 'This resource already exists.',

  // Validation Errors
  VALIDATION_ERROR: 'Please check your input and try again.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  INVALID_PASSWORD: 'Password must be at least 8 characters.',

  // Upload/File Errors
  FILE_TOO_LARGE: 'File size exceeds the maximum limit.',
  INVALID_FILE_TYPE: 'File type is not supported.',
  UPLOAD_FAILED: 'Failed to upload file. Please try again.',

  // Operation Errors
  OPERATION_FAILED: 'Operation failed. Please try again.',
  DUPLICATE_ENTRY: 'This entry already exists.',
  INSUFFICIENT_PERMISSIONS:
    'You do not have permission to perform this action.',

  // Default Error
  DEFAULT: 'An unexpected error occurred. Please try again.',
}

export const NODE_ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
}

export const REQUEST_METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
  PATCH: 'PATCH',
}
