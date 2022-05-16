const Manager = require('../lib/Manager');

describe('Manager', function ManagerTest() {

    const testManager = new Manager('Bob Jones', 1, 'BobJones1@aol.com', 32);

    describe('managerName', function testManagerName() {
        it("should return the manager's name", () => {
            let managerName = testManager.getName();
            expect(managerName).toEqual('Bob Jones');
        })
    });

    describe('managerId', function testManagerId() {
        it("should return the manager's Id", () => {
            let managerId = testManager.getId();
            expect(managerId).toEqual(1);
        })
    });

    describe('managerEmail', function testManagerEmail() {
        it("should return the manager's email address", () => {
            let managerEmail = testManager.getEmail();
            expect(managerEmail).toEqual('BobJones1@aol.com');
        })
    });

    describe('Role Check', function managerRoleTest() {
        it("should return the new Manager's role as 'Manager'", () => {
            let managerRole = testManager.getRole();
            expect(managerRole).toEqual('Manager');
        });
    });
});