import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'

export default function Csr() {
    const [meals, setMeals] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const fetchData = async () => { 
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
        const result = await data.json();
        setMeals(result.meals);
        setLoading(false);
    }

    console.log(meals);
    
    useEffect(() => {
      fetchData();
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!meals) return <p>No meals data</p>

  return (
    <div className={styles.container}>
      <Head>
        <title>CSR Meals</title>
        <meta name="description" content="Meals CSR page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Canadian Meals CSR
        </h1>

        <div className={styles.grid}>
            { 
                meals.map(r => (
                    <Link key={r.idMeal} href={{ pathname: '/meals/[id]', query: { id: r.idMeal } }}>
                    <a className={styles.card} style={{margin: '50px'}}>
                        <Image
                            src={r.strMealThumb}
                            alt="meals picture"
                            width={500}
                            height={500}
                        />
                        <h2>{r.strMeal}</h2>
                    </a>
                    </Link>
                ))
            }
        </div>
      </main>

      
    </div>
  )
}