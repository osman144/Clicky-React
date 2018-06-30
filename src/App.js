import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Column from "./components/Column"
import Container from "./components/Container"
import Row from './components/Row'
import friends from "./friends.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    currentScore:0,
    topScore:0,
    clicked:[]
  };

  gameClick = id => {
    if(this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id)});
    } else {
      this.handleReset()
    }

  }

  gameReset = () =>{
    this.setState({
      friends,
      currentScore:0,
      topScore: this.state.currentScore,
      wrong: 'Nani?!',
      clicked: [],

    });
    this.shuffleCards();
  }

  scoreIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.state({
      currentScore:newScore,
      wrong:''
    });
    if(newScore >= this.state.topScore){
      this.setState({topScore:newScore})
    } else if (newScore === 15) {
      this.setState({wrong:'You win! '})
    }

    this.shuffleCards();

  }

  shuffleCards = () => {
    let cardShuffle = cardShuffle(friends);
    this.setState({friends:cardShuffle})
  };



    // Map over this.state.friends and render a FriendCard component for each friend object
  render (){
    return (
      <Wrapper>
        <Nav
          title='Clicky Game'
          score={this.state.currentScore}
          topScore={this.state.topScore}
          wrong={this.state.wrong}
        />
        <Title>Click on an image to earn points, but don't click on any more than once

        </Title>


        {/* <Container>
          <Row> */}
        
          {this.state.friends.map(friend => (
            <Column size="md-3 sm-6">
            <FriendCard
              key={friend.id}
              id={friend.id}
              image={friend.image}
              gameClick={this.gameClick}
              scoreIncrement={this.handleIncrement}
              gameReset={this.gameReset}
              shuffleCards={this.shuffleCards}

            
            />
            </Column>
          ))}
          {/* </Row>
      </Container> */}
      </Wrapper>

    )

  }



}

export default App;
