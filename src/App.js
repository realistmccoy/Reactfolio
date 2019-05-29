import React, { Component } from "react";
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'
import profile from './assets/profile.png'

class App extends Component {
    //samething as the constructor method
    state = {displayBio: false}


  /*  constructor() {
        super();
        this.state = {displayBio: false};

        console.log('Component this', this)

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  } */

    //samething as the constructor method
    toggleDisplayBio = () => {
       this.setState({displayBio: !this.state.displayBio})
    
    }

render() {
 return (
        <div>
            <img src={profile} alt='profile' className='profile'></img>
            <h1>Hello!</h1>
            <p>my name is Ramon, im a Web Designer.</p>
            {this.state.displayBio ? (
                <div>
                    <p>Im always looking forward to working on meaningful projects.</p>
                    <div>i live in Hazel Park, and code everyday.</div>
                    <p>my favorite language is Javascript</p>
                    <button onClick={this.toggleDisplayBio}>Show less</button>
                </div>
            ) : (
                <div>
                    <button onClick={this.toggleDisplayBio}>read more</button>
                </div>
            )
            }
            <hr/>
            <Projects/>
            <hr/>
            <SocialProfiles/>
        </div>
    )
    
    
}
}

export default App;