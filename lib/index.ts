type Resolvable<T> = T | PromiseLike<T> | undefined;

export default class Completer<T> {
  public promise: Promise<T>
  public resolve!: (value?: Resolvable<T>) => void
  public reject!: (reason?: any) => void

  constructor () {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}
