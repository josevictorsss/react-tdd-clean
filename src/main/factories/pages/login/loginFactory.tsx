import React from 'react'
import { Login } from '@/presentation/pages'
import { RemoteAuthentication } from '@/data/useCases/authentication/remoteAuthentication'
import { AxiosHttpClient } from '@/infra/http/axiosHttpClient/axiosHttpClient'
import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/builder/validationBuilder'

export const makeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthenticated = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
  return (
    <Login
      authentication={remoteAuthenticated}
      validation={validationComposite}
    />
  )
}
