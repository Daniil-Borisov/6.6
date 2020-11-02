import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick(i) {
        const squares = this.state.squares;
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return(
            <button className="square" onClick={() => this.handleClick(i)}>
                {this.state.squares[i]}
            </button>
        );
    }

    popup(value) {
        return (
            <div className="status">
                <div className="statusValue">
                    {value}
                </div>
                <button className='startNewGame' onClick={() => this.setState({squares: Array(9).fill(null), xIsNext: true })}>
                    Заново
                </button>
            </div>
        )
    }

    isWinner(){
        const winner = this.calculateWinner(this.state.squares);
        if (winner) {
            return this.popup('Выиграл: ' + winner)
        } else if (!this.state.squares.includes(null)){
            return  this.popup("Ничья");
        } else {
            return (
                <div className="status">
                    <div className="statusValue">
                        Следующий ход: {(this.state.xIsNext ? 'X' : 'O')}
                    </div>
                    <div className="insteadButton"> </div>
                </div>
            );
        }
    }

    render() {

        return (
            <div>
                {this.isWinner()}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board