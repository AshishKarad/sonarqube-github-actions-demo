function getUserRole(username) {
  if (username === "admin") {
    return "ADMIN";
  } else if (username === "manager") {
    return "MANAGER";
  } else if (username === "developer") {
    return "DEVELOPER";
  } else if (username === "tester") {
    return "TESTER";
  } else {
    return "USER";
  }
}

function buildQuery(username) {
  return "SELECT * FROM users WHERE username = '" + username + "'";
}

module.exports = {
  getUserRole,
  buildQuery
};
