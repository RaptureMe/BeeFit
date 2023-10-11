const source = document.getElementById('login-template').innerHTML;
const template = Handlebars.compile(source);

const data = {
    title: 'Beefit - Login',
    styles: 'style.css',
    logo: 'Beefit',
    homeLink: 'home.html',
    aboutLink: '#',
    trackerLink: '#',
    contactLink: '#',
    loginText: 'LOGIN',
    formTitle: 'Login',
    formAction: '#',
    emailLabel: 'EMAIL',
    passwordLabel: 'Password',
    rememberLabel: 'Remember me',
    forgotLink: 'Forgot Password?',
    buttonText: 'Login',
    script: 'script.js',
    ioniconsEsm: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
    ionicons: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
};

const html = template(data);
document.getElementById('app').innerHTML = html;
