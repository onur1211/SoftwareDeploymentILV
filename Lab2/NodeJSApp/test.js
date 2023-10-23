var assert = require('assert');
const { checkCredentials } = require('./auth.js');

var users = {
  admin: { name: 'admin', password: 'admin123' }
};

describe('Authentication Null Credentials', function () {
  describe('#checkCredentials()', function () {
    it('authentication should fail with null credentials', function () {
      let user = users["admin"];
      let result = checkCredentials(null, null, user);
      assert.equal(result, false);
    });
  });
});

describe('Authentication Invalid Credentials', function () {
  describe('#checkCredentials()', function () {
    it('authentication should fail with invalid credentials', function () {
      let user = users["admin"];
      let result = checkCredentials("Invalid name", "Invalid password", user);
      assert.equal(result, false);
    });
  });
});

describe('Authentication Valid Credentials', function () {
  describe('#checkCredentials()', function () {
    it('authentication should succeed with valid credentials', function () {
      let user = users["admin"];
      let result = checkCredentials(user.name, user.password, user);
      assert.equal(result, true);
    });
  });
});