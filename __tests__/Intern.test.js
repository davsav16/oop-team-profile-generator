const Intern = require('../lib/Intern');

test('check school', () => {
    let school = ""
    const intern = new Intern("David", 2, "email", school);

    expect(intern.school).toEqual(expect.any(String));
})