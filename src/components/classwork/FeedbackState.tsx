import { useState } from 'react'
import type { ChangeEvent, FormEvent, JSX } from 'react'

interface FormState {
  name: string
  score: string
  agreement: boolean
  comment: string
}

/**
 * Компонент формы с использованием хука useState для хранения
 * состояния формы.
 * Возвращает JSX-элемент, представляющий форму с полями для ввода
 * имени, оценки и чекбокса для согласия на передачу данных.
 *
 * @returns {JSX.Element} - JSX-элемент, представляющий форму.
 */
const FeedbackState = (): JSX.Element => {
  const [form, setForm] = useState<FormState>({
    name: '',
    score: 'good', // Начальное значение для select
    agreement: false, // Для чекбокса
    comment: '',
  })

  /**
   * Обработчик события изменения значения поля формы.
   * Получает событие ChangeEvent, извлекает из него имя поля,
   * значение поля и тип поля.
   * Если тип поля - чекбокс, то берет значение checked,
   * иначе берет значение value.
   * Затем обновляет state формы, добавляя новое значение
   * в объект с именем поля.
   * @param {ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} evt - событие изменения значения поля формы.
   */
  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value, type } = evt.target
    // Для чекбокса используем checked, для остальных — value
    const newValue =
      type === 'checkbox' ? (evt.target as HTMLInputElement).checked : value
    setForm((prevForm) => ({ ...prevForm, [name]: newValue }))
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    console.log(form) // { name: '...', score: '...', agreement: true/false }
    // Здесь можно отправить данные на сервер
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Ваше имя</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} />
      <label htmlFor="score">Выберите ур. удовлетворенности</label>
      <select
        id="score"
        name="score"
        value={form.score}
        onChange={handleChange}
      >
        <option value="good">Хорошо</option>
        <option value="bad">Не очень</option>
      </select>
      <label htmlFor="comment">Комментарии</label>
      <textarea
        name="comment"
        id="comment"
        value={form.comment}
        onChange={handleChange}
      ></textarea>
      <input
        type="checkbox"
        id="agreement"
        name="agreement"
        checked={form.agreement}
        onChange={handleChange}
      />
      <label htmlFor="agreement">Согласен на передачу данных</label>
      <button type="submit">Отправить</button>
    </form>
  )
}

export default FeedbackState
