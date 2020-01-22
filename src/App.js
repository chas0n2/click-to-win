import React, { Component } from 'react';
import Header from './components/Header';
import ImageCard from './components/Image-Card';
import data from './images.json';


class App extends Component {
  state = {
    data,
    score: 0,
    images: [],
    clicked: 0
  }
  // clickEvent

  handleClickEvent = (id) => {
    this.shuffle();
    this.clicked(id);
  }

  shuffle = () => {
    let shuffleImage = this.state.data;
    shuffleImage = shuffleImage.sort(() => Math.random() - 0.42);

    this.setState({
      images: shuffleImage
    })

  }

  clicked = (id) => {

    let clicked = this.state.clicked;
    this.setState({
      clicked: id

    })
    console.log(clicked)
    console.log(id)

    if(id === clicked) {
      alert("correct!")
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

if ( this.state.score === 5 ) {
  alert("Nice... But don't get cocky kid!")
  this.setState({
    score: 0,
    clicked: 0
  })
}

render () {
  return (
      <div>
          <Header score = {this.state.score} />
          <div>
              {this.state.data.map(item => (
                  <ImageCard
                      key={item.id}
                      id={item.id}
                      clicked={this.handleClickEvent}
                      img= {item.img}
                  />
              ))
}
          </div>
      </div>
  )}


};

export default App;
