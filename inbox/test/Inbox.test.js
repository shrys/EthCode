const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // uppercase, instatiate with ctor
const { interface, bytecode } = require('../compile');

const web3 = new Web3(ganache.provider());
let accounts;
let inbox;

beforeEach(async () => {
    // get test accounts, async
    accounts = await web3.eth.getAccounts();
    
    // use an account for deployment
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hi there!']
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });
});

describe('Inbox', () => {
    it('deploys contract', () => {
        console.log(inbox);
    });
});

// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car; // scoping for internal anon functions

// beforeEach(() => {
//     car = new Car();
// })

// describe('Car', () => {
//     it('can park', () => {
//         // const car = new Car();
//         assert.equal(car.park(), 'stopped'); 
//     });
//     it('can drive', () => {
//         // const car = new Car();
//         assert.equal(car.drive(), 'vroom'); 
//     });
// });