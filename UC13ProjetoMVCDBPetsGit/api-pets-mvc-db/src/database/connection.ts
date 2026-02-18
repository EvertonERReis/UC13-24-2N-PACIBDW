// Importa o mysql2 na versão PROMISE
// Isso permite usar async/await ao invés de callbacks
import mysql from "mysql2/promise"
// dotenv para ler o arquivo .env
import dotenv from "dotenv"

// Carrega as variáveis do .env para process.env
dotenv.config()

/**
 * Aqui criamos um POOL de conexões
 * Pool = um "conjunto" de conexões prontas
 * Ao invés de abrir uma conexão toda vez, a API pega uma do pool.
 * 
 */
export const pool = mysql.createPool({
    // Endereço do banco (localhost)
    host: process.env.DB_HOST,
    // Usuário do MySQL 
    user: process.env.DB_USER,
    // Senha do MySQL
    password: process.env.DB_PASS,
    // Nome do banco
    database: process.env.DB_NAME,
    // Porta do MySQL(normalmente 3306)
    port: Number(process.env.DB_PORT || 3306),
    // Espera conexão ficar disponível quando todas estiverem ocupadas
    waitForConnections: true,
    // Quantas conexões no máximo no pool
    connectionLimit: 10
})