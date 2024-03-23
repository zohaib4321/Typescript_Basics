abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ){}

  abstract getSepia(): void
  getReelTime(): number {
    return 8
  }
}

class Instagram extends TakePhoto{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){
    super(cameraMode, filter)
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

let user = new Instagram("test", "test", 3)
user.getReelTime()
