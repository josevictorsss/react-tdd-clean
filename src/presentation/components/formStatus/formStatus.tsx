import React from 'react'
import Spinner from '../spinner/spinner'
import Styles from './formStatusStyles.scss'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.erroWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}></span>
    </div>
  )
}

export default FormStatus
