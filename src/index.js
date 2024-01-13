import http from 'node:http'
import bodyToJson from './bodyToJson.js'

const todos = []

const server = http.createServer(async(req, res)=>{
    const {method, url} = req

    await bodyToJson(req, res)

   
})

server.listen(3002)