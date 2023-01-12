// eslint-disable-next-line no-undef
const AuthDoc = artifacts.require('AuthDoc');

module.exports = async function (deployer) {
    await deployer.deploy(AuthDoc)
};
