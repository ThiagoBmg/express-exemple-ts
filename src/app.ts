import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

class App{
    public app!: express.Application
    
    public constructor(){        
        this.app = express()
        this.middlewares()
    }
   
    private middlewares(){
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(express.json())
    }

    private routes(){
        
    }
}

export default new App().app