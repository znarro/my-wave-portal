const main = async () => {
  // fake wallet addresses
  const [owner, randomPerson] = await hre.ethers.getSigners();
  // compile our contract
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  // deploy to a new local Ethereum network
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  let addressesThatWaved;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  wavetxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  console.log("Addresses that waved:");
  addressesThatWaved = await waveContract.getAddressesThatWaved();
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
