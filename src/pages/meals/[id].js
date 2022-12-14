import Head from 'next/head'
import styles from '@/styles/Detail.module.css'
import Image from 'next/image'

const SsrDetail = ({data}) => {
    console.log(data);
    const meal = data.meals[0];
  return (
    <div className={styles.container}>
      <Head>
        <title>Meals Detail</title>
        <meta name="description" content="Meals detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Meals Detail
        </h1>
        <Image
            src={meal.strMealThumb}
            alt="meal picture"
            width={500}
            height={500}
        />
        <div className={styles.card}>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td>{meal.strMeal}</td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>:</td>
                        <td>{meal.strCategory}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>:</td>
                        <td>{meal.strArea}</td>
                    </tr>
                    <tr>
                        <td>Instructions</td>
                        <td>:</td>
                        <td>{meal.strInstructions}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${context.params.id}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, 
    }
  }

export default SsrDetail