import dotenv from 'dotenv'

import { App } from './app'

dotenv.config()

function main (): void {
  const app = new App()
  app.listen()
}

main()
