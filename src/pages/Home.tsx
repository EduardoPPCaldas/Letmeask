import React from 'react'
import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import GoogleIcon from '../assets/images/google-icon.svg'

export function Home(){
  return(
    <div>
      <aside>
        <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo </strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={LogoImg} alt="Letmeask logo" />
          <button>
            <img src={GoogleIcon} alt="Logo do google" />
            Crie sua sala com o google
          </button>

          <div>
            ou entre em uma sala
          </div>

          <form action="">
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}