// Including generateKeyPair from crypto module
const { generateKeyPair } = require("crypto");

//crypto.generateKeyPair(type, options, callback)
//Elliptic- curve crytography --> On average, processing for ECC is about four times less CPU-intensive than for RSA. EC also tends to provide significantly higher security.
//It holds the string type for which keys needs to be generated. Supported types are - RSA, DSA, EC, Ed25519, Ed448, X25519, X448 and DH.

generateKeyPair(
  "ec",
  {
    // Options
    namedCurve: "secp256k1",
    //DER - Distinguished Encoding Rules -files are digital certificates in binary format
    //Simple public-key infrastructure
    publicKeyEncoding: {
      type: "spki",
      format: "der",
    },

    //pkcs8 is a standard syntax for storing private key information
    privateKeyEncoding: {
      type: "pkcs8",
      format: "der",
    },
  },
  (err, publicKey, privateKey) => {
    if (!err) {
      // After encoding
      console.log("Public Key is: ", publicKey.toString("hex"));
      console.log();
      console.log("Private Key is: ", privateKey.toString("hex"));
    } else {
      console.log("Error is: ", err);
    }
  }
);

//A public key infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption.
// Converts the numeric value of each element of a specified array of bytes to its equivalent hexadecimal string representation
//A digital certificate is a file or electronic password that proves the authenticity of a device, server, or user through the use of cryptography and the public key infrastructure (PKI). Digital certificate authentication helps organizations ensure that only trusted devices and users can connect to their networks.
