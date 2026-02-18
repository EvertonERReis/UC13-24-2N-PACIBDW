import express  from "express";
import path from "path";

// importando as rotas da API
import { petRoutes } from "./routes/pet.routes";
const app = express()

app.use(express.json())
// servir arquivos estaticos do front
// utilizamos o path que e um modulo do node para trabalhar com o public que estara o html, css e js
app.use(express.static(path.join(__dirname,"public")))
// registra as rotas da api
app.use(petRoutes)
// quando acessar "/" , vai abrir index.hrml
app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
})
// inicia o servidor
app.listen(3000, () => {
    console.log("🚀 Servidor rodando em: http://localhost:3000")
})