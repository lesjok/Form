const btn = document.querySelector('button');
const option = document.querySelector('option');
const form = document.querySelector('form');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const userInfo = document.getElementById('user-info');
const passwordInfo = document.getElementById('password-info');
const numberInfo = document.getElementById('number-info');

const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  })
  if(response.ok) {
    alert('Success');
  } 
  return await response.json();
}

const sendUser = () => {
    const data = {
    login: inputLogin.value,
    password: inputPassword.value,
    option: option.value,
  };
  form.addEventListener('submit', e => {
    e.preventDefault();
    userInfo.innerHTML = form.value;
    const cardList = JSON.stringify(data);   
    sendData('https://jsonplaceholder.typicode.com/posts', cardList);
  })
}
sendUser();
