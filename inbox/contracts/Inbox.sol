pragma solidity ^0.4.17; // solidity version

contract Inbox {
    string public message;
    
    constructor(string initMessage) public { // ctor
        message = initMessage;
    }
    
    function setMessage(string newMessage) public { // setter
        message = newMessage;
    }
}