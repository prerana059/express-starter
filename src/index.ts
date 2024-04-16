import express from 'express'
//import todoRouter from './routes/todo.route'
import userRouter from './routes/user.routes'
import restrosRouter from './routes/restro.route'

import { genericErrorHandler } from './middlewares/errors.middleware'
import cors from 'cors'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())
//app.use('/todos', todoRouter)
app.use('/users', userRouter)
app.use('/restros', restrosRouter)

app.listen(PORT, () => {
  console.log('Running on port', PORT)
})
app.use(genericErrorHandler)

export default app;