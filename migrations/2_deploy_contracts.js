const SimpleStorage = artifacts.require('./SimpleStorage.sol');
const SigningLogic = artifacts.require('./SigningLogic.sol');
const Initializable = artifacts.require('./Initializable.sol');
const ECRecovery = artifacts.require('./ECRecovery.sol');
const AccountRegistryLogic = artifacts.require('./AccountRegistryLogic.sol');

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(SigningLogic, "0x33bf68984615e81db39a5a6014b3ffb1b77dad04", "0.1", 1738);
  deployer.deploy(Initializable, "0x33bf68984615e81db39a5a6014b3ffb1b77dad04");
  deployer.deploy(ECRecovery);
  deployer.link(ECRecovery, AccountRegistryLogic);
  deployer.deploy(AccountRegistryLogic, "0x33bf68984615e81db39a5a6014b3ffb1b77dad04");
}
// this basically just tests deployment
// next step is to incorporate front end (client/*)