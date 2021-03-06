import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import styles from '../styles.css';

import FactsData from '../data/FactsData'

export default class Contact extends React.Component {
  render() {
    const factCard = (factItem, i) => (
      <Col md="4" key={i} className={styles.factCard}>
        <div className={styles[`factCard${i}`]}>
          <img className={styles.factCardImg} src={factItem.cardImg} />
          <p className={styles.factDesc}>
            {factItem.description.map((sent, i) => <span key={i} style={i % 2 === 0 ? {} : {fontWeight: '500'}}>{sent} </span>)}
          </p>
          <a href={factItem.referenceLink} target="_blank" className={styles.factLink}>Reference Link</a>
        </div>
      </Col>
    );

    return (
      <div>
        <div className={styles.factsHero}>
          <Container className={styles.heroCopy}>
            <Col md="10" md-offset="1">
              <img className={styles.factsHeroIcon} src={FactsData.hero.icon} />
              <h1 className={styles.factsHeroTitle}>{FactsData.hero.title}</h1>
            </Col>
            <Col md="8" md-offset="2">
              <p>{FactsData.hero.subtitle.map((s, i) => <span key={i} style={i > 0 ? {fontWeight: '500'} : {}}>{s} </span>)}</p>
            </Col>
          </Container>
        </div>
        <div>
          <Container className={styles.factCards}>
            <Row className={styles.flexBox}>
              {FactsData.factCards.map((factItem, i) => factCard(factItem, i + 1))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
