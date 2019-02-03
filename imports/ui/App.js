import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayersList from './PlayersList';

class App extends React.Component{
    render () {
        return (
            <div>
                <TitleBar title={this.props.title}/>
                <div className="wrapper">
                    <PlayersList players={this.props.players}/>
                    <AddPlayer/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title : PropTypes.string.isRequired,
    players : PropTypes.array.isRequired
}
export default App;