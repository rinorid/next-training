import React from 'react'
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

const GET_CATEGORIES = gql`
  query getCategories {
    categories(filters: {}) {
        items {
            id
            name
            image
        }
    }
  }
`;

const Categories = () => {
    const response = useQuery(GET_CATEGORIES);
    const { data: dataCategory, loading, error } = response;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    console.log(dataCategory);

    return (
        <div className={styles.container}>
        <Head>
          <title>Categories</title>
          <meta name="description" content="Categories page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Categories
          </h1>
  
          <div className={styles.grid}>
              { 
                  dataCategory.categories.items.map((v, i) => (
                      <Link key={i} href={{ pathname: '/category/[unique]', query: { unique: v.id } }}>
                      <a className={styles.card} style={{margin: '20px'}}>
                          {
                            v.image && v.image != null && v.image != '' ? (
                                <Image
                                    src={v.image}
                                    alt="Category picture"
                                    width={300}
                                    height={200}
                                />
                            ) : (null)
                          }
                          
                          <h2>{v.name}</h2>
                      </a>
                      </Link>
                  ))
              }
          </div>
        </main>
      </div>
    )
}

export default Categories