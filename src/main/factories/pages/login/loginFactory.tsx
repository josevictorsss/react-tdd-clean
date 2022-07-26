import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/useCases/authentication/remoteAuthenticationFactory'
import { makeLoginValidation } from './loginValidationFactory'
import { makeLocalSaveAccessToken } from '@/main/factories/useCases/saveAcessToken/localSaveAccessTokenFactory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
