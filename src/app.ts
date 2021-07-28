import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'

class App{
    public app!: express.Application
    
    public constructor(){        
        this.app = express()
        this.middlewares()
        this.routes()
    }
   
    private middlewares(){
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(express.json())
    }

    private routes(){
        this.app.use(routes)
    }
}

export default new App().app