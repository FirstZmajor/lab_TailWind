import * as React from 'react'
import { XIcon, BellIcon, MenuIcon } from '@heroicons/react/solid'

const Square = ({
  value,
  index,
  onClick,
}: {
  value: string
  index: number
  onClick: (index: number) => void
}) => {
  //console.log("<=== rendering " + index + " ===>");
  return (
    <div className="square" onClick={() => onClick(index)}>
      {value === 'X' && <div className="border-0 border-indigo-600">X</div>}
      {value === 'O' && <div className="border-0 border-fuchsia-600">O</div>}
    </div>
  )
}

export default React.memo(Square)
