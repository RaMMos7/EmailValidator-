function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@gmail\.com$/; 
  return regex.test(email);
}

const users = [
  { email: 'miguelramoss@gmail.com', senha: '1234' }
];

const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;


const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const senha = document.getElementById('login-password').value;
    const errorMsg = document.getElementById('errorMsg');

    if (errorMsg) errorMsg.textContent = '';

    if (!isValidEmail(email)) {
      if (errorMsg) errorMsg.textContent = 'Digite um e-mail valido com o dominio correto';
      return;
    }

    const user = users.find(u => u.email === email && u.senha === senha);
    if (!user) {
      if (errorMsg) errorMsg.textContent = 'Credenciais inválidas.';
      return;
    }

    alert('Login realizado com sucesso');
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  });
}

const userName = document.getElementById('user-name');
if (userName && currentUser) {
  userName.textContent = currentUser.email;
}
