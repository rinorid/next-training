import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Detail.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Detail = () => {
  const router = useRouter()
  const { name, position, gender, profession, image } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>Avatar Character Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Detail Page
        </h1>
        <Image
            src={image}
            alt="avatar picture"
            width={500}
            height={500}
        />
        <div className={styles.card}>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td>:</td>
                        <td>{position}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>:</td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td>Profession</td>
                        <td>:</td>
                        <td>{profession}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Link href={{ pathname: '/'}}>
                <a className={styles.back}>
                    Back Home
                </a>
        </Link>
      </main>
    </div>
  )
}

export default Detail