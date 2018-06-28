import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
// import GameInstructions from "./components/GameInstructions";
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
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            // key={friend.id}
            image={friend.image}
          
          />
        ))}
      </Wrapper>

    )

  }



}

export default App;
