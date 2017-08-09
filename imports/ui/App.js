import React from 'react';
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subTitle='Subtitle of Score Keep App' />
                <PlayerList players={this.props.players} />
                <AddPlayer />
            </div>
        )
    }
}