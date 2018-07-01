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

function cardShuffled(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
class App extends Component {
  componentDidMount() {
    this.shuffleCards();
  }
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore:0,
    topScore:0,
    clicked:[],
    wrong:''
  };

  gameClick = id => {
    if(this.state.clicked.indexOf(id) === -1){
      this.scoreIncrement();
      this.setState({ clicked: this.state.clicked.concat(id)});
    } else {
      this.gameReset()
    }

  }

  gameReset = () =>{
    this.setState({
      currentScore:0,
      topScore: this.state.topScore,
      wrong: 'Nani?!',
      clicked: [],

    });
    this.shuffleCards();
  }

  scoreIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
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
    let cardShuffle = cardShuffled(friends);
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
              onClick = {this.gameClick}
              shuffle = {this.shuffleCards}
              incrementer = {this.scoreIncrement}
              resetGame = {this.gameReset}


            
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
