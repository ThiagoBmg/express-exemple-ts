import {Router} from 'express'

class Main_Router{
    routes!: Router

    constructor(){
        this.routes = Router()
    }

    Users(){
        this.routes.get('/users')
        this.routes.post('')
        this.routes.delete('')
        this.routes.patch('')
    }
}

export default new Main_Router().routes
