import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from './firebase'

/**
 * Получает URL изображения из Firebase Storage с обработкой ошибок
 * @param imagePath Путь к изображению в Firebase Storage или готовый URL
 * @returns Promise с URL изображения или null при ошибке
 */
export async function getImageUrl(imagePath: string): Promise<string | null> {
  try {
    // Проверяем, является ли это уже готовым URL
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }

    // Создаем ссылку на Firebase Storage
    const imageRef = ref(storage, imagePath)
    const url = await getDownloadURL(imageRef)

    // Добавляем параметры для оптимизации изображений (если поддерживается)
    return addImageOptimization(url)
  } catch (error) {
    console.warn(`Failed to load image: ${imagePath}`, error)
    return null
  }
}

/**
 * Получает URL для нескольких изображений параллельно
 * @param imagePaths Массив путей к изображениям
 * @returns Promise с массивом URL (null для неудачных загрузок)
 */
export async function getImageUrls(imagePaths: string[]): Promise<(string | null)[]> {
  const promises = imagePaths.map(path => getImageUrl(path))
  return Promise.all(promises)
}

/**
 * Добавляет параметры оптимизации для Firebase Storage изображений
 * @param url Оригинальный URL изображения
 * @returns URL с параметрами оптимизации
 */
function addImageOptimization(url: string): string {
  // Firebase Storage поддерживает некоторые параметры оптимизации
  // Добавляем параметры для автоматического выбора формата и качества
  if (url.includes('firebasestorage.googleapis.com')) {
    const separator = url.includes('?') ? '&' : '?'
    return `${url}${separator}alt=media`
  }
  return url
}

/**
 * Проверяет, поддерживается ли формат изображения
 * @param filename Имя файла
 * @returns true если формат поддерживается
 */
export function isSupportedImageFormat(filename: string): boolean {
  const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'))
  return supportedFormats.includes(extension)
}

/**
 * Получает base64 placeholder для изображения при ошибке загрузки
 * @returns base64 SVG placeholder
 */
export function getImagePlaceholder(): string {
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDMyMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMzIgMTEybDQwLTQwYTggOCAwIDAxMTEuMzEgMEwxOTIgODBtLTggOGw4LThhOCA4IDAgMDExMS4zMSAwTDIwOCAxMDRtLTI0LTI0aC4wNE0xMDQgMTc2aDExMmE4IDggMCAwMDgtOFY3MmE4IDggMCAwMC04LThIMTA0YTggOCAwIDAwLTggOHY5NmE4IDggMCAwMDggOHoiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+'
}
