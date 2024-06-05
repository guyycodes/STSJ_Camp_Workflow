import express from "express";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import path from "path";
// import connectDB from './config/connection.js'
import cors from 'cors';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import typeDefs from './schema/typeDefs.js'
import resolvers from './schema/resolvers.js'
import { auth } from "./utils/auth/authenticate.js"

// import { readFileSync } from "fs";
// import connectDB from './config/connection.js'
// import seedDatabase from './config/seeds.js'; 
// import emailjs from '@emailjs/nodejs';
// import mongoose from 'mongoose'

config({ path: '.env' });

const PORT = process.env.PORT || 3001; // Default to 3001 if process.env.PORT is not set

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: '*', // Allow all origins
    credentials: true, // Allow cookies and other credentials to be sent with requests
}));

// Example of your custom middleware
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}, Method: ${req.method}`);
    // Call the next middleware or route handler in the stack
    next();
});

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
        // Connect to MongoDB
      // await connectDB();
   
      // if (process.env.NODE_ENV !== 'production') {
      //   await seedDatabase(); 
      // }

    app.post('/api', (req, res) => {
        console.info('Get was used');
        console.log('This email will be contact: ' + req.body.email);
        const templateParams = {
          email: req.body.email,
        };
        console.log(process.env.EMAILJS_PUBLIC);

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
    });

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
        console.log(`Express server running on port 🔑 ${PORT}!`);
      });     
    }

    catch (error) {
      console.error('Error during server startup:', error);
    }

})();