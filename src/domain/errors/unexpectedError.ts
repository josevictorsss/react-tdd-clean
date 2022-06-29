export class UnexpectedError extends Error {
  constructor () {
    super('An unexpected error ocurred.')
    this.name = 'UnexpectedError'
  }
}
