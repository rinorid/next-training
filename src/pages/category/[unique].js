import React from 'react'
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';

const GET_CATEGORY_BY_ID = gql`
  query getCategoriesByID($categoryID: Int) {
        category(id: $categoryID) {
        id
        name
        products {
            items {
                sku
                name
                image {
                    url
                }
            }
        }
    }
  }
`;

const Categories = () => {
    const router = useRouter()
    const { query } = router
    const unique = query.unique

    const response = useQuery(GET_CATEGORY_BY_ID, {
        variables: {
            categoryID: unique,
        }
    });
    const { data: dataCategory, loading, error } = response;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    // console.log(dataCategory);

    return (
        <div className={styles.container}>
        <Head>
          <title>{dataCategory.category.name}</title>
          <meta name="description" content="Categories page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            {dataCategory.category.name}
          </h1>
  
          <div className={styles.grid}>
              { 
                  dataCategory.category.products.items.map((v, i) => (
                      <Link key={i} href={{ pathname: '/product/[sku]', query: { sku: v.sku } }}>
                      <a className={styles.card} style={{margin: '50px'}}>
                          {
                            v.image.url && v.image.url != null && v.image.url != '' ? (
                                <Image
                                    src={v.image.url}
                                    alt="Category picture"
                                    width={500}
                                    height={500}
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