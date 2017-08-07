import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

const players = [{

}];

const renderPlayers = function (playersList) {
    return playersList.map(function (player) {
        return <p key={player._d}>{player.name} has {player.score} points(s).</p>
    })
}

Meteor.startup(function () {
    Tracker.autorun(function () {
        var players = Players.find().fetch();
        let title = "Score Keep";
        let name = "Avinash";
        let jsx =
            (
                <div>
                    <h1>{title}</h1>
                    <p>Players list</p>
                    {renderPlayers(players)}
                </div>
            );
        ReactDOM.render(jsx, document.getElementById('app')); 
    });

});