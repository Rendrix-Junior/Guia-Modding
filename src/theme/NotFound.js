import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ErrorFeatures from '@site/src/components/ErrorFeatures';

import styles from '../components/ErrorFeatures/index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Página não encontrada</h1>
        <p className="hero__subtitle">O conteúdo pode ter sido removido ou não estar mais disponível</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/">
            Retornar a página inicial
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Erro 404`}
      description="Um guia completo para você que deseja aprender a criar mods para Stardew Valley.">
      <HomepageHeader />
      <main>
        <ErrorFeatures />
      </main>
    </Layout>
  );
}
