import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Programmering med javascript',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Javascript har utvikla seg til å bli et av de viktigste programmerings-språkene
        i vår tid. Fra starten som et enkelt script-språk som skifter farger på websider til
        dagens versjon som er motoren bak nesten alle store websider.
        Hovedsakelig på klient-sida (i din nettleser), men stadig oftere også på serversida
        - da ofte som nodejs
      </>
    ),
  },
  {
    title: 'Nodejs - javascript på serveren',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Det er en stor gevinst i å kunne bruke samme språk på serveren og på klientene.
        Med moderne js basert på v8 er javascript blitt et raskt språk som løser de fleste
        oppgavene på en rask og god måte
      </>
    ),
  },
  {
    title: 'Rask utvikling',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Javascript oppdateres kontinuerlig - nye og bedre løsninger legges til språket fortløpende.
        De nye delene av språket legges til etter grundig utprøving og diskusjon. Dette gjør at js
        ofte ligger helt i teten i konkuransen med andre språk slik som python, java, c++ og c#.
        Andre språk slik som Rust og Haskell er stifinnere for å finne de nye løsningene som moderne språk
        skal ha, men de er ofte litt tyngre å ta i bruk / sette seg inn i.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Teorisider${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Åpne boka
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
