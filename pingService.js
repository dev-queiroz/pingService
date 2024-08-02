const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// URL da rota a ser requisitada
const url = 'https://campaigncraft.onrender.com';

// Função para enviar uma requisição GET
const pingService = async () => {
  try {
    await axios.get(url);
    console.log(`Requisição para ${url} enviada com sucesso!`);
  } catch (error) {
    console.error(`Erro ao enviar requisição para ${url}:`, error.message);
  }
};

// Configurar a execução a cada 5 minutos (300.000 milissegundos)
const intervalMilliseconds = 5 * 60 * 1000;

const runPings = () => {
  // Enviar requisição para a rota especificada
  pingService();
};

// Configurar intervalo de execução
setInterval(runPings, intervalMilliseconds);

// Adicionar um endpoint simples para verificar se o serviço está em execução
app.get('/', (req, res) => {
  res.send('Ping Service is running');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
