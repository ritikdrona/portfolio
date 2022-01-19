import type { NextPage } from 'next'
import Head from 'next/head'

import Education from 'components/Education'
import Experience from 'components/Experience'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Projects from 'components/Projects'

import styles from 'styles/home.module.scss'
import SidePanel from 'components/SidePanel'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ritik Drona</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <Header />
            {/* <SidePanel /> */}
            <Hero />
            <Education />
            <Experience />
            <Projects />
            <Footer />
        </>
    )
}

export default Home
