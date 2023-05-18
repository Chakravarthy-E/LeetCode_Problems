let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = [];
  }
  enter_score(mark) {
    this.marks.push(mark);
  }
  get_average_score() {
    let sum = this.marks.reduce((acc, curr) => acc + curr, 0);
    let average = Math.round(sum / this.marks.length);
    return average;
  }
  get_test_score(test_number) {
    if (test_number < 1 || test_number > this.marks.length) {
      return "NA";
    }
    return this.marks[test_number - 1];
  }
}
let name = readLine();
let n = parseInt(readLine());
let scores = [];
for (let i = 0; i < n; i++) {
  scores.push(parseInt(readLine()));
}
let harry = new Student(name);
harry.enter_score(scores[0]);
harry.enter_score(scores[1]);
harry.enter_score(scores[2]);
harry.enter_score(scores[3]);
harry.enter_score(scores[4]);
console.log(`Harry test 2 marks: ${harry.get_test_score(2)}`);
console.log(`Harry average score: ${harry.get_average_score()}`);
console.log(`Harry test 3 marks: ${harry.get_test_score(3)}`);
console.log(`Harry test 10 marks: ${harry.get_test_score(10)}`);
