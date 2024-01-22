import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'وب سایت انگلیسی',
    Svg: require('@site/static/img/CS02.svg').default,
    description: (
      <Link to='https://fumcs.github.io/'>
        FUM-CS English WebSite
      </Link>
    ),
  },
  {
    title: 'برنامه درسی',
    Svg: require('@site/static/img/CS-Word-Cloud.svg').default,
    description: (
      <Link to='/docs/category/برنامه-درسی'>
        برنامه درسی پیشنهادی کارشناسی علوم کامپیوتر
      </Link>
    ),
  },
  {
    title: 'پزوهش و تحقیق',
    Svg: require('@site/static/img/tiling.svg').default,
    description: (
      <Link to='https://fumcs.github.io/projects/'>
        Rresearch Projects
      </Link>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
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
