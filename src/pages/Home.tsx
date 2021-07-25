import React, {FormEvent, useContext, useState} from 'react'
import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import GoogleIcon from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

export function Home(){
  const history = useHistory()

  const { user, signInWithGoogle } = useAuth()
  const [roomCode , setRoomCode ] = useState('')

  async function handleCreateRoom(){
    if(!user) {
      await signInWithGoogle()

    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event : FormEvent){
    event.preventDefault()

    if(roomCode.trim() === ''){
      return ; 
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if(!roomRef.exists()){
      alert('Room does not exists')
      return
    }

    if(roomRef.val().endedAt){
      alert('Room already closed')
    }

    history.push(`/rooms/${roomCode}`)
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo </strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoImg} alt="Letmeask logo" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={GoogleIcon} alt="Logo do google" />
            Crie sua sala com o google
          </button>

          <div className="separator">
            ou entre em uma sala
          </div>

          <form action="" onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}