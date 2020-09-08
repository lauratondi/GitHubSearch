// INIT GITHUB
const github = new Github();

// SEARCH INPUT
const searchUser = document.getElementById('searchUser');

// SEARCH INPUT EVENT LISTENER
searchUser.addEventListener('keyup', (e) => {
  // GET INPUT TEXT
  const userText = e.target.value;

  if (userText !== '') {
    //   MAKE HTTP CALL
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        //   SHOW ALERT
      } else {
        // SHOW PROFILE
      }
    });
  } else {
    //   CLEAR PROFILE
  }
});
