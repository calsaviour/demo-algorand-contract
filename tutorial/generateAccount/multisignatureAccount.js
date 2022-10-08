// Testnet Accounts Only
// Account Address:L7KEBYSW35NBC3TWKYRGNX5ZAI3TXB44DZ4IGE5DVXXYKTKANIGLZHWOWQ
// Account Mnemonic:cause promote ship parade culture music dragon galaxy hair umbrella praise devote laugh vendor wood tongue voice afford dad oak fresh praise huge able that

// Account Address:MLVWII3GJBLOAU5KQRKGJTNJQBAG632USO6KXLC27TBC5YFMLK2R3FKM3E
// Account Mnemonic:gaze pulse ill sunny erode collect kingdom iron toss learn foil voyage theme obey wrap twelve tomato myth despair twist smile gloom regular above abandon

// Account Address:W2NIPDBIDMEGA5LL6RV3GS2X54QALTQNYPJ4XMVFW4ORTJCI3CK4D74POE
// Account Mnemonic:kitchen latin behave fee tenant salt envelope public science obvious segment nature game slot amused follow sure title window october hidden frequent holiday able near
const algosdk = require('algosdk');
const addressA = "L7KEBYSW35NBC3TWKYRGNX5ZAI3TXB44DZ4IGE5DVXXYKTKANIGLZHWOWQ";
const addressB = "MLVWII3GJBLOAU5KQRKGJTNJQBAG632USO6KXLC27TBC5YFMLK2R3FKM3E";
const addressC = "W2NIPDBIDMEGA5LL6RV3GS2X54QALTQNYPJ4XMVFW4ORTJCI3CK4D74POE";

const mparams = {
    version: 1,
    threshold: 2,
    addrs : [
        addressA,
        addressB,
        addressC
    ],
};
// Calculate multisig account
const multisigaddr = algosdk.multisigAddress(mparams);
console.log("Constructing with threshold:", mparams.threshold);
console.log("Calculated multisig address:", multisigaddr);