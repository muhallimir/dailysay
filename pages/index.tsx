import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { GradientBackground } from '@/components/phrasegenerator/QuoteGeneratorElements';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Phrase</title>
        <meta name='description' content='Personal project for generating inpirational phrases' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <GradientBackground />
      </main>
    </>
  );
}
