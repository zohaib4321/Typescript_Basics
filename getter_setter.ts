// @*********************Getter/Setter*******************************

class User {

  // private _courseCount = 1;
  protected _courseCount = 1;

  readonly city: string = 'lahore'
  constructor(
    public name: string, 
    private email: string,
    // userId: string

    ){
  }

  private deleteToken(){
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than one")
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User{
  isFamily: boolean = true
  changeCourseCount(){
    this._courseCount = 4
  }
}

const user = new User("chai", "chai@chai.com")
// user.email
// user.deleteToken
