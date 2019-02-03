import React from 'react';
import {Players} from './../api/players';

class AddPlayer extends React.Component{
    // @what : input event handler [function]
    // @does : takes the event as argument 
    // @desc  : set two variables
    handleSubmit (e){
        e.preventDefault();
        let playerName = e.target.playerName.value;
        // insert playername and score
        if(playerName){
            e.target.playerName.value = '';
        // insert player details
        Players.insert({
            name:playerName,
            score:0
        })
      }
    }

 render(){
     return (
        <div className="item">
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="form__input" type="text" name="playerName" placeholder="playername"/>
                <button className="button">submit</button>
            </form>
        </div>
     );
 }   
}

export default AddPlayer;