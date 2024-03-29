import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <span>
          بسم الله الرحمان الرحیم
        </span>
        <Heading as='h1' className='hero__title'>
          {siteConfig.title}
        </Heading>
        {/* <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <span>
          وب‌سایت فارسی مستندات علوم کامپیوتر دانشگاه فردوسی مشهد
        </span> */}
      </div>
    </header >
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Ferdowsi University of Mashhad, CS Department'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
