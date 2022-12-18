// Requiring Modules
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

// Setting up app
const app = express();

// Dotenv config path
dotenv.config({ path: './.env' });

// using staticpath
const staticpath = path.join(__dirname, 'public');
app.use(express.static(staticpath));

// using templatepath
const templatepath = path.join(__dirname, 'views');
app.set('view engine', 'ejs');
app.set('views', templatepath);

// Using BodyParser to parse the body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Requiring Models
const User = require('./models/userModal');

// Get Routes
app.get('/', async (req, res) => {
  res.status(200).render('login');
});

app.get('/register', (req, res) => {
  res.status(200).render('register');
});

app.get('/search', (req, res) => {
  res.status(200).render('search');
});

// Post Routes
app.post('/register', async (req, res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    if (!newUser) {
      throw 'Error Ocurred! Please Try again';
    }

    console.log(newUser);
    res.redirect('search');
  } catch (e) {
    res.send(e.message);
  }
});

app.post('/login', async (req, res) => {
  try {
    // 1.) Get email and password from req.body
    const { email, password } = req.body;

    // 2.) Check if email and password exist
    if (!email || !password) {
      throw 'Please provide email and password';
    }

    // 3.) Check if user exists and password is correct or not
    const user = await User.findOne({ email }).select('+password');
    const checkPass = await user.comparePassword(password, user.password);

    if (!user || !checkPass) {
      throw 'Incorrect Email or Password';
    }

    res.redirect('search');
  } catch (e) {
    res.send(e.message);
  }
});

app.post('/search', async (req, res) => {
  try {
    const query = req.body.search;

    const amazonUrl = `https://www.amazon.in/s?k=${query}`;
    const flipkartUrl = `https://www.flipkart.com/search?q=${query}`;
    const snapdealUrl = `https://www.snapdeal.com/search?keyword=${query}&sort=rlvncy`;
    const shopcluesUrl = `https://bazaar.shopclues.com/search?q=${query}`;
    const ebayUrl = `https://www.ebay.com/sch/i.html?_nkw=${query}`
    const alibabaUrl = `https://www.alibaba.com/trade/search?SearchText=${query}`

    res.status(200).render('compare', {
      urls: {
        alibaba: alibabaUrl,
        ebay: ebayUrl,
        amazon: amazonUrl,
        flipkart: flipkartUrl,
        snapdeal: snapdealUrl,
        shopclues: shopcluesUrl,
      },
    });
  } catch (e) {
    res.send(e.message);
  }
});

// Not defined Routes
app.all('*', (req, res, next) => {
  res.send('Page not ready yet');
});

// Exporting app
module.exports = app;
