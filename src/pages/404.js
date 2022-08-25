import React, { useEffect } from 'react'
import styles from '@/styles/Error.module.css'
import Router from 'next/router'

function Custom404() {
    useEffect(() => {
        const timer = setTimeout(() => {
            Router.push('/')
        }, 3000);
        return () => clearTimeout(timer);
    });

  return (
    <div className={styles.nf}>
    	<div className={styles.fof}>
        		<h1>Error 404</h1>
                <p>
                    You&apos;ll be redirect to homepage after 3 seconds
                </p>
    	</div>
    </div>
  )
}

export default Custom404