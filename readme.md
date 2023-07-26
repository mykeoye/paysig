## Paysig

This project is my solution to the ethereum bootcamp week 1 programming assignment, sponsored by Alchemy University. It's a simple payment application,
which uses digital signatures to provide a secure means of facilitating transfers betwen different wallet addresses. It ties together concepts from cryptography
like digital signatures, ECDSA (Elliptic Curve Digital Signature Algorithm) and public key derivation. Concepts that are prevalent in securing transactions,
from existential forgeries. Distributed consensus is not a core concern for this project.


### Test accounts / wallets
The file `test-keys.txt` contains wallets with their corresponding public/private key pairs, which can be used to test the application. To
view the balance for a particular wallet simply copy and paste the wallet address into the wallet input screen. 

Transfers are also easy. For this you will need to sign an intent (message) using your private key. The `server/scripts` folder contains two
useful scripts to help with this. `keygen.js` can be used to generate your own `public/private` key and wallet, while `signer.js` can be used
to generate a digital signature.

The signature takes the format `hash|signature_object` encoded in hex. Running the files is easy, just run `node scripts/<filename>` from the
root of the `server` project. The resulting signature is printed to console.
 
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
