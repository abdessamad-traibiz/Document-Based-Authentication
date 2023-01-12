require('babel-register')
require('babel-polyfill')


module.exports = {
    /* This is the configuration for the development network. */
    networks: {
        development: {
            host: '127.0.0.1',
            port: '8545',
            network_id: '*' //connect to any network
        }
    },
    contracts_directory: './src/contracts',
    contracts_build_directory: './src/abis',
    compilers: {
        solc: {
            version: '^0.7.0',
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}