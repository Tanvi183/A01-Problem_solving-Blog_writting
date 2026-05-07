
// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  let evenNumbers: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}



// Problem 2
function reverseString(str: string): string {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}



// Problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}



// Problem 4
function getProperty(obj: any, key: string) {
    return obj[key];
}


// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  let updatedBook = {
    title: book.title,
    author: book.author,
    publishedYear: book.publishedYear,
    isRead: true
  };

  return updatedBook;
}


// Problem 6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);

        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


// Problem 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(num => arr2.includes(num));
}