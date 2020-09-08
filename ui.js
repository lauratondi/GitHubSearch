class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // DISPLAY PROFILE IN UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row"> 
      <div class="col-md-3">
      <img class="img-fluid mb-2" src="${user.avatar_url}">
      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
      </div>
      
      <div class="col-md-9">
      <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
      <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
      <span class="badge badge-success">Public Followers: ${user.followers}</span>
      <span class="badge badge-info">Following: ${user.following}</span>
      <br><br>
      <ul class="list-group">
      <li class="list-group-item">Company: ${user.company}</li>
      <li class="list-group-item">Website/Blog: ${user.blog}</li>
      <li class="list-group-item">Location: ${user.location}</li>
      <li class="list-group-item">Member Since: ${user.created_at}</li>
      </ul>
      </div>
      </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // SHOW ALERT MESSAGE
  showAlert(message, className) {
    //   CLEAR ANY REMAINING ALERTS
    this.clearAlert();
    //   CREATE DIV
    const div = document.createElement('div');
    // ADD CLASS
    div.className = className;
    // ADD TEXT
    div.appendChild(document.createTextNode(message));
    // GET PARENT
    const container = document.querySelector('.searchContainer');
    // GET SEARCH BOX
    const search = document.querySelector('.search');
    // INSERT ALERT
    container.insertBefore(div, search);

    //   TIMEOUT AFTER 3SEC
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // CLEAR ALERT MESSAGE
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // CLEAR PROFILES
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
