import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/useCases/authentication/remoteAuthenticationFactory'
import { makeLoginValidation } from './loginValidationFactory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
