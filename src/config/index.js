const DB_URL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'http://paranaflix.com.br';

export default {
  DB_URL,
}
