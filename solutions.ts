
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

