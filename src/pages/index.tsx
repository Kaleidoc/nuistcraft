import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'
import HomepageFeatures from '../components/HomepageFeatures'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className="container">
        <video className={styles.heroLogo} autoPlay loop muted>
          <source src="/img/logo.webm" />
        </video>
        <h1 className="hero__title cubic-font">{siteConfig.title}</h1>
        <p className="hero__subtitle ">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            怎么玩？
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
