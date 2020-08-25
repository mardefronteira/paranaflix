const DB_URL = window.location.hostname.includes('192.168.100.174')
? 'http://192.168.100.174:8080'
: 'https://paranaflix.herokuapp.com';

export default {
  DB_URL,
}
