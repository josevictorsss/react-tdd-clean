import React from 'react'
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader
} from '@/presentation/components'
import Styles from './signup-styles.scss'
import Context from '@/presentation/contexts/form/formContext'
import { Link } from 'react-router-dom'
const Signup: React.FC = () => {
  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state: {} }}>
        <form data-testid="form" className={Styles.form}>
          <h2>Criar conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Repita sua senha"
          />
          <button data-testid="submit" className={Styles.submit} type="submit">
            Entrar
          </button>
          <Link data-testid="signup" to="/login" className={Styles.link}>
            {' '}
            Voltar para Login{' '}
          </Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Signup
