import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
      handleLike:() => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
          }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
            dislikes: prevState.dislikes + 1
          }));
      }
      };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p>Mohanlal is a legendary Indian actor, producer, and playback singer primarily known for his work in Malayalam cinema. With a career spanning over four decades, he is celebrated for his versatility, natural acting style, and immense contribution to Indian cinema. He has acted in over 350 films and is widely regarded as one of the greatest actors in Indian film history. Mohanlal has received numerous accolades, including five National Film Awards, nine Kerala State Film Awards, and the prestigious Padma Shri and Padma Bhushan from the Government of India. His performances in classics like *Vanaprastham*, *Kireedam*, *Drishyam*, and *Thanmathra* have earned him critical and popular acclaim across generations.
        </p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>

     </div>
     </>
    );
  }
}

export default ContentRating;