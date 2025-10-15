import { useRef } from 'react'
import type { JSX } from 'react'

/**
 * Компонент для выбора файлов.
 * Возвращает форму с полем для выбора файла и кнопкой "Ok".
 * При отправке формы вызывает handleSubmit событие, в котором
 * можно получить список выбранных файлов.
 * @returns {JSX.Element} - JSX-элемент, представляющий форму.
 */
const FileChooser = (): JSX.Element => {
  const fileRef = useRef<HTMLInputElement | null>(null) // Ссылка на input

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (!fileRef.current) return
    console.dir(fileRef.current.files) // FileList с выбранными файлами
    // Можно отправить файлы на сервер
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="formFile">Выберите файл</label>
      <input type="file" id="formFile" ref={fileRef} />
      <button type="submit">Ok</button>
    </form>
  )
}

export default FileChooser
