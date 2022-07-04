import React, { memo } from 'react'
import Styles from './footerStyles.scss'

const Footer: React.FC = () => {
  return <footer className={Styles.footer}></footer>
}

export default memo(Footer)
