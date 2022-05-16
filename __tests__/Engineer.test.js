const Engineer = require('../lib/Engineer');

describe('Engineer', function testEngineer() {

    const testEngineer = new Engineer('Anthony Pacella', 2, 'anthonyapacella@gmail.com', 'anthonypacella');

    describe('engineerName', function testengineerName() {
        it("should return the engineer's name", () => {
            let engineerName = testEngineer.getName();
            expect(engineerName).toEqual('Anthony Pacella');
        })
    });

    describe('engineerId', function testengineerId() {
        it("should return the engineer's Id", () => {
            let engineerId = testEngineer.getId();
            expect(engineerId).toEqual(2);
        })
    });

    describe('engineerEmail', function testengineerEmail() {
        it("should return the engineer's email address", () => {
            let engineerEmail = testEngineer.getEmail();
            expect(engineerEmail).toEqual('anthonyapacella@gmail.com');
        })
    });

    describe('Role Check', function engineerRoleTest() {
        it("should return the new engineer's role as 'Engineer'", () => {
            let engineerRole = testEngineer.getRole();
            expect(engineerRole).toEqual('Engineer');
        });
    });

    describe('returningGithub', function checkEngineerGithub() {
        it("should return the engineer's github username", () => {
            let engineerGithub = testEngineer.getGithub();
            expect(engineerGithub).toEqual('anthonypacella');
        });
    });
});