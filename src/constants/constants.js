import { Brain, Users, Shield } from 'lucide-react'

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

export const WORKFLOWS = [
  {
    id: 1,
    title: 'Crane Selection',
    description: 'Find the perfect crane for your construction project',
    icon: Brain,
    features: [
      'Smart crane recommendations',
      'Load capacity analysis',
      'Site requirement matching',
    ],
    gradient: 'from-purple-500 to-purple-700',
    titleColor: 'text-purple-600 dark:text-purple-400',
    buttonGradient: 'from-purple-500 to-purple-700',
    cardBg: 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200',
  },
  {
    id: 2,
    title: 'Technical Support',
    description: 'Get detailed specifications and maintenance guidance',
    icon: Users,
    features: [
      'Equipment specifications',
      'Maintenance guidance',
      'Troubleshooting help',
    ],
    gradient: 'from-orange-500 to-orange-700',
    titleColor: 'text-orange-600 dark:orange-400',
    buttonGradient: 'from-orange-500 to-orange-700',
    cardBg: 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200',
  },
  {
    id: 3,
    title: 'Safety First',
    description: 'Ensure safe crane operations with expert guidance',
    icon: Shield,
    features: ['Safety protocols', 'Compliance checks', 'Risk assessment'],
    gradient: 'from-green-500 to-green-700',
    titleColor: 'text-green-600 dark:green-400',
    buttonGradient: 'from-green-500 to-green-700',
    cardBg: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200',
  },
]

export const REQUEST_METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
  PATCH: 'PATCH',
}
