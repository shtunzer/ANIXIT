document.getElementById('login-open').addEventListener('click', function(){
    document.getElementById('login-popup').classList.add('--show');
    document.getElementById('login-bg').classList.add('--show');
});
document.getElementById('login-hide').addEventListener('click', function(){
    document.getElementById('login-popup').classList.remove('--show');
    document.getElementById('login-bg').classList.remove('--show');
});

document.getElementById('reg-open').addEventListener('click', function(){
    document.getElementById('reg-popup').classList.add('--show');
    document.getElementById('login-bg').classList.add('--show');
});
document.getElementById('reg-hide').addEventListener('click', function(){
    document.getElementById('reg-popup').classList.remove('--show');
    document.getElementById('login-bg').classList.remove('--show');
});