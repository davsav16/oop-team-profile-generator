const Manager = require('../lib/Manager');

test('Check that officeNum is a number', () => {
    let office = 3
    const manager = new Manager("David", 2, "email", office);

    expect(manager.office).toEqual(expect.any(Number));
})