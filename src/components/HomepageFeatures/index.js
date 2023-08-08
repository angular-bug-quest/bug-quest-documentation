import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Face bugs head on',
    Svg: require('@site/static/img/dragon-svgrepo-com.svg').default,
    description: (
      <>
        Do not fear bugs. Tame them! Angular Bug Quest is an isolated project to help you learn how to debug Angular applications.
      </>
    ),
  },
  {
    title: 'Sharpen your skills',
    Svg: require('@site/static/img/swords-svgrepo-com.svg').default,
    description: (
      <>
        Fixing these bugs will help you to get a better understanding of Angular and its ecosystem.
      </>
    ),
  },
  {
    title: 'Quick wins',
    Svg: require('@site/static/img/chest-svgrepo-com.svg').default,
    description: (
      <>
        Each bug is a small challenge that you can solve in a few minutes. You can do it!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
