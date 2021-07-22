import './button.scss'
import React , {ButtonHTMLAttributes} from 'react'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props : ButtonProps){
  return(
    <button className="button" {...props}>
      Criar sala
    </button>
  )
}