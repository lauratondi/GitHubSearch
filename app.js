// INIT GITHUB
const github = new Github();

// INIT UI
const ui = new UI();

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
        ui.showProfile(data.profile);
        console.log(data);
      }
    });
  } else {
    //   CLEAR PROFILE
  }
});
