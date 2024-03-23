// @*************************Public/Private*************************

class User {
  public name: string;
  private email: string;
  readonly city: string = 'lahore'
  constructor(name: string, email: string){
    this.name = name
    this.email = email
  }
}

class User {

  readonly city: string = 'lahore'
  constructor(
    public name: string, 
    private email: string,
    // userId: string

    ){
  }
}

const user = new User("chai", "chai@chai.com")
// user.email


