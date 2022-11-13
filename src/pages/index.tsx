import { GetStaticProps } from 'next';
import Head from 'next/head'
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
    <Head>
        <title>Board - Organizando  suas tarefas</title>
    </Head>
    <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />
        <section className={styles.callToAction}>
          <h1>Uma Ferramenta para seu dia a dia escreva, planeje e organize-se...</h1>
          <p><span>100% Gratuita</span> e online</p>
        
          <div className={styles.donaters}>
            <img src="https://gitlab.com/uploads/-/system/user/avatar/4514828/avatar.png?width=400" alt="Colaboradores" />
            <img src="https://github.com/adelmomenezes123.png" alt="Colaboradores" />
          </div>
        </section>
        
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 // ATUALIZACAO A CADA 60 MINUTOS
  }
}