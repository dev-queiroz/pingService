const axios = require('axios');
const url = 'http://educabio.wuaze.com/wp-admin/index.php';

// Função para fazer a solicitação HTTP
async function keepAlive() {
  try {
    const response = await axios.get(url);
    console.log('Status do site:', response.status);
  } catch (error) {
    console.error('Erro ao acessar o site:', error);
  }
}

keepAlive();
