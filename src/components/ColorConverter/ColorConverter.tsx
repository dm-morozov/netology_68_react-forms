import type React from 'react'
import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import processHexInput from '../utils/colorUtils'
import type { ColorResult } from '../../types/color'
import styles from './ColorConverter.module.css'

const ColorConverter: React.FC = () => {
  const initialResult: ColorResult = {
    rgb: 'Ожидаю ввода',
    isValid: true,
  }

  // Создадим состояние для хранения введенного значения
  const [hexInput, setHexInput] = useState<string>('#')

  const [result, setResult] = useState<ColorResult>(initialResult)

  const containerRef = useRef<HTMLDivElement>(null)

  // Напишем функцию, которая будет вызываться при каждом нажатии клавиши
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.toUpperCase()

    if (value.length === 0 || value[0] !== '#') {
      value = '#'
    }

    const content = value.substring(1)
    if (content.length > 0 && !/^[0-9A-F]*$/.test(content)) {
      return
    }

    if (value.length > 7) {
      return
    }

    setHexInput(value)

    const conversionResult = processHexInput(value)
    setResult(conversionResult)
  }

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      if (result.isValid && hexInput.length === 7) {
        container.style.backgroundColor = hexInput
      } else if (!result.isValid) {
        container.style.backgroundColor = '#FF4500'
      } else {
        container.style.backgroundColor = ''
      }
    }
  }, [hexInput, result.isValid])

  return (
    <div className={styles.converterContainer} ref={containerRef}>
      <input
        id="hexInput"
        type="text"
        placeholder="#RRGGBB"
        className={styles.hexInput}
        // связываем состояние с input
        value={hexInput}
        // указываем обработчик изменения
        onChange={handleChange}
      />
      <div className={result.isValid ? styles.resultValid : styles.resultError}>
        {result.rgb}
      </div>
    </div>
  )
}

export default ColorConverter
