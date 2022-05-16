const Intern = require('../lib/Intern');

describe('Intern', function internTest() {

    const testIntern = new Intern('Pete Smith', 3, 'PeteSmith@aol.com', 'Ohio State University');

    describe('internName', function testinternName() {
        it("should return the intern's name", () => {
            let internName = testIntern.getName();
            expect(internName).toEqual('Pete Smith');
        })
    });

    describe('internId', function testinternId() {
        it("should return the intern's Id", () => {
            let internId = testIntern.getId();
            expect(internId).toEqual(3);
        })
    });

    describe('internEmail', function testinternEmail() {
        it("should return the intern's email address", () => {
            let internEmail = testIntern.getEmail();
            expect(internEmail).toEqual('PeteSmith@aol.com');
        })
    });

    describe('Role Check', function internRoleTest() {
        it("should return the new intern's role as 'Intern'", () => {
            let internRole = testIntern.getRole();
            expect(internRole).toEqual('Intern');
        });
    });

    describe('returningSchool', function checkInternSchool() {
        it("should return the intern's school name", () => {
            let internSchool = testIntern.getSchool();
            expect(internSchool).toEqual('Ohio State University');
        });
    });
});