import * as React from 'react'
import { useContext } from 'react'
import { gameContext } from './Game'

export default function StatusBar() {
  const { turn, winner, dispatch }: any = useContext(gameContext)

  const resetGame = () => {
    dispatch({ type: 'resetGame' })
  }

  return (
    <div className="flex justify-around bg-opacity-0 p-8">
      {winner === '' && <span className="button">Turn: {turn}</span>}
      {winner !== '' && <span className="button">Game is Over! {winner}</span>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetGame}
      >
        Restart
      </button>
    </div>
  )
}
