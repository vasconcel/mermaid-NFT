const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

async function createEnvFileIfNotExists() {
    const envPath = path.join(__dirname, "..", ".env");

    if (!fs.existsSync(envPath)) {
        console.log(".env file does not exist. Creating a new one with default values...");
        const defaultEnvContent = `
DB_HOST=localhost
DB_USER=mermaiduser
DB_PASSWORD=mermaiduser
DB_DATABASE=mermaid_db
OYSTER_TOKEN_ADDRESS=
OYSTER_VAULT_ADDRESS=
MUSIC_CONTRACT_ADDRESS=
RIGHT_PURCHASE_VALUE_IN_GWEI=1000
VALUE_FOR_LISTENING_IN_GWEI=100
HARDHAT_PROVIDER_URL=http://127.0.0.1:8545
BUSINESS_RATE_WEI=200000000000000
GWEI_PER_TOKEN=50000000000000
        `;
        fs.writeFileSync(envPath, defaultEnvContent.trim());
        console.log("Created .env file with default values.");
    } else {
        console.log(".env file already exists.");
    }
}

async function updateEnvFile(deployData) {
    const envPath = path.join(__dirname, "..", ".env");

    // Carrega as variáveis de ambiente existentes
    const envConfig = dotenv.config({ path: envPath }).parsed || {};

    // Atualiza as variáveis com os novos valores
    envConfig.OYSTER_TOKEN_ADDRESS = deployData.oysterToken.address;
    envConfig.OYSTER_VAULT_ADDRESS = deployData.oysterVault.address;
    envConfig.MUSIC_CONTRACT_ADDRESS = deployData.musicContract.address;
    envConfig.RIGHT_PURCHASE_VALUE_IN_GWEI = deployData.rightPurchaseValueInGwei;
    envConfig.VALUE_FOR_LISTENING_IN_GWEI = deployData.valueForListeningInGwei;
    envConfig.HARDHAT_PROVIDER_URL = "http://127.0.0.1:8545";
    envConfig.BUSINESS_RATE_WEI = "200000000000000";
    envConfig.GWEI_PER_TOKEN = "50000000000000";

    // Mantém os valores de DB_USER, DB_PASSWORD e DB_DATABASE
    envConfig.DB_USER = envConfig.DB_USER || "mermaiduser";
    envConfig.DB_PASSWORD = envConfig.DB_PASSWORD || "mermaiduser";
    envConfig.DB_DATABASE = envConfig.DB_DATABASE || "mermaid_db";

    // Converte o objeto envConfig de volta para o formato de string do .env
    const newEnvContent = Object.entries(envConfig)
        .map(([key, value]) => `${key}=${value}`)
        .join("\n");

    // Escreve o conteúdo atualizado no arquivo .env
    fs.writeFileSync(envPath, newEnvContent);

    console.log(".env file updated successfully!");
}

module.exports = { createEnvFileIfNotExists, updateEnvFile };