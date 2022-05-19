class Worker {
  constructor(stringUrl) {
    this.url = stringUrl
    this.onmessage = jest.fn()
  }

  postMessage(msg) {
    this.onmessage(msg)
  }
}

window.Worker = Worker
