const Employee = require('../lib/Employee');

describe('Employee', function testEmployee() {

    const testEmployee = new Employee('Sarah Johnson', 4, 'SJohnson@yahoo.com');

    describe('employeeName', function testemployeeName() {
        it("should return the employee's name", () => {
            let employeeName = testEmployee.getName();
            expect(employeeName).toEqual('Sarah Johnson');
        })
    });

    describe('employeeId', function testemployeeId() {
        it("should return the employee's Id", () => {
            let employeeId = testEmployee.getId();
            expect(employeeId).toEqual(4);
        })
    });

    describe('employeeEmail', function testemployeeEmail() {
        it("should return the employee's email address", () => {
            let employeeEmail = testEmployee.getEmail();
            expect(employeeEmail).toEqual('SJohnson@yahoo.com');
        })
    });

    describe('Role Check', function employeeRoleTest() {
        it("should return the new employee's role as 'Employee'", () => {
            let employeeRole = testEmployee.getRole();
            expect(employeeRole).toEqual('Employee');
        });
    });
});