require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remain unfold heavy cloth forward transfer'; 
let testAccounts = [
"0x449cbf354c491a62c4c8e3379f64af8470c21495ffd48b8eae5bafb46efd2fbc",
"0xd16cfdb49dd953f5a0490c654b83accc88f04a2a373359edccb9d5e34d6a60e4",
"0x8ee289738cf7c5542aa4585e8b28ff8619f3ad26ff65ebc4cde8f3a9a4d2e171",
"0x9e07939b642291c3c8debf8aedb4e633f453c5cab2955dae8f6e24ae32a1b0f2",
"0x6e383151b02ac026a9e0565491a7df4bcee298913e2d5343c08e277e1b0451e3",
"0x574729070481026e5530bb1d42121ac284990b0bbc322b444fb4f84800b4bcf3",
"0x21a70321e202bacbec2a91bb3628e668ad72ec8c2332bdfa9d5cd033865d44cd",
"0x5911555c5b498ad16aacc742f8034bbbc832d2b4a0769da114d08e8966f795b3",
"0xd6d4461d34b5a8e56385a90505e2728faed63b68924acfb895ccb0745a083cf9",
"0x042f03bcec7dbf3edb6518e18c2d20c186b32a59c9a5f94941496d5ef2b70d99"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

