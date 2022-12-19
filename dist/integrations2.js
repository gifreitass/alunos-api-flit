"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGradeAverage = exports.getGrade = void 0;
async function getGrade(id) {
    let number = [];
    await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        data.forEach(grades => {
            if (grades.studentId === id.toString()) {
                number.push(grades.number);
            }
        });
    });
    return number;
}
exports.getGrade = getGrade;
async function getGradeAverage(grades) {
    const numberGrades = [];
    grades.forEach(grade => {
        numberGrades.push(parseInt(grade));
    });
    let sumNumberGrades = 0;
    numberGrades.forEach(grade => {
        sumNumberGrades += grade / numberGrades.length;
    });
    console.log(sumNumberGrades);
}
exports.getGradeAverage = getGradeAverage;
//# sourceMappingURL=integrations2.js.map