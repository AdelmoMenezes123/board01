import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const session = false
  return session? (
    <button type='button' className={ styles.signInButton } onClick={()=>[]}>
      <img src="https://github.com/adelmomenezes123.png" alt="Foto usuario" />
      Ola Adelmo
      <FiX color='#737390' className={ styles.closeIcon} />
    </button>
  ) : (
    <button type='button' className={ styles.signInButton } onClick={()=>[]}>
      <FaGithub color='#FFB800'/>
      Entrar com github
    </button>
  )
}