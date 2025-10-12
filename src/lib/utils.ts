import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function calculateWordCountFromHtml(
  html: string | null | undefined,
  locale: string,
): number {
  if (!html) return 0
  const textOnly = html.replace(/<[^>]+>/g, '')

  if (typeof Intl.Segmenter === 'function') {
    try {
      const segmenter = new Intl.Segmenter(locale, { granularity: 'word' })
      const segments = segmenter.segment(textOnly)

      let wordCount = 0
      for (const segment of segments) {
        // exclude punctuation and spaces
        if (segment.isWordLike) {
          wordCount++
        }
      }
      return wordCount
    } catch (e) {
      // fallback to simple split
    }
  }
  return textOnly.split(/\s+/).filter(Boolean).length
}

export function readingTime(wordCount: number): string {
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / 200))
  return `${readingTimeMinutes} min read`
}

export function getHeadingMargin(depth: number): string {
  const margins: Record<number, string> = {
    3: 'ml-4',
    4: 'ml-8',
    5: 'ml-12',
    6: 'ml-16',
  }
  return margins[depth] || ''
}
