import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRotes } from './routes'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRotes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
