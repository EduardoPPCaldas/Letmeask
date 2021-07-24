import React from 'react'
import CopyImg from '../../assets/images/copy.svg'
import './RoomCode.scss'

type RoomCodeProps = {
  code: string
}

export function RoomCode(props : RoomCodeProps){
  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(props.code)
  }

  return(
    <button className="room-code">
      <div>
        <img src={CopyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}