class Sorter {
  constructor(public collection: number[]) {}

  //sorting function
  sort(): void {
    const { length } = this.collection;

    //bubble sort algorithm
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          //swapping the value
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

//creating a object of the class
const sorter = new Sorter([10, 5, -1, 2]);
sorter.sort();

console.log(sorter.collection);
