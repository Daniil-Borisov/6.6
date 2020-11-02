import React from 'react';
import Board from "./board";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBoard: false,
            showBtn: true,
        }
    }
    btn(){
        return(
            <button className='startGame' onClick={() => this.setState({showBoard: true, showBtn: false })}>
                Начать игру
            </button>
        )
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {this.state.showBtn && this.btn()}
                    {this.state.showBoard && <Board/>}
                </div>
            </div>
        );
    }
}

export default Game