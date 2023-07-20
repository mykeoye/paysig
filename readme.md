## Paysig

This project is my solution to the ethereum bootcamp week 1 programming assignment, sponsored by Alchemy University. It's a simple payment application,
which uses digital signatures to provide a secure means of facilitating transfers betwen different wallet addresses. It ties together concepts from cryptography
like digital signatures, ECDSA (Elliptic Curve Digital Signature Algorithm) and public key derivation. Concepts that are prevalent in securing transactions,
from existential forgeries. Distributed consensus is not a core concern for this project.
 
### Client build instructions

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server build instructions

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
