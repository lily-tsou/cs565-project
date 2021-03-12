# NoteQuest React/Express 
This project provides a full stack note taking application. It is a JavaScript based React app that also has a local API server using express.

Webpack is currently configured to bundle the frontend only.

# Introduction
The application follows a Model View Controller (MVC) paradigm and can be deployed as a single Docker container.  With full-stack web microservices, the Model layer is frequently called "the client" or "frontend".  The View layer is "the server" or "backend".  The Controller is the Node.js toolchain used to build, configure and launch both server and client components.

Node.js provides the core server process and can be controlled via Node Package Manager (npm) CLI.  Javascript is interpreted and rendered within the Node process.  The process is configured to listen on a port to facilitate access to the client.

While Node.js is primarily a Javascript interpreter, the richness of the platform comes from the huge collection of Javascript libraries available.  In this project, the following library frameworks are used:
* React.js - Originally created by Facebook (https://reactjs.org/), this library provides client-side rendering of complex, interactive user interface objects.
* Express.js - A simple web application framework (https://expressjs.com/) that runs on the server-side to create a socket listener and define context routes to various endpoints.
* Webpack.js - A library used to bundle source code into single server and client modules. (https://webpack.js.org/).
* Babel.js - A JavaScript compiler (or transpiler) (https://babeljs.io/)
* Jest.js - A library used for unit testing (https://jestjs.io/).
* Mongodb.js - A library used to connect with an external MongoDB database service (https://www.mongodb.com/)

# Source Code

## Project Configuration
All Node.js projects must have a `package.json` in the root.  This can also be generated for the 1st time with `npm init`.  The `package.json` provides project meta data as well as dependent
package libraries.  It is not necessary to manually add these dependencies, npm can do it for you.  For instance `npm install react --save` will not only get the `react` 
package and install it to `/node_modules` but the `--save` will also update `package.json` for you.

`package.json` also defines scripts that can be used to run the project with various configurations.  For instance, `build` is defined to run `webpack --mode development` while `start` will run `node src/backend/server.js`.  All the script entries can be invoked via CLI with `npm run` (ie `npm run build`).

Source code must be located in `/src`.

The Webpack.js bundler library is configured via `/webpack.config.js`.

Jest is used for unit testing and is configured via within it's own block of `package.json`.  `npm run test` will invoke the `test` script.  This runs `jest --silent --forceExit` using the `jest` CLI.   

## Backend 
Also called the server.  ~~The backend build process compiles the Javascript files found in `/src/backend` into a single bundled JavaScript file located in `/dist/server.js`~~.  Currently, backend source code is being run directly in the server environment without bundling first.

The following files are contained within this layer:
* server.js - Entry point to the server, creates an Express object and listens on port 80
* routes.js - Extends the Express object by creating the a Router object and defining the routes.  These represent the contexts to the endpoints.
* db/index.js - Entry point to all the db operation functions in the db module. Functions are defined to connect to the MongoDB service and use the corresponding client object to perform insert, find, update and delete functions. 
* api/index.js - A wrapper layer which collates a set of functions which forward requests from the router listeners to the db functions.  Sidecar functions with files are provided for add, edit, find, list, delete and deleteAll.

## Frontend
The client build process compiles the React app located in `/src/frontend` into a bundled located at `/public/client.js`.

The client utilizes React.js libraries contained in the following files:
* index.js - The entry point on the client available via the "/" context.  It renders the App class in the root window.

Components:
* App.js - Defines the App class which asynchronously interacts with the published APIs and renders the response data via its child components.
* HomePage.js - Main homepage for app. Contains a note text editor, and a sidebar listing all notes.
* SideBar.js - Aside containing a button to add a new note, input to search for a note, and a list of note previews.
* AddButton.js - Button component to add a new note
* Search.js - Input to search for string
* NotePreview.js - Container for note preview
* Editor.js - Main text area for creating a note
* EditBar.js - Panel above note text to allow users to edit, delete, and save a note
* Contact.js - Container for contact cards
* ContactCard.js - Cards to hold contact information for NoteQuest developers
* About.js - Information about the app
* Navbar.js - Navbar to route users to different paths, contained at the top of all pages
* Footer.js - Copyright information
* Api.js - API implementations

## Running the project
In order to build the project, use `npm run build`.  This will package all frontend source files, run them through the Babel transpiler and
write to `/public/index.html` and `/public/client.js`.  Backend source will be run as is from `/src/backend/server.js`.

In order to run the server, use `npm run start`.  The server will start on port 80 (http://localhost:80). 

`http://<host name>/` to access the main UI.

# Unit Testing
Where possible, each module (source code file) contains its own dedicated test module with a `.test.` in the filename.  For instance `server.js` is tested by `server.test.js` and the `.test.` file is always 
sidecar to the original source module.  Each test module defines a new test via `test()` and will provide the test code within the body.  Pass/fail is determined by `expect(<test criteria>).toBe(<expected result>)`.

# Containerization
There is 1 Dockerfile present.  `Dockerfile` builds the container image with `npm start` as the entrypoint. 

The container starts with `node:alpine` which is pulled from `https//hub.docker.com`.  This is a very lightweight Linux container based on Alpine Linux.  The Node framework is added on top of the base Linux.

To build:
`docker build -f Dockerfile -t note-quest:latest .`

To deploy directly:
`docker container run -p 80:80 --rm note-quest:latest`

# Continuous Integration/Continuous Deployment
The CI/CD system currently being used is GitHub Actions.  It provides 6 primary stages:
1. Git merge to either develop or main branches
2. Jest unit test run
3. Webpack build to bundle frontend and transpile
4. Docker build to create the container image
5. Publish image to Google Container Registry
6. Deploy image to Google Kubernetes Engine service

# Target Deployment Environment
The container build artifact can run anywhere, even on a local workstation.  Currently, the target environment is a Kubernetes cluster defined in Google Cloud Platform via their Google Kubernetes Engine service.  The container is wrapped in a Kubernetes Deployment and then deployed to 1 or more nodes.  In addition, a Kubernetes Service must be configured within the cluster to proxy traffic from the outside world to the container within the Deployment.
# Known Issues
The follow errors are seen with `npm run build`:

`WARNING in ./node_modules/axe-core/axe.js 6275:19-26
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/@axe-core/react/dist/index.js 14:14-33
 @ ./src/frontend/index.js 17:12-38`

This was introduced with the axe-core module (used for accessiblity testing) but is believed to be a benign bug in the module itself.

Another issue that was recently visible was in stdout of the node.js server:
`(node:73512) Warning: Accessing non-existent property 'MongoError' of module exports inside circular dependency at emitCircularRequireWarning (internal/modules/cjs/loader.js:650:11)`
Researching this, it is again an issue with the mongodb 3rd party module and is in process of being fixed.