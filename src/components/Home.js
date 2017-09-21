import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <section className="about">
        <h2>Ugly Router App</h2>
        <p className="App-intro">
          Welcome home. This is the ugly home page. To learn about what's going on, visit the <Link to='/about'>about page</Link>.
        </p>
      </section>
    );
  }
}
