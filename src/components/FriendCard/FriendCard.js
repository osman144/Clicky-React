import React from 'react';
import './FriendCard.css';

const FriendCard = props => (
  <div className="card">
    <div className="img-container shake">
      <img alt='stuff' src={props.image} onClick={()=> props.onClick(props.id)}/>
    </div>
  </div>
);

export default FriendCard;
