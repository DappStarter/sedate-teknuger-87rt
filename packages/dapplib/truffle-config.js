require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan riot noble horse install depth frame gauge'; 
let testAccounts = [
"0x81478a1a98333aed13b7b4324f253f61bc71fa41551affddd63dfbf2b635e73b",
"0xa6b515deb6a784171d4bb93e698b9f683b6a4545cb94782cdd2e13a8241f764d",
"0xf0945871f8010efe2381bac6293bd48e6a5a5126e12f009fb8ba4a5e1508b481",
"0x363962e607d66a11c8de07fd5336080aef28047f6521decab73d8c00fd32dbcb",
"0x3b3ef6f9e8ed93f77f4b63a864e3fa54e86b3592fee4b646adfd5b8da2b20942",
"0xfa017c2a8767c561ac21f38cb9286d58ac0e728b651cbd8820189bc61850988f",
"0x7407f3c9ae185abbcac6fa301d9e26311ed7a16569eed56cd9261d8ed094f671",
"0xdc9a8ed1e1d1b5ccd3f26b8a135979e626890bfc9ed325789d72a874b939be81",
"0x89da320e34e12449b2d9308b3d4e4eb880d87165aaf0a31a00cdf2c6a768e6c5",
"0xe97f39513bcf0dc1104c84eaa50c9c7b656a2870011371d63d5377af0ea12490"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

