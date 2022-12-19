"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExercisesName = exports.getTaskIdAndGrade = exports.getStudentNameById = void 0;
async function getStudentNameById(id) {
    await fetch('https://apigenerator.dronahq.com/api/g4C15xPP/students')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        data.forEach(students => {
            if (students.id === id) {
                const studentName = students.Name;
                console.log(studentName);
                return studentName;
            }
        });
    });
}
exports.getStudentNameById = getStudentNameById;
async function getTaskIdAndGrade(id) {
    let taskId = [];
    let number = [];
    await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        data.forEach(grades => {
            if (grades.studentId == id) {
                taskId.push(grades.taskId);
                number.push(grades.number);
            }
        });
        console.log(number);
    });
    return taskId;
}
exports.getTaskIdAndGrade = getTaskIdAndGrade;
async function getExercisesName(taskId) {
    let exercises = [];
    await fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        taskId.forEach(id => {
            data.forEach(tasks => {
                if (tasks.id == id) {
                    exercises.push(tasks.title);
                }
            });
        });
        console.log(exercises);
    });
    return exercises;
}
exports.getExercisesName = getExercisesName;
//# sourceMappingURL=integrations.js.map