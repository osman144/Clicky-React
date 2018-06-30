import React from 'react'
import './Title.css';

const Title = props => (
    <header className ='instructions'>
        <h1>{props.children}</h1>
        {/* <h2>Go</h2> */}


    </header>


)

export default Title;
