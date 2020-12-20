import Head from 'next/head'
//import { connectToDatabase } from '../util/mongodb'
import Container from '../util/questions/container'

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
