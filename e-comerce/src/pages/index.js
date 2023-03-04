import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import products from 'products.json'
import shoppingLogo from "public/image/shopping_cart.jpg"
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
           Shopping cart&nbsp;
          </p>
          <div>
            <a
              href="http://localhost:3000/#/cart"
              // target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <Image
                src={shoppingLogo}NmZmMzRiMmMtMzQ1Ni00NjQxLWJmMWMtZDA0OTNkMmM1OTk5NjM4MTM0MzM4ODc1NzEzMzcy
                alt="Vercel Logo"
                // className={styles.vercelLogo}
                width={49}
                height={55}
                 priority
              />
            </a>
          </div>
        </div>
        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>
                <button className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-price={product.price}
                >
                 <h3 className='addbtn'>Add to Cart</h3> 
                </button>
                </p>
              </div>
            );
          })}
        </div>
        </main >
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="NmZmMzRiMmMtMzQ1Ni00NjQxLWJmMWMtZDA0OTNkMmM1OTk5NjM4MTM0MzM4ODc1NzEzMzcy" />
    </>
  )
}