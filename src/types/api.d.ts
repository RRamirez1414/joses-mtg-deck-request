type KyError<T = Record<string, unknown>> = {
  response?: {
    json(): Promise<T>
    status: number
  }
}
