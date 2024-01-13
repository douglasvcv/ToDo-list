export async function bodyToJson(req, res){
    const buffers = []//estudar sobre

    for await (const chunk of req){//estudar sobre
        buffers.push(chunk)
    }
    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())//estudar sobre
    } catch  {
        req.body = null
    }
    res.setHeader("Content-Type", "application/json")
}