import React, { useContext } from 'react'
import Spinner from '../spinner/spinner'
import Styles from './formStatusStyles.scss'
import Context from '@/presentation/contexts/form/formContext'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.erroWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>{errorMessage}</span> }
    </div>
  )
}

export default FormStatus
