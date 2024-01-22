import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  imageAddress: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'وب سایت انگلیسی',
    imageAddress: '/img/CS02.png',
    description: (
      <Link to='https://fumcs.github.io/'>FUM-CS English WebSite</Link>
    ),
  },
  {
    title: 'برنامه درسی',
    imageAddress: '/img/CS-Word-Cloud.png',
    description: (
      <Link to='/docs/category/برنامه-درسی'>
        برنامه درسی پیشنهادی کارشناسی علوم کامپیوتر
      </Link>
    ),
  },
  {
    title: 'پزوهش و تحقیق',
    imageAddress: '/img/tiling.png',
    description: (
      <Link to='https://fumcs.github.io/projects/'>Rresearch Projects</Link>
    ),
  },
];

function Feature({ title, imageAddress, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <img className={styles.featureImg} src={imageAddress} />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
