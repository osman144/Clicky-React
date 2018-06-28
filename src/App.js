import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import GameInstructions from "./components/Game Instructions";
import friends from "friends.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

    // Map over this.state.friends and render a FriendCard component for each friend object




}

export default App;
