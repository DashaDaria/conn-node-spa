const express = require("express")
const app = express()
const path = require("path")
const { requiresAuth } = require('express-openid-connect');
const PORT = process.env.PORT || 3001

app.use(express.static(path.resolve(__dirname, 'client/build')));

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3001',
  clientID: 'rbpTnKZkLk1GXwThm45CuuLzHiivRiSa',
  issuerBaseURL: 'https://june-tester.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.get("/api", (req, res) => {
  res.json({message: "Connected"})
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
