let body = document.getElementById('body');
let login_section = document.getElementById('login-section');
let goToLogin = document.getElementById('to-login');
let quitLogin = document.getElementById('quit-btn');
let toTop = document.getElementById('toTop');
let toBeFocused = document.getElementById('to-be-focused')
goToLogin.addEventListener('click', function(){
        body.style.display = 'none';
        toTop.style.display = 'none';
        login_section.style.display = 'block';
        toBeFocused.focus();
    });
quitLogin.addEventListener('click', function(){
        login_section.style.display = 'none';
        body.style.display = 'block';
        toTop.style.display = 'block'; 
    });