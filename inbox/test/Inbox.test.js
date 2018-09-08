const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // uppercase, instatiate with ctor

const web3 = new Web3(ganache.provider());
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts(); // get test accounts, async
    
});

describe('Inbox', () => {
    it('deploys contract', () => {
        console.log(accounts);
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