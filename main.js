const btn = document.querySelector('button');
const form = document.querySelector('form');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const userInfo = document.getElementById('user-info');

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
  };
  form.addEventListener('submit', e => {
    e.preventDefault();
    const cardList = JSON.stringify(data);
    userInfo.textContent = cardList;
    sendData('https://jsonplaceholder.typicode.com/posts', cardList);
  })
}
sendUser();
