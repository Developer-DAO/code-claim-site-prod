//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface ICODE {
    function claim_delegate(address _delegator, address _delegatee) external;

    function transfer(address recipient, uint256 amount) external returns (bool);
}
