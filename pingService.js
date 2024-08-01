const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// URLs dos serviços
const campaignCraftUrl = 'https://campaigncraft.onrender.com';

// Função para enviar uma requisição GET
const pingService = async (url) => {
  try {
    await axios.get(url);
    console.log(`Requisição para ${url} enviada com sucesso!`);
  } catch (error) {
    console.error(`Erro ao enviar requisição para ${url}:`, error.message);
  }
};

// Configurar a execução a cada 20 minutos
const intervalMinutes = 20;
const intervalMilliseconds = intervalMinutes * 60 * 1000;

const runPings = () => {
  // Enviar requisições para o serviço CampaignCraft
  pingService(campaignCraftUrl);
};

// Configurar intervalo de execução
setInterval(runPings, intervalMilliseconds);

// Enviar a primeira requisição imediatamente
runPings();

// Adicionar um endpoint simples para o serviço de web
app.get('/', (req, res) => {
  res.send('Ping Service is running');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
