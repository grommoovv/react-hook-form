// mode
export const mode = { mode: 'onChange' }

// Обязательное поле
const requiredField = 'Поле обязательно к заполнению'
// Минимальная длина строки
const minLength = { value: 2, message: 'Минимум 2 символа' }
const maxLength = { value: 16, message: 'Максимум 16 символов' }
// Минимальный возраст
const minAge = { value: 18, message: 'Вам должно быть не меньше 18 лет' }

// patterns
const textPattern = {
  value: /^[A-Za-zА-Яа-я]+$/,
  message: 'Можно использовать только английские или русские буквы',
}

const emailPattern = {
  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: 'Неверный формат email',
}

// input config type text
export const inputTextConfig = {
  required: requiredField,
  pattern: textPattern,
  minLength,
  maxLength,
}

// input config type number
export const inputNumberConfig = {
  required: requiredField,
  min: minAge,
}

export const inputEmailConfig = {
  required: requiredField,
  pattern: emailPattern,
}
