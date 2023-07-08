import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cls from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, disabled } = props
  return (
    <>
      <button className={cls.button} disabled={disabled}>
        {children}
      </button>
    </>
  )
}
