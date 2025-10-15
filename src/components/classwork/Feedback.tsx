import type { JSX } from 'react'

const Feedback = (): JSX.Element => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const form = evt.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string | null
    const score = data.get('score') as string | null
    const agreement = data.get('agreement') !== null

    console.log({ name, score, agreement })
    // тут можно вызвать API или обновить состояние
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Ваше имя</label>
      <input id="name" name="name" />

      <label htmlFor="score">Выберите ур. удовлетворенности</label>
      <select id="score" name="score">
        <option value="good">Хорошо</option>
        <option value="bad">Не очень</option>
      </select>

      <input type="checkbox" id="agreement" name="agreement" />
      <label htmlFor="agreement">Согласен на передачу данных</label>

      <button type="submit">Отправить</button>
    </form>
  )
}

export default Feedback
