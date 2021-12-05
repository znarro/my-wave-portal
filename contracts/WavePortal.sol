// SPDX-License-Identifier: UNLICENSED

// version of the Solidity compiler we want our contract to use
pragma solidity ^0.8.0;

// hardhat gives us this to console.log in our contract
import "hardhat/console.sol";

contract WavePortal {
    constructor() {
        console.log("My first smart contract!"); 
    }
}
