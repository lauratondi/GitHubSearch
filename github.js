class Github {
  constructor() {
    this.config = {
      headers: {
        Authorization: 'token ' + config.MY_TOKEN,
      },
    };

    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile: profile,
      repos: repos,
    };
  }
}
