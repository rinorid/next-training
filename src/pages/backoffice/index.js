import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Detail.module.css'

const index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Admin Page
        </h1>
        <div className={styles.card}>
            <h2>Backoffice admin</h2>
        </div>
      </main>
    </div>
  )
}

export default index