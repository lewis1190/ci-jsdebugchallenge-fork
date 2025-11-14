// This program calculates student grades and provides feedback

let students = [
    { name: "Alice", score: 85 }
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "Diana", score: 88 }
];

function getStudentCount() {
    return studentList.length;
}

function getAverageScore(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    let average = total / scores.length;
}

function getTopScores(scores, n) {
    let top = [];
    for (let i = 0; i <= n; i++) {
        top.push(scores[i]);
    }
    return top;
}

function isPassingGrade(score) {
    if (score = 70) {
        return true;
    }
    return false;
}

function getGradeLetters(scores {
    let grades = [];
    for (let score of scores) {
        if (score >= 90) {
            grades.push("A");
        } else if (score >= 80) {
            grades.push("B");
        } else if (score >= 70) {
            grades.push("C");
        } else {
            grades.push("F");
        }
    }
    return grades;
}

function displayStudent(index) {
    let studentt = students[index];
    console.log(studentt.name + ": " + studentt.score);
}

function printScores(scores) {
    let i = 0;
    while (i < scores.length) {
        console.log(scores[i]);
    }
}

function createGradeReport(student) {
    return student.fullName + " scored " + student.score;
}

function validateScores(scores) {
    for (let score of scores) {
        if (score > 100) {
            return false;
        }
    }
    return true;
}


console.log("=== Student Grade System ===\n");

console.log("Total students:", getStudentCount());
console.log("Average score:", getAverageScore([85, 92, 78, 88]));

console.log("\nTop 2 scores:", getTopScores([92, 88, 85, 78], 2));

console.log("\nChecking passing grade (70+):");
console.log("Score 75 is passing:", isPassingGrade(75));
console.log("Score 65 is passing:", isPassingGrade(65));

console.log("\nGrade letters:", getGradeLetters([95, 87, 72, 65]));

console.log("\nStudent details:");
displayStudent(0);
displayStudent(1);

console.log("\nAll scores:");
printScores([85, 92, 78, 88]);

console.log("\nGrade reports:");
for (let student of students) {
    console.log(createGradeReport(student));
}

console.log("\nValidating scores [85, 92, 78, 88]:", validateScores([85, 92, 78, 88]));
console.log("Validating scores [95, 110, 88]:", validateScores([95, 110, 88]));
