import {Router} from 'express'

interface IRouter{
    /* 
    *  @Rotas de usuários
    */
    Users?():void
    /* 
    *  @Rotas de Produtos
    */
    Products?():void
}

class Main_Router implements IRouter{
    routes!: Router

    constructor(){
        this.routes = Router()
    }

    Users(){
        this.routes.get('/users')
        this.routes.post('/users')
        this.routes.delete('/users')
        this.routes.patch('/users')
    }
}

export default new Main_Router().routes
