# South Texas Juvenile Diabetes Association Workflow Automation

 #### Link to the project board
 https://miro.com/app/board/uXjVKEp7qgo=/

## Overview
The South Texas Juvenile Diabetes Association (STSJ) Workflow Automation project aims to streamline and automate the workflow processes for the association. The application will be developed as a progressive web app (PWA) using Node.js and will utilize two SQL databases for data storage and replication. 

To start the project, cd into the STJDA_APP directory and NPM run dev to start the development servers

## Repo Engagment
#### Egnament process

1) Make changes
2) add and commit changes & open a new pull request
3) New code additions must be peer reviewed
4) New code additions mu be peer approved
5) Commit changes


## Key Features
- Automate and streamline workflow processes for STSJ
- Progressive Web App (PWA) for enhanced user experience and offline functionality
- Built using Node.js for server-side scripting
- Utilizes two SQL databases:
  - Master database for primary data storage
  - Slave database for data replication and backup
- Real-time data synchronization between master and slave databases
- Responsive and user-friendly interface
- Secure authentication and authorization mechanisms
- Integration with existing STSJ systems and tools

## Technical Stack
- Front-end:
  - React.js by Meta, HTML5, CSS3, Vite
  - Progressive Web App (PWA) technologies
  - Responsive design frameworks (Google Material-UI)
- Back-end:
  - Node.js
  - Express.js (web application framework)
  - MySQL workbench for remote administration
  - SQL databases (MySQL)
  - Database replication and synchronization mechanisms
- Development Tools:
  - Version control system (Git)
  - Integrated Development Environment (IDE) (Visual Studio Code)
  - Package manager (npm)
  - Testing frameworks (Jest)
- Deployment:
  - Cloud hosting platforms (e.g., AWS, Google Cloud, Heroku)
  - Manual Deployment : See Manual Deployment Section (If the organization scales CI/CD would be recomended)

## Database Architecture
The application will utilize two SQL databases:
1. Master Database:
   - Primary database for storing all the application data
   - Handles read and write operations
   - Ensures data integrity and consistency
2. Slave Database:
   - Replicates data from the master database
   - Provides a backup and failover mechanism
   - Handles read-only operations to distribute the load
   - Keeps data in sync with the master database

## Development Roadmap
1. Requirements Gathering and Analysis
2. System Design and Architecture
3. Database Design and Setup
4. Back-end Development (Node.js, Express.js)
5. Front-end Development (PWA, HTML, CSS, React)
6. Integration of Master and Slave Databases
7. Testing and Quality Assurance
8. Deployment and Server Setup
9. User Acceptance Testing (UAT)
10. Launch and Maintenance

## Additional Considerations
- Security measures for protecting sensitive data
- Performance optimization techniques
- Scalability and load balancing strategies
- Backup and disaster recovery plans
- User training and documentation
- Ongoing maintenance and updates

By leveraging Node.js, progressive web app technologies, and a robust database architecture with master-slave replication, the STSJ Workflow Automation application aims to provide a reliable, efficient, and user-friendly solution for streamlining the association's workflow processes.

## Manual Deployment

To manually deploy the STSJ Workflow Automation application, follow these steps:

1. Prerequisites:
   - Ensure that Node.js and npm (Node Package Manager) are installed on the deployment server.
   - Set up the necessary SQL databases (master and slave) and ensure they are accessible from the deployment server.

2. Server Setup:
   - Provision a server or virtual machine with the required specifications (e.g., CPU, RAM, storage) to host the application.
   - Install and configure the necessary server software (e.g., web server, database server) on the deployment server.

3. Application Setup:
   - Clone the application source code from the version control repository (e.g., Git) to the deployment server.
   - Navigate to the project directory and install the required dependencies using npm:
     ```
     npm install
     ```

4. Database Configuration:
   - Update the database connection settings in the application configuration files to point to the master and slave databases.
   - Ensure that the application has the necessary permissions to access and modify the databases.

5. Build Process:
   - Run the build process to compile and optimize the front-end assets (HTML, CSS, JavaScript) using the appropriate build tools (e.g., Webpack, Babel).
   - The build process should generate production-ready files in a designated output directory.

6. Server Configuration:
   - Configure the web server (e.g., Apache, Nginx) to serve the application files from the build output directory.
   - Set up the necessary server-side configurations, such as port numbers, SSL certificates, and proxy settings.

7. Environment Variables:
   - Set up the required environment variables on the deployment server, such as database connection strings, API keys, and other sensitive information.
   - Ensure that these variables are securely stored and accessible to the application.

8. Database Migration and Seeding:
   - Run any necessary database migrations or seeding scripts to set up the initial database structure and populate it with sample data.

9. Application Startup:
   - Start the Node.js application using the appropriate command (e.g., `node app.js` or `npm start`).
   - Ensure that the application starts without any errors and is accessible via the configured server port.

10. Testing and Verification:
    - Perform thorough testing of the deployed application to ensure all functionalities are working as expected.
    - Verify that the application can connect to the databases and perform read and write operations correctly.
    - Test the application's responsiveness, performance, and error handling.

11. Monitoring and Logging:
    - Set up monitoring and logging mechanisms to track the application's health, performance, and any potential issues.
    - Configure alerts and notifications to promptly address any critical errors or downtime.

12. Backup and Disaster Recovery:
    - Implement regular backup processes for the application files, databases, and any other critical data.
    - Establish a disaster recovery plan to ensure quick recovery and minimal downtime in case of any unforeseen events.

