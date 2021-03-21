export default class Repository{
  constructor(node) {
    this.name = node.name;
    this.username = node.owner.login;
    this.description = node.description; 
  }
  getName () {
    return this.name;
  }
  getUsername () {
    return this.username;
  }
  getDescription(){
    return this.description;
  }
}