const express = require('express')
const { ApolloServer }= require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone');
const cookieParser = require('cookie-parser');
const sequelize = require('./config/connection.js');    
const path = require('path')
const cors = require('cors')
const { config } = require('dotenv');
const fileURLToPath = require('url')
const typeDefs = require('./schema/typeDefs.js')
const resolvers = require('./schema/resolvers.js')
const auth = require('./utils/auth/authenticate.js')
const controllers = require('./controllers')
const models = require('./models')
// import { readFileSync } from "fs";
// import connectDB from './config/connection.js'
// import seedDatabase from './config/seeds.js'; 
// import emailjs from '@emailjs/nodejs';


config({ path: '.env' });

const PORT = process.env.PORT || 3001; // Default to 3001 if process.env.PORT is not set

const app = express()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // Allow cookies and other credentials to be sent with requests
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json());
app.use(cookieParser());
app.use("/api", controllers);


async function syncAllModels() {
  try {
      // Authenticate with the database
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');

      // Dynamically sync all models with 'alter: true'
      for (const modelName in models) {
          if (models.hasOwnProperty(modelName)) {
              await models[modelName].sync({ alter: true });
              console.log(`Synced ${modelName} successfully.`);
          }
      }
      console.log('All models were synchronized successfully.');
  } catch (error) {
      console.error('Unable to sync the database:', error);
  }
}
 
async function startApolloServer() {
  try {
        const server = new ApolloServer({
          typeDefs,
          resolvers,
          persistedQueries: false,
          cache: 'bounded',
          context: auth,
      });
 
      const { url } = await startStandaloneServer(server);  // Ensuring this line correctly invokes start
      console.log(`
      🚀  Apollo Standalone Server is running!
      📭  Query at ${url}
    `);
      // connect to sequelize
    // await syncAllModels() 
  
  } catch (error) {
      console.error("Failed to start Apollo Server", error);
      // Redirect to an error page. The specific method depends on your environment.
      // For example, in a Node.js environment you might send a static HTML file:

      app.use((req, res, next) => {
          res.status(500).sendFile(path.join(__dirname, 'public', 'error.html'));
      });

      app.listen(3000, () => console.log('Error page is available on http://localhost:3000'));
  }
}

startApolloServer();

(async () => {

    // await server.start();
    try {
     
      console.log('Connection has been established successfully.');
   
      // if (process.env.NODE_ENV !== 'production') {
      //   await seedDatabase(); 
      // }

    // app.post('/api', (req, res) => {
    //     console.info('Get was used');
    //     console.log('This email will be contact: ' + req.body.email);
    //     const templateParams = {
    //       email: req.body.email,
    //     };
    //     console.log(process.env.EMAILJS_PUBLIC);

        // emailjs.send('service_7098943', 'template_5grsipc', templateParams, {
        //     publicKey: process.env.EMAILJS_PUBLIC,
        //     privateKey: process.env.EMAILJS_PRIVATE, // optional, highly recommended for security reasons
        //   }).then((response) => {
        //       console.log('SUCCESS!', response.status, response.text);
        //     },
        //     (err) => {
        //       console.log('FAILED...', err);
        //     },
        //   );
        // res.json({message: 'Everything went okay'});
    // });

    console.log("env" + process.env.NODE_ENV)

    // Health Check Endpoint
    app.get('/health', (req, res) => {
        // Custom health checks, e.g., database connections
        res.status(200).send('Healthy');
    });

    // Serve static assets in production
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
        
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    // Start the server
    app.listen(PORT, () => {
        console.log(`Express server running on port 🔑 ${PORT}!
        query @ http://localhost:3000/
        `);
      });     
    }

    catch (error) {
      console.error('Error during server startup:', error);
    }

})();