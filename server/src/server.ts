import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes, memoriesRotes } from './routes'

import 'dotenv/config'

const PORT = Number(process.env.PORT)

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: process.env.JWT_SECRET || 'secret',
})

app.register(memoriesRotes)
app.register(authRoutes)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`listening on port ${PORT}`)
  })
