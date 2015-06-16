var component = require('./component.js');
require('./stylesheet/main.css');
var app = document.getElementById('app');

app.appendChild(component());
