import Head from 'next/head'
import styles from '@/styles/Detail.module.css'

const Login = () => {
    const getInputValue = (event)=>{
        // show the user input value to console
        event.preventDefault();
        const role = event.target.elements.role.value;

        document.cookie=`status=authenticated; path:/`;
        document.cookie=`role=`+role+`; path:/`;
    };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login Page
        </h1>
        <div className={styles.card}>
        <form onSubmit={getInputValue}>
            <label>
                Role:
                <input type="text" name="role" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
      </main>
    </div>
  )
}

export default Login