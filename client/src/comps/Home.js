import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import image from './background.jpg';

var styles = {
  width: '100%',
  height: '1200px',
  backgroundImage: 'url(' + image + ')',
};

const Home = () => (
  <section style={styles}>
    <Header textAlign="center" as="h3">
      Welcome To The <Link to="/apps">App Store</Link>
    </Header>
  </section>
);

export default Home;
