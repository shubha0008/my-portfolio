import React, { Component } from 'react';
import Skills from './skills';


class About extends Component {
  render() {
    return(
      <div><h1>Let me introduce myself.</h1>
      <p style={{ width: '75%', margin: 'auto', paddingTop: '3em' , fontFamily: 'Arial, sans-serif' , font :'message-box' ,fontSize:'20px'}}>
      Hi, I’m Shubha Rashmi and I Specialize in Full Stack Development with NodeJS in frontend . I learnt Full Stack by doing projects on my own . I am an enthusiast and wants to learn as much possible in coding .
      During Graduation I had Electronics and communication as my stream . But I found coding more interesting and learnt C++ and Java  .
      I want to have my expertise in Javascript language so I am learning and working on it . I have done few projects in React . I am looking for opportunity so that I can learn and apply my knowledge and skills in a large-scale Project . 
      </p>

      <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />

      </div>
    )
  }
}

export default About;