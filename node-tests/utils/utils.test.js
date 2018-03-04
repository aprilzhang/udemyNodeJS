//BDD
//run npm test
//nodemon --exec "npm test"
const utils = require('./utils');
const expect = require('expect');

//describe can be nested
// e.g describe('#add')
describe('Utils', () => {
	it('should add two numbers', () => {
	  var res = utils.add(33,11);
	  expect(res).toBe(44).toBeA('number');
	});

	//need to tell mocha that this is a async method
	it('should async add two numbers', (done) => {
	  utils.asyncAdd(4,3, (sum)=> {
		expect(sum).toBe(7).toBeA('number');
		done();
	  });
	});

	it('should square a number', () => {
	  var res = utils.square(21);
	  expect(res).toBe(441).toBeA('number');
	});

	it('should async square a number', (done) => {
	  utils.asyncSquare(12, (square)=> {
		expect(square).toBe(144).toBeA('number');
		done();
	  });
	});
});



it('should expect some values', () => {
  //expect(12).toNotBe(12);
  //This is too compare ====
  //expect({name: 'April'}).toBe({name: 'April'});
  //expect({name: 'April'}).toEqual({name: 'April'});
  //expect([2,3,4]).toInclude(2);
  //expect([2,3,4]).toExclude(1);
  expect({
	  name: 'April',
	  age: 26,
	  location: 'london'
  }).toExclude({
	  age: 24
  });
});

it('should set firstName and lastName', () => {
  var user = {
	  age: 26,
	  location: 'london'
  };
  var res = utils.setName(user, "April Zhang");
  //user is passed by reference
  expect(user).toEqual(res);
  expect(res)
  .toInclude({
	firstName: "April",
	lastName: "Zhang"
  });
});