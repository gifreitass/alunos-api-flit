"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const integrations1_1 = require("./integrations1");
const integrations2_1 = require("./integrations2");
const integrations3_1 = require("./integrations3");
const integrations4_1 = require("./integrations4");
async function entregasAluno(id) {
    await (0, integrations1_1.getStudentNameById)(id);
    const taskId = await (0, integrations1_1.getTaskIdAndGrade)(id);
    await (0, integrations1_1.getExercisesName)(taskId);
}
// console.log(entregasAluno(4))
async function mediaNotas(id) {
    await (0, integrations1_1.getStudentNameById)(id);
    const grades = await (0, integrations2_1.getGrade)(id);
    await (0, integrations2_1.getGradeAverage)(grades);
}
// console.log(mediaNotas(4))
async function tarefasPendentes(id) {
    const taskId = await (0, integrations3_1.getTaskId)(id);
    await (0, integrations3_1.getExercises)(taskId);
}
// console.log(tarefasPendentes(5))
async function alunosEmDia(exercise) {
    const taskId = await (0, integrations4_1.getTasks)(exercise);
    const studentId = await (0, integrations4_1.getGradesAndStudentId)(taskId);
    await (0, integrations4_1.getStudentName)(studentId);
}
console.log(alunosEmDia('Colocando em prática 2.1'));
//# sourceMappingURL=index.js.map