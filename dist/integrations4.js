"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentName = exports.getGradesAndStudentId = exports.getTasks = void 0;
async function getTasks(exercise) {
    let taskId = 0;
    await fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        data.forEach(tasks => {
            if (tasks.title === exercise) {
                taskId = tasks.id;
            }
        });
    });
    return taskId;
}
exports.getTasks = getTasks;
async function getGradesAndStudentId(taskId) {
    const number = [];
    const studentId = [];
    await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        data.forEach(grades => {
            if (grades.taskId === taskId.toString()) {
                number.push(grades.number);
                studentId.push(grades.studentId);
            }
        });
        console.log(number);
    });
    return studentId;
}
exports.getGradesAndStudentId = getGradesAndStudentId;
async function getStudentName(studentId) {
    const studentName = [];
    await fetch('https://apigenerator.dronahq.com/api/g4C15xPP/students')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        studentId.forEach(id => {
            data.forEach(students => {
                if (students.id === parseInt(id)) {
                    studentName.push(students.Name);
                }
            });
        });
    });
    console.log(studentName);
}
exports.getStudentName = getStudentName;
//# sourceMappingURL=integrations4.js.map