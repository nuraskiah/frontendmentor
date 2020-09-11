function emailIsValid(email) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return true;
  }
  return false;
}

document.getElementById('submit').addEventListener('click', function () {
  document.getElementById('search').classList.remove('error');
  document.getElementById('error-message').classList.remove('error');
  var email = document.getElementById('email').value;
  if (!emailIsValid(email)) {
    document.getElementById('search').classList.add('error');
    document.getElementById('error-message').classList.add('error');
  }
});
