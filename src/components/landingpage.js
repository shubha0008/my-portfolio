import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
             src="https://i.ibb.co/f89xPHM/IMG-20200101-185645.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Hello ! I am Shubha</h1>
              <h5>Full Stack Web Developer</h5>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;