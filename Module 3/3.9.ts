{
  //interface

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("engine is starting");
    }
    stopEngine(): void {
      console.log("engine is stopped");
    }
    move(): void {
      console.log("the car is moving");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //abstract class
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log("engine is starting");
      }
      stopEngine(): void {
        console.log("engine is stopped");
      }
      move(): void {
        console.log("the car is moving");
      }
  }
}
