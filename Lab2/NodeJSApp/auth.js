// auth.js

// Dummy database
var users = {
    admin: { name: 'admin', password: 'admin123' }
};

function authenticate(name, pass, fn) {
    if (!module.parent) console.log('Authenticating %s:%s', name, pass);
    var user = users[name];
    if (!user) return fn(null, null);

    let result = checkCredentials(name, pass, user);
  
    if (result === true) {
      return fn(null, user);
    } else {
      return fn(null, null);
    }
};

function checkCredentials(name, pass, user) {
    if (name === null || pass === null || user === null) {
        console.log("Authentication not possible. Name, pass or user was null!",); 
        return false;
    }

    if (user.name === name && user.password === pass) {
        console.log("Authentication succeeded: ", name, pass);
        return true;
      } else {
        console.log("Authentication failed: ", name, pass);
        return false;
      }
}
  
module.exports = {
    authenticate,
    checkCredentials
};