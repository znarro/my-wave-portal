const main = async () => {
  // compile our contract
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  // deploy to a new local Ethereum network
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
