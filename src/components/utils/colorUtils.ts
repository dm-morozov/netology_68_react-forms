import type { ColorResult } from '../../types/color'

/**
 * Проверка строки на соответствие формату #XXXXXX.
 * Возвращает true, если строка является корректной строкой в формате #XXXXXX, иначе - false.
 * @param {string} hex - строка для проверки.
 */
const isValidHex = (hex: string): boolean => {
  const regex = /^#([0-9a-fA-F]{6})$/
  return regex.test(hex)
}

/**
 * Преобразует строку в формате #XXXXXX в строку RGB.
 * @param {string} hex - строка в формате #XXXXXX.
 * @returns {string} - строка в формате rgb(red, green, blue)
 */
const hexToRGB = (hex: string): string => {
  const red = parseInt(hex.substring(1, 3), 16)
  const green = parseInt(hex.substring(3, 5), 16)
  const blue = parseInt(hex.substring(5, 7), 16)

  return `rgb(${red}, ${green}, ${blue})`
}

/**
 * Обработка строки в формате #XXXXXX.
 * Если строка содержит 7 символов, то она преобразуется в строку RGB.
 * Если строка не содержит 7 символов, то возвращается объект с пустой строкой RGB и флагом isValid в true.
 * Если строка содержит 7 символов, но не является корректной строкой в формате #XXXXXX, то возвращается объект с строкой 'Ошибка' и флагом isValid в false.
 * @param {string} hexInput - строка в формате #XXXXXX.
 * @returns {ColorResult} - объект, содержащий строку RGB и флаг isValid.
 */
const processHexInput = (hexInput: string): ColorResult => {
  // Ждем введения всех 7 символов
  if (hexInput.length !== 7) {
    return {
      rgb: 'Ожидаю ввода',
      isValid: true,
    }
  }

  if (isValidHex(hexInput)) {
    return {
      rgb: hexToRGB(hexInput),
      isValid: true,
    }
  } else {
    return {
      rgb: 'Ошибка',
      isValid: false,
    }
  }
}

export default processHexInput
