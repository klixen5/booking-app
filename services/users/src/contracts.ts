export type RegisterRequest = {
  email: string
  password: string
  displayName: string
}

export type UserResponse = {
  id: string
  email: string
  displayName: string
  role: 'user' | 'admin'
  createdAt: string
}

export type RegisterResponse = UserResponse

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  accessToken: string
  expiresIn: number
}

export type GetProfileResponse = UserResponse

export type ApiErrorResponse = {
  error: {
    code: 'VALIDATION_ERROR' | 'EMAIL_EXISTS' | 'INVALID_CREDENTIALS' | 'UNAUTHORIZED' | 'INTERNAL_ERROR'
    message: string
    requestId: string
  }
}