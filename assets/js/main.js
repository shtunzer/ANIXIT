document.getElementById('login-open').addEventListener('click', function(){
    document.getElementById('login-popup').classList.add('--show');
    document.getElementById('login-bg').classList.add('--show');
});

document.getElementById('login-hide').addEventListener('click', function(){
    var loginPopup = document.getElementById('login-popup');
    loginPopup.classList.add('--closing');
    document.getElementById('login-bg').classList.remove('--show');


    setTimeout(function() {
        loginPopup.classList.remove('--show', '--closing');
    }, 500); 
    centerLoginPopup();
});

document.getElementById('reg-open').addEventListener('click', function(){
    document.getElementById('reg-popup').classList.add('--show');
    document.getElementById('login-bg').classList.add('--show');
});

document.getElementById('reg-hide').addEventListener('click', function(){
    var regPopup = document.getElementById('reg-popup');
    regPopup.classList.add('--closing');
    document.getElementById('login-bg').classList.remove('--show');


    setTimeout(function() {
        regPopup.classList.remove('--show', '--closing');
    }, 500); 
    centerLoginPopup();
});


window.addEventListener('load', centerLoginPopup);
window.addEventListener('resize', centerLoginPopup);
