import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length !== 0) {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player} />
            });
        }
        else {
            return (
                <div className="item">
                    <p className="item__message">
                        Add your first player to get started.
                    </p>
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        )
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}