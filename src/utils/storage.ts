class Storage {
  constructor(key: string, option?: {
    storage?: globalThis.Storage
  }) {
    this.key = key
    this.storage = option?.storage || localStorage
  }

  private key: string
  private storage: globalThis.Storage

  public get(): string | null {
    return this.storage.getItem(this.key)
  }

  public set(value: string): void {
    this.storage.setItem(this.key, value)
  }

  public remove(): void {
    this.storage.removeItem(this.key)
  }
}

export default Storage

export const Token = new Storage('token')
