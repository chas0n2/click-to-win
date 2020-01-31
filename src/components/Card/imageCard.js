import React from 'react'
import './style.css'

const Cards = (props) => {
    return (
        <div className='img'>
            <img onClick={() => {props.clicked(props.id)}}
            src={props.url}
            alt='Star Wars'>
                
            </img>
        </div>
    )
}

export default Cards;