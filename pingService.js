const axios = require('axios');

// URL do seu serviço na Render
const serviceUrl = 'https://campaigncraft.onrender.com';

// Função para enviar uma requisição GET
const pingService = async () => {
  try {
    await axios.get(serviceUrl);
    console.log('Requisição enviada com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar requisição:', error.message);
  }
};

// Configurar a execução a cada 20 minutos
const intervalMinutes = 20;
const intervalMilliseconds = intervalMinutes * 60 * 1000;

setInterval(pingService, intervalMilliseconds);

// Enviar a primeira requisição imediatamente
pingService();
