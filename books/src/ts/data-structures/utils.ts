export const defaultEquals = <T>(a: T, b: T): boolean => {
  return a === b
}

export type IEqualsFunction<T> = (a: T, b: T) => boolean
