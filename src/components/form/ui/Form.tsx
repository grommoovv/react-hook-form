import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import cls from './Form.module.css'
import { IForm } from '../model/Form.types'
import {
  inputEmailConfig,
  inputNumberConfig,
  inputTextConfig,
} from '../config/form.config'
import { Input } from '../../input/ui/Input'

export const Form = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<IForm>({
    mode: 'onChange',
  })

  const onSubmitForm: SubmitHandler<IForm> = (data: any) => {
    alert(JSON.stringify(data))
    reset()
  }

  const onSubmit = () => handleSubmit(onSubmitForm)

  return (
    <>
      <form className={cls.form} onSubmit={onSubmit} autoComplete='off'>
        <Controller
          name='firstName'
          control={control}
          rules={inputTextConfig}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                type='text'
                placeholder='Имя'
                error={error}
                field={field}
              />
            </>
          )}
        />

        <Controller
          name='email'
          control={control}
          rules={inputEmailConfig}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                type='text'
                placeholder='Email'
                error={error}
                field={field}
              />
            </>
          )}
        />

        <Controller
          name='age'
          control={control}
          rules={inputNumberConfig}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                type='number'
                placeholder='Возраст'
                error={error}
                field={field}
              />
            </>
          )}
        />

        <button
          className='button'
          type='submit'
          disabled={!isValid}
          onSubmit={onSubmit}
        >
          Отправить
        </button>
      </form>
    </>
  )
}
