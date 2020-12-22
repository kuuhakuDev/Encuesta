import Head from 'next/head'
//import { connectToDatabase } from '../util/mongodb'
import Container from '../util/questions/container'

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B58ERDK4XC"/>
        <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-B58ERDK4XC');
        `
      }}
      />
      </Head>

      <div className="main">
        <Container/>
      </div>
    </div>
  )
}

export default Home;
/* export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
} */
