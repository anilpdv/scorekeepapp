import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

class Player extends React.Component{
    render(){
        return (
            <div className="item">
                <div className="player">
                <div>
                    <h1 className="player__name">{this.props.player.name}</h1>
                    <p className="player__stats">has {this.props.player.score} points.</p>
                </div>
                <div className="player__actions">
                    <button className="button button--round" onClick={()=>{
                        Players.update(this.props.player._id,{
                            $inc:{score:-1}
                        })
                    }}>-1</button>
                    <button className="button button--round" onClick={()=>{
                        Players.update(this.props.player._id,{
                            $inc :{score:1}
                        })
                    }}>+1</button>
                    <button className="button button--round" onClick={()=>{
                        Players.remove(this.props.player._id)
                    }}>X</button>
                </div>
              </div>
            </div>
        );
    }
}

Player.propTypes = {
    player : PropTypes.object.isRequired
}


export default Player;