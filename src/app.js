import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import studentRoutes from './routes/students.routes'


const app = express();

app.set('pkg', pkg)
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (reg, res) => {
    res.json({
    name: app.get('pkg').name,
    version: app.get('pkg').version,
    description: app.get('pkg').description,
    })
})

app.use('/api/students', studentRoutes)

export default app;

