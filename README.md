# App React/Express 
This project provides a full stack note taking application. It is a JavaScript based React app that also has a local API server using express.

There are 2 different Webpack configurations. One for the server and one for the client.

# Introduction
The application follows a Model View Controller (MVC) paradigm and can optionally be deployed as a single Docker container.  With full-stack web microservices, the Model layer is frequently called "the client" or "frontend".  The View layer is "the server" or "backend".  The Controller is the Node.js toolchain used to build, configure and launch both server and client components.

Node.js provides the core server process and can be controlled via Node Package Manager (npm) CLI.  Javascript is interpreted and rendered within the Node process.  The process is configured to listen on a port to facilitate access to the client.

While Node.js is primarily a Javascript interpreter, the richness of the platform comes from the huge collection of Javascript libraries available.  In this project, the following library frameworks are used:
* React.js - Originally created by Facebook (https://reactjs.org/), this library provides client-side rendering of complex, interactive user interface objects.
* Express.js - A simple web application framework (https://expressjs.com/) that runs on the server-side to create a socket listener and define context routes to various endpoints.
* Webpack.js - A library used to bundle source code into single server and client modules. (https://webpack.js.org/).
* Babel.js - A JavaScript compiler (or transpiler) (https://babeljs.io/)
* Jest.js - A library used for unit testing (https://jestjs.io/).

# Source Code

## Project Configuration
All Node.js projects must have a `package.json` in the root.  This can also be generated for the 1st time with `npm init`.  The `package.json` provides project meta data as well as dependent
package libraries.  It is not necessary to manually add these dependencies, npm can do it for you.  For instance `npm install react-chartjs-2 f--save` will not only get the `react-chartjs-2` 
package and install it to `/node_modules` but the `--save` will also update `package.json` for you.

`package.json` also defines scripts that can be used to run the project with various configurations.  For instance, `build` is defined to run `webpack --mode development` while `start` will run `node dist/server.js`.  All the script entries can be invoked via CLI with `npm run` (ie `npm run build`).

Source code must be located in `/src`.

The Webpack.js bundler library is configured via `/webpack.config.js`.

Jest is used for unit testing and is configured via within it's own block of `package.json`.  `npm run test` will invoke the `test` script.  This runs `jest --silent --forceExit` using the `jest` CLI.   

## Server 
Also called the Model or backend.  The server build process compiles the Javascript files found in `/src/server` into a single bundled JavaScript file located in `/dist/server.js`.

The following files are contained within this layer:
* server.js - Entry point to the server, creates an Express object and listens on port 3000
* routes.js - Extends the Express object by creating the a Router object and defining the routes.  These represent the contexts to the endpoints.
* db/index.js - Entry point to the /api/add-note endpoint.  Creates a connection to the MongoDB database.
* db/add-note.js - Executes a query to the MongoDB database to add a new note.  An all() function is exported to faciliate getting the data from the /api/add-note route.
* config/index.js - Exports a json component which defines all the MongoDB connection parameters.

## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/client.js`.

The client utilizes React.js libraries contained in the following files:
* index.js - The entry point on the client available via the "/" context.  It renders the App class in the root window.
* App.js - Defines the App class which asynchronously interacts with the published APIs and renders the response data.

## Running the project
In order to build the project, use `npm run build`.  This will package all source files, run them through the Babel transpiler and
write to `/public/index.html`, `/public/client.js` and `/dist/server.js`.

In order to run the server, use `npm run start`.  The server will start on port 3000 (http://localhost:3000). 

`http://<host name>:3000/` to access the main UI.

# Unit Testing
Where possible, each module (source code file) contains its own dedicated test module with a `.test.` in the filename.  For instance `server.js` is tested by `server.test.js` and the `.test.` file is always 
sidecar to the original source module.  Each test module defines a new test via `test()` and will provide the test code within the body.  Pass/fail is determined by `expect(<test criteria>).toBe(<expected result>)`.

# Containerization (to be determined)
There is 1 Dockerfile present.  `Dockerfile` builds the container image with `npm start` as the entrypoint. 

To build:
`docker build -f Dockerfile -t galaxy-note:latest .`

To deploy directly:
`docker container run -p 3000:3000 --rm galaxy-note:latest`

# Known Issues
The follow errors are seen with `npm run test`:

server.test.js
 * Jest has detected the following 2 open handles potentially keeping Jest from exiting
 * Cannot log after tests are done. Did you forget to wait for something async in your test?

Error 1 shows up any time the test involves a MongoDB connection.  Even if the connection is destroyed afterwards, this error still shows up and prevents the test from exiting cleanly.
Error 2 shows up when a `console.log` is present in the code.  `jest --silent --forceExit` does fix both. 
