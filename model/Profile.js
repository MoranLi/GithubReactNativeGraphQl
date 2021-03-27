export default class Profile {
  constructor(response) {
    this.logo = response.avatarUrl;
    this.name = response.name;
    this.username = response.login;
    this.bio = response.bio;
    this.url = response.websiteUrl;
    this.email = response.email;
    this.repoCount = response.repositories.totalCount;
    this.followerCount = response.followers.totalCount;
    this.followingCount = response.following.totalCount;
    this.date = response.createdAt;
    this.followers = [];
    for (let i = 0; i < response.followers.totalCount; i += 1) {
      this.followers.push(response.followers.nodes[i]);
    }
    this.following = [];
    for (let i = 0; i < response.following.totalCount; i += 1) {
      this.following.push(response.following.nodes[i]);
    }
  }

  getLogo() {
    return this.logo;
  }

  getName() {
    return this.name;
  }

  getUsername() {
    return this.username;
  }

  getBio() {
    return this.bio;
  }

  getEmail() {
    return this.email;
  }

  getWebsite() {
    return this.websiteUrl;
  }

  getRepoCount() {
    return this.repoCount;
  }

  getfollowerCount() {
    return this.followerCount;
  }

  getFollowingCount() {
    return this.followingCount;
  }

  getDate() {
    return this.date;
  }

  getFollowers() {
    return this.followers;
  }

  getFollowing() {
    return this.following;
  }
}
