const { deploy } = require('hardhat-deploy');

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  await deploy('GradeBook', {
    from: deployer,
    args: [],
    log: true,
  });
};