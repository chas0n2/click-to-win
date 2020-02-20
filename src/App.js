import React, { Component } from 'react';
import Header from './components/Header/header';
import Cards from './components/Card/imageCard';
import images from './images';



class App extends Component {
    state = {
      score: 0,
      images: images,
      clicked: 0,
      message: "Click on an image to begin the game!"
}

displayImage = arg => {
  
    const images = this.state.images
   
    this.setState({ images });
    // console.log("hi",this.state.images);
  };


handleClickEvent = (id) => {
    this.shuffle();
    this.clicked(id);
}

shuffle = () => {
    let shuffledImages = this.state.images;
    shuffledImages = shuffledImages.sort(() => Math.random() - 0.42);

    this.setState({
        images: shuffledImages
    })
}

clicked = (id) => {

    let clicked = this.state.clicked;

    this.setState({
        clicked: id
    })

    console.log(clicked)
    console.log(id)
    console.log(this.state.images.length)

    if(id === clicked) {
        alert("correct")
        let newscore = this.state.score
        newscore = newscore + 1
        this.setState({
            score: newscore,
            clicked: 0
        })

    }
     else if (clicked === 0) {
        console.log("do nothing")
    }
    else
    {
        alert("incorrect")
        this.setState({
            score: 0,
            clicked: 0
        })
    }
    
    if( this.state.score === 5) {
        alert("Nice... But don't get cocky kid!")
        this.setState({
            score: 0,
            clicked: 0
        })
    }
     
}
// Rendering components to DOM
render () {
    return (
        <div>
            <Header score = {this.state.score}/>
            <div>
                {this.state.images.map(image => {
                    return(
                    <Cards
                        key={image.id}
                        id={image.id}
                        clicked={this.handleClickEvent}
                        image= {image.image}
                        url={image.img}
                    />
                )})
                }
            </div>
        </div>
    );
};


};

export default App;
