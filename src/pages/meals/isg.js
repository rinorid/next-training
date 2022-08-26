import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

function Isg({data}) {
  
  console.log(data);
  const meals = data.meals;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>ISG Meals</title>
        <meta name="description" content="Meals ISG page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Canadian Meals ISG
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

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
    const data = await res.json()

    // Pass data to the page via props
    return { 
        props: { data },
        revalidate: 10,
    }

};

export default Isg