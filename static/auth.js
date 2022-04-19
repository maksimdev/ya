console.log('AUTH.JS');

const oauthQueryParams = {
  client_id: '',
  response_type: 'token',
  redirect_uri: 'https://mystatic.website.yandexcloud.net/final.html'
};
const tokenPageOrigin = 'https://mystatic.website.yandexcloud.net/index.html';

YaAuthSuggest.init(oauthQueryParams, tokenPageOrigin)
  .then(({handler}) => handler())
  .then(data => console.log('Сообщение с токеном', data))
  .catch(error => console.log('Обработка ошибки', error));