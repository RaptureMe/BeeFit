const source = document.getElementById('homepage-template').innerHTML;
const template = Handlebars.compile(source);

const data = {
    title: 'Beefit',
    styles: 'home.css',
    logo: 'Beefit',
    homeLink: 'home.html',
    aboutLink: '#',
    trackerLink: '#',
    contactLink: '#',
    loginLink: 'login.html',
    loginText: 'LOGIN',
    script: 'script.js',
    ioniconsEsm: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
    ionicons: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
};

const html = template(data);
document.getElementById('app').innerHTML = html;
