import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Container from "./components/Container"
import friends from "./friends.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends
  };

    // Map over this.state.friends and render a FriendCard component for each friend object
  render (){
    return (
      <Wrapper>
        <Nav>Friend's List</Nav>
        <Title>Click on an image to earn points, but don't click on any more than once </Title>

        <Container>
        <Main>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            // key={friend.id}
            image={friend.image}
          
          />
        ))}
        </Main>
        </Container>
      </Wrapper>

    )

  }



}

export default App;
