import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'

class App{
    app!: express.Application
    
    public constructor(){        
        this.app = express()
        this.middlewares()
        this.routes()
    }
   
    private middlewares(): void{
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(express.json())
    }

    private routes(): void{
        this.app.use(routes)
    }
}

export default new App().app