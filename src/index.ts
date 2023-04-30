import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";

//creating a object of the class
const numberCollection = new NumberCollection([10, 5, -1, 2]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);
