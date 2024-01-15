//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;

contract Greeter {
  event Greet(string greeting);

  string public greeting;

  constructor(string memory _greeting) {
    greeting = _greeting;
  }

  function greet() external {
    emit Greet(greeting);
  }

  function setGreeting(string memory _greeting) external {
    greeting = _greeting;
  }
}
