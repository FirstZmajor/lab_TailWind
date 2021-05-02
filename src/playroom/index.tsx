import * as React from 'react'
import Game from './TicTacToe/Game'
import Board from './TicTacToe/Board'

import '../styles/pluzzle.css'

const playRoom: React.FC<any> = () => {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Game>
            <Board />
          </Game>
        </div>
      </div>
    </>
  )
}
export default playRoom
