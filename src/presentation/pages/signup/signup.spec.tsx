import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Signup from './signup'

type SutTypes = {
  sut: RenderResult
};

const makeSut = (): SutTypes => {
  const sut = render(<Signup />)
  return {
    sut
  }
}

const testChildCount = (
  sut: RenderResult,
  fieldName: string,
  count: number
): void => {
  const el = sut.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

const testButtonIsDisabled = (
  sut: RenderResult,
  fieldName: string,
  isDisabled: boolean
): void => {
  const butotn = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(butotn.disabled).toBe(isDisabled)
}

const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string
): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Tudo certo')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

describe('SignUp Component', () => {
  test('Should start with initial state', () => {
    const { sut } = makeSut()
    const validationError = 'Campo obrigatório'
    testChildCount(sut, 'error-wrap', 0)
    testButtonIsDisabled(sut, 'submit', true)
    testStatusForField(sut, 'name', validationError)
    testStatusForField(sut, 'email', validationError)
    testStatusForField(sut, 'password', validationError)
    testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})