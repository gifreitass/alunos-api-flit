"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExercises = exports.getTaskId = void 0;
async function getTaskId(id) {
    let taskId = [];
    await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        data.forEach(grades => {
            if (grades.studentId === id.toString()) {
                taskId.push(grades.taskId);
            }
        });
    });
    return taskId;
}
exports.getTaskId = getTaskId;
async function getExercises(taskId) {
    const solvedExercises = [];
    const pendingExercises = [];
    let pendingExercisesId = [];
    const exercisesId = [];
    await fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        data.forEach(tasks => {
            taskId.forEach(id => {
                if (tasks.id === parseInt(id)) {
                    solvedExercises.push(tasks.title);
                }
            });
            exercisesId.push(tasks.id.toString());
        });
        pendingExercisesId = exercisesId.filter(exercisesId => !taskId.filter(id => exercisesId == id).length);
        pendingExercisesId.forEach(id => {
            data.forEach(tasks => {
                if (tasks.id === parseInt(id)) {
                    pendingExercises.push(tasks.title);
                }
            });
        });
        console.log(`Os exercícios entregues são: ${solvedExercises}`);
        console.log(`Os exercícios entregues são: ${pendingExercises}`);
    });
}
exports.getExercises = getExercises;
//# sourceMappingURL=integrations3.js.map