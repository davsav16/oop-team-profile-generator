const Employee = require('../lib/Employee');

test('checks to make sure name is a string', () => {
    let name = 'David'
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
})

test('see if employee is returned', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual(expect.any(String));
})

test('see if id is a number', () => {
    let id = 23;
    const employee = new Employee("David", id, "email");

    expect(employee.id).toEqual(expect.any(Number));
})

test('see if email is a string', () => {
    let email = ''
    const employee = new Employee("David", 1, email);

    expect(employee.email).toBe(email);
})