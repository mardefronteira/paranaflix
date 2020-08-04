const DB_URL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://paranaflix.herokuapp.com';

export default {
  DB_URL,
}
