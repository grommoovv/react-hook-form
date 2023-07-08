import { FC, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { Message } from '../../message/Message'
import cls from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  error: FieldError | undefined
  field: any
}

export const Input: FC<InputProps> = (props) => {
  const { error, field, type = 'text', placeholder } = props
  return (
    <>
      <label className={cls.label}>
        <input
          className={cls.input}
          type={type}
          placeholder={placeholder}
          {...field}
        />
        {error && <Message type='error'>{error.message}</Message>}
      </label>
    </>
  )
}
