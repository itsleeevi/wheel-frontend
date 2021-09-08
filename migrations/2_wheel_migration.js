const Wheel = artifacts.require("Wheel");

module.exports = function (deployer) {
  deployer.deploy(Wheel);
};
