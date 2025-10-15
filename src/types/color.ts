// src/types/color.ts

export type RGBColor = {
  red: number
  green: number
  blue: number
}

export type ColorResult = {
  rgb: string // Строка вида "rgb(255, 255, 255)"
  isValid: boolean // Успешна ли конвертация
}
