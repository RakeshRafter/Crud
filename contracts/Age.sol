pragma solidity ^0.8.17;

contract User {
    string name;
    uint256 age;

    constructor(string memory _name, uint256 _age)  {
        name = _name;
        age = _age;
    }

    function getName() external view returns(string memory) {
		return name;
	}

    function getAge() external view returns(uint256) {
		return age*2;
	}

}