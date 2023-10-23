const express = require('express')
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '../public');
const views_path = path.join(__dirname, '../templates/views');
const partial_path = path.join(__dirname, '../templates/partials');
const css_path = path.join(__dirname, '../node_modules/bootstrap/dist/css');
const js_path = path.join(__dirname, '../node_modules/bootstrap/dist/js');
const jq_path = path.join(__dirname, '../node_modules/jquery/dist');

app.set('view engine', 'hbs');
app.set('views', views_path);
app.set(hbs.registerPartials(partial_path))
app.use(express.static(static_path))

app.use('/css', express.static(css_path))
app.use('/js', express.static(js_path))
app.use('/jq', express.static(jq_path))

app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))
app.get('/weather', (req, res) => res.render('weather'))
app.get('*', (req, res) => res.render('404', {
    errorMsg: "Page Not Found"
}))

app.listen(port, () => console.log(`app listening on port ${port}!`))
