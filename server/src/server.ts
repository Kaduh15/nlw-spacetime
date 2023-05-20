import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRotes } from './routes'

import 'dotenv/config'

const PORT = Number(process.env.PORT) || 3333

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRotes)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
