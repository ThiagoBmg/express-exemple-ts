import server from './app'
import dotenv from 'dotenv'
dotenv.config()
{
    const PORT = process.env.PORT || 3030 
    server.listen(PORT)
}
