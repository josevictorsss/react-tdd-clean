import React, { memo } from 'react'
import Logo from '@/presentation/components/logo/logo'
import Styles from './loginHeaderStyles.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>Enquire 4Devs</h1>
    </header>
  )
}

export default memo(LoginHeader)
