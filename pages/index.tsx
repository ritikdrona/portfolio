import type { NextPage } from 'next'
import Head from 'next/head'
import Education from '../components/Education'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ritik Drona</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          COMING SOON !
        </h1>
      </main>

      <Education />
    </div>
  )
}

export default Home
