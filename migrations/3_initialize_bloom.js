const Initializable = artifacts.require('./Initializable.sol')

module.exports = function (deployer) {
  deployer.deploy(Initializable)
}