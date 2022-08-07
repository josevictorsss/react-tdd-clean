export class EmailInUseError extends Error {
  constructor () {
    super('email in use')
    this.name = 'EmailInUseError'
  }
}
