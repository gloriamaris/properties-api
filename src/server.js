// HTTP SERVER
import express from 'express';
import cors from 'cors';

// GraphQL - Apollo
import apollo from './graphql';

// Config
import config from './config';

require('dotenv').config();
const app = express();

function setPort(port = 5000) {
 app.set('port', parseInt(port, 10));
}

function listen() {
 const port = app.get('port') || 5000;
 app.listen(port, () => {
   console.log(`The server is running and listening at http://localhost:${port}`);
 });
}

app.use(cors({
 origin: '*', // For development build ONLY, must be changed in production
 optionsSuccessStatus: 200
}));

// Utility endpoint to check API status
app.get('/status', (req, res) => {
 res.send({ status: 'App is running' + process.env.DATABASE_URL });
});

// Wrap app with Apollo
apollo(app);

export default {
 getApp: () => app,
 setPort,
 listen
};
