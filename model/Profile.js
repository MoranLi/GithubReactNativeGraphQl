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
  }
  getLogo () {
    return this.logo;
  }
  getName () {
    return this.name;
  }
  getUsername () {
    return this.username;
  }
  getBio(){
    return this.bio;
  }
  getEmail(){
    return this.email;
  }
  getWebsite(){
    return this.websiteUrl;
  }
  getRepoCount(){
    return this.repoCount;
  }
  getfollowerCount(){
    return this.followerCount;
  }
  getFollowingCount(){
    return this.followingCount;
  }
  getDate(){
    return this.date;
  }
}