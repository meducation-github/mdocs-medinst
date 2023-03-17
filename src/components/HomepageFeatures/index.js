import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { MStorage } from '../urls';
import { CardActionArea } from '@mui/material';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Root',
    img: 'institute.png',
    link:'./docs/category/root',
  },
  {
    title: 'Institute',
    img: 'staff.png',
    link:'./docs/category/institute',
  },
  {
    title: 'Finance',
    img: 'student.png',
    link:'./docs/category/finance',
  },
  {
    title: 'Student',
    img: 'parent.png',
    link:'./docs/category/student',
  },
  {
    title: 'Staff',
    img: 'parent.png',
    link:'./docs/category/staff',
  },
  {
    title: 'Parent',
    img: 'parent.png',
    link:'./docs/category/parent',
  },
  {
    title: 'Admin',
    img: 'parent.png',
    link:'./docs/category/admin',
  },
];

function Feature({img, title,link}) {

  const IMG_PATH = MStorage+"mdocumentation/img/"

  const styleDiv = {
    position:"relative",
    top:"20px"
  }

  const styleHead = {
    margin:"10px",
    padding:"5px"
  }

  const styleText = {
    fontFamily: "system-ui"
  }

  return (
    <div className={clsx('col col--3')} style={styleDiv}>
      <Link to={link}>
        <CardActionArea sx={{p:2}}>
          <div className="text--center">
            <img src={IMG_PATH+img} width="30%"/>
          </div>
          <div className="text--center padding-horiz--md">
            <h3 style={styleHead}>{title}</h3>
          </div>
        </CardActionArea>
      </Link>
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
