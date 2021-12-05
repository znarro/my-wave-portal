// SPDX-License-Identifier: UNLICENSED

// version of the Solidity compiler we want our contract to use
pragma solidity ^0.8.0;

// hardhat gives us this to console.log in our contract
import "hardhat/console.sol";

contract WavePortal {
    // state variable, it's permanently stored in the blockchain
    uint256 totalWaves;
    address[] addressesThatWaved;

    // constructor executes once contract is officialy deployed
    constructor() {
        console.log("My first smart contract!"); 
    }

    function wave() public {
        totalWaves += 1;
        addressesThatWaved.push(msg.sender);
        // to call a smart contract fx you need to be connected with a valid wallet
        // so msg.sender is the wallet address
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getAddressesThatWaved() public view {
        for (uint256 i = 0; i < addressesThatWaved.length; i++) {
            console.log(addressesThatWaved[i]);
        }
    }
}
