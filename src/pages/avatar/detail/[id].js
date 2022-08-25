// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import styles from '../../../styles/Detail.module.css'
// import Link from 'next/link'
// import Image from 'next/image'

// const Detail = ({avatarData}) => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Avatar Character Detail</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Detail Page
//         </h1>
//         <Image
//             src={avatarData.photoUrl}
//             alt="avatar picture"
//             width={500}
//             height={500}
//         />
//         <div className={styles.card}>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>Name</td>
//                         <td>:</td>
//                         <td>{avatarData.name}</td>
//                     </tr>
//                     <tr>
//                         <td>Position</td>
//                         <td>:</td>
//                         <td>{avatarData.position}</td>
//                     </tr>
//                     <tr>
//                         <td>Gender</td>
//                         <td>:</td>
//                         <td>{avatarData.gender}</td>
//                     </tr>
//                     <tr>
//                         <td>Profession</td>
//                         <td>:</td>
//                         <td>{avatarData.profession}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//         <Link href={{ pathname: '/avatar/list'}}>
//                 <a className={styles.back}>
//                     Back
//                 </a>
//         </Link>
//       </main>
//     </div>
//   )
// }

// // export async function getStaticPaths() {
// //     // Call an external API endpoint to get data
// //     const res = await fetch('http://localhost:3000/api/avatars/list')
// //     const avatarsData = await res.json()
  
// //     // Get the paths we want to pre-render based on data
// //     const paths = avatarsData.map((avatarData) => ({
// //       params: { id: avatarData._id },
// //     }))
  
// //     // We'll pre-render only these paths at build time.
// //     // { fallback: false } means other routes should 404.
// //     return { paths, fallback: false }
// // }

// // export async function getStaticProps({ params }) {
// //     // const router = useRouter()
// //     // const { id } = router.query
// //     const res = await fetch(`http://localhost:3000/api/avatars/${params.id}`)
// //     const avatarData = await res.json()
  
// //     return {
// //       props: {
// //         avatarData,
// //       },
// //       // Next.js will attempt to re-generate the page:
// //       // - When a request comes in
// //       // - At most once every 10 seconds
// //       revalidate: 10, // In seconds
// //     }
// // }

// //Faster than getStaticProps because require getStaticPaths to copulate ALL data
// export async function getServerSideProps(context) {
//     const res = await fetch(`http://localhost:3000/api/avatars/`+context.query.id)
//     const avatarData = await res.json()
  
//     if (!avatarData) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: { avatarData }, // will be passed to the page component as props
//     }
//   }

// export default Detail

import React from 'react'

function Detail() {
  return (
    <div>Detail</div>
  )
}

export default Detail