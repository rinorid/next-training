import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Detail.module.css'
import { gql, useQuery, useMutation } from '@apollo/client';
import Image from 'next/image'
import ButtonSubs from '@material-ui/core/Button';
import TextForm from '@material-ui/core/TextField';

const GET_PRODUCT_BY_SKU = gql`
  query getProductBySKU($sku: String) {
    products(
        filter: {
        sku: { in: [$sku] }
        }
    ) {
        items {
            sku
            name
            image {
                url
            }
            description{
                html
            }
            stock_status
            price_range {
                maximum_price{
                    final_price{
                        currency
                        value
                    }
                }
            }
        }
    }
  }
`;

const SUBSCRIBE = gql`
  mutation subscribe($email: String!) {
    subscribe(input: {email:$email}) {
        status {
            code
            message
            response
        }
    }
  }
`;

const ProductDetail = () => {
    const router = useRouter()
    const { query } = router
    const sku = query.sku

    const response = useQuery(GET_PRODUCT_BY_SKU, {
        variables: {
            sku: sku,
        }
    });

    const { data, loading, error } = response;
    const [addSubs, { data: dataSubs, loading: loadingSubs, error: errorSubs }] = useMutation(SUBSCRIBE);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data);
    const product = data.products.items[0];


    const getInputValue = (event)=>{
        event.preventDefault();
        const email = event.target.elements.email.value;
        addSubs({ variables: { email: email } });
    };

    let subsMessage = "";
    let subsRes = "";

    if (dataSubs) {
        console.log(dataSubs);
        subsMessage = dataSubs.subscribe.status.message; 
        subsRes = dataSubs.subscribe.status.response;
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {product.name}
        </h1>
        {
            product.image.url && product.image.url != null && product.image.url != '' ? (
                <Image
                    src={product.image.url}
                    alt="Product image"
                    width={500}
                    height={500}
                />
            ) : (null)
        }
        <div className={styles.card}>
            <table>
                <tbody>
                    <tr>
                        <td>SKU</td>
                        <td>:</td>
                        <td>{product.sku}</td>
                    </tr>
                    <tr>
                        <td>Stock status</td>
                        <td>:</td>
                        <td style={{color: '#0db4b9'}}>{product.stock_status}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>:</td>
                        <td style={{fontWeight: 'bold', color: '#af4154'}}>
                            {product.price_range.maximum_price.final_price.currency}
                            {product.price_range.maximum_price.final_price.value}
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: product.description.html }} />
            <br />
            <form onSubmit={getInputValue}>
                <TextForm id="email" variant="outlined" label="Email" type="email" name="email" />
                <br /><br />
                <ButtonSubs variant="contained" color="secondary" type="submit">Subscribe</ButtonSubs>
            </form>
            <br />
            {
                loadingSubs ? (<b>Loading....</b>) : (null)
            }
            {
                errorSubs ? (
                    <p style={{color:'#af4154'}}>
                        Error! {errorSubs.message}
                    </p>
                ) : (null)
            }
            { subsRes != "" && subsRes == "Success" ? (
                <p style={{color:'#0db4b9'}}>
                    {subsMessage}
                </p>
            ) : (
                <p style={{color:'#af4154'}}>
                    {subsMessage}
                </p>
            ) }
        </div>
      </main>
    </div>
  )
}

export default ProductDetail