import { FC, ReactNode } from 'react'
import cls from './Message.module.css'

interface MessageProps {
  children: ReactNode
  type: 'error' | 'ok'
}

export const Message: FC<MessageProps> = ({ children, type }) => {
  const rootClass = [cls.message]

  if (type === 'error') {
    rootClass.push(cls.error)
  }

  if (type === 'ok') {
    rootClass.push(cls.success)
  }

  return (
    <>
      <p className={rootClass.join(' ')}>{children}</p>
    </>
  )
}
