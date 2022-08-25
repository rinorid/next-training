import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Detail.module.css'

const index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Superadmin Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Superadmin Page
        </h1>
        <div className={styles.card}>
            <h2>Backoffice superadmin</h2>
        </div>
      </main>
    </div>
  )
}

export default index