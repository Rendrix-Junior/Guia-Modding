import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Endereço errado',
    description: (
      <>
        Verifique se você digitou corretamente o endereço desejado.
      </>
    ),
  },
  {
    title: 'Endereço removido',
    description: (
      <>
        O endereço que você digitou pode ter sido removido do site.
      </>
    ),
  },
  {
    title: 'Endereço inexistente',
    description: (
      <>
        O endereço que você digitou pode não existir.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function ErrorFeatures() {
  return (
    <div className={styles.mainerror}>
      <h4 className={styles.titleerror}>Possiveis causas:</h4>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
