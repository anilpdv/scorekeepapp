import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Flipmove from 'react-flip-move';

class PlayersList extends React.Component{
    
    // @what : [[function]] returns list
    // @does : takes the {object} 
    // @desc : map through the object and return list.
    renderlist(playersList){
      if(playersList.length === 0){
          return (
            <div className="item">
                <p className="item__message">Enter a name to start!</p>
            </div>
          );
      } else {
        return playersList.map( (item) => {
            return ( 
               <Player key={item._id} player={item}/>
            )
        });
      } 

  }

    render(){
        return(
            <div>
                <Flipmove maintainContainerHeight={true}>
                {this.renderlist(this.props.players)}
                </Flipmove>
                
            </div>
        );
    }    
}

PlayersList.propTypes = {
    players : PropTypes.array.isRequired
}

export default PlayersList;