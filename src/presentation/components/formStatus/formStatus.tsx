import React, { useContext } from 'react'
import Spinner from '../spinner/spinner'
import Styles from './formStatusStyles.scss'
import Context from '@/presentation/contexts/form/formContext'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.erroWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && <span className={Styles.error}>{errorState.main}</span> }
    </div>
  )
}

export default FormStatus
