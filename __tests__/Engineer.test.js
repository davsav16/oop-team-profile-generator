const Engineer = require('../lib/Engineer');

test('See if git hub is a string', () => {
    let github = ""
    const engineer = new Engineer("David", 2, "email", github);

    expect(engineer.github).toEqual(expect.any(String));
})