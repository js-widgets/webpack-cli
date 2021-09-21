import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Configurable',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Build once and embed many times. Configure your widgets when embedding
        to leverage the same widget in multiple situations. "Tweak the widget
        knobs and stamp".
      </>
    ),
  },
  {
    title: 'Modular',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Widgets are designed to work seamlessly with each other in any digital
        experience. Use them in a website, or an application, as your digital
        building blocks.
      </>
    ),
  },
  {
    title: 'Consistent',
    Svg: require('../../static/img/drupal-js.svg').default,
    description: (
      <>
        Weather your organization uses a CMS, static HTML, or any other tech
        widgets stay the same. Feel free to re-platform while keeping your
        widgets intact. Leverage the CMS integrations for a better editorial
        experience.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
