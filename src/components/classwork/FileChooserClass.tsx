import React, { type RefObject } from 'react'

export default class FileChooserClass extends React.Component<
  Record<string, never>,
  Record<string, never>
> {
  private fileRef: RefObject<HTMLInputElement | null>

  constructor(props: Record<string, never>) {
    super(props)
    this.fileRef = React.createRef<HTMLInputElement>()
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const arrayFiles: [string, number, string][] = []
    if (this.fileRef.current) {
      console.log(this.fileRef.current.files)
      Array.from(this.fileRef.current?.files || []).forEach((file) => {
        arrayFiles.push([file.name, file.size, file.type])
      })
    }
    console.log(arrayFiles)
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="formFile" className="form-label">
          Выберите файл
        </label>
        <input
          type="file"
          id="formFile"
          className="form-control"
          name="file"
          ref={this.fileRef}
          multiple
        />
        <button type="submit" className="btn-submit">
          Отправить файл
        </button>
      </form>
    )
  }
}
