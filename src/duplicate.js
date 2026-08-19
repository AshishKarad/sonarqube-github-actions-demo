function validateUserA(user) {
  if (!user) {
    return false;
  }

  if (!user.name) {
    return false;
  }

  if (!user.email) {
    return false;
  }

  return true;
}

function validateUserB(user) {
  if (!user) {
    return false;
  }

  if (!user.name) {
    return false;
  }

  if (!user.email) {
    return false;
  }

  return true;
}

module.exports = {
  validateUserA,
  validateUserB
};
