import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div>
        <div className="projects-grid">
        

{/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCW7y_qzjN-JUNY1PtfRUrJyT2ePooow-vlg&usqp=CAU)'}} ></CardTitle>
            <CardText>
            Kaprekar constant, or 6174, is a constant that arises when we take a 4-digit integer, form the largest and smallest numbers from its digits, and then subtract these two numbers. Continuing with this process of forming and subtracting, we will always arrive at the number 6174.
            </CardText>
            <CardActions border>
              <Button colored href="https://infallible-goldstine-5b3b81.netlify.app/" target="_blank">Go to Site</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxIHbJp_ZWCHmhYrlKJA_ssaj5BLTg83Fw3w&usqp=CAU) center / cover'}} ></CardTitle>
            <CardText>
              Tic-Tac-Toe game using javascript and some of concepts from AI.
            </CardText>
            <CardActions border>
              <Button colored href= "https://affectionate-wing-65d162.netlify.app/" target="_blank">Go To Site</Button>
            
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQy7w4mfX7I5MUFTWx4qdMSNOABz945bMHbw&usqp=CAU) center / cover'}} ></CardTitle>
            <CardText>
              A small-scale replica of Facebook as BroadcastApp.
            </CardText>
            <CardActions border>
              <Button colored href= "https://github.com/shubha0008/broadcast-shubha" target="_blank">Go to GitHub Repository</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
          
          <div className="projects-grid">
          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0w0TY2-LoWiqZIOXJIEZ31KESbDSKR8ZmhA&usqp=CAU) center / cover'}} ></CardTitle>
            <CardText>
              A small-scale replica of IMDB using Vanilla Javascript and Bootstrap.
            </CardText>
            <CardActions border>
              <Button colored href= "https://jolly-allen-3b9f27.netlify.app/" target="_blank">Go to App </Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

     

        {/* Project 5 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZE18s2z1j3eQUT7-nTznIgXXWwZw3GxtRXw&usqp=CAU) center / cover'}} ></CardTitle>
        <CardText>
          UPcoming Project : Money manager app . with this app one can regulate the daily , monthly expenses . This app will be built using MongoDB , Heroku and NodeJS.
        </CardText>
        <CardActions border>
          <Button colored href= "https://github.com/shubha0008/money-manager-frontend" target="_blank">Go to Github Repository  </Button>
          
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

    </div>
</div>

      )}
            

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;