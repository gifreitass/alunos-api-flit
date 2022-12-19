import { getExercisesName, getStudentNameById, getTaskIdAndGrade } from "./integrations1"
import { getGrade, getGradeAverage } from "./integrations2"
import { getExercises, getTaskId } from "./integrations3"
import { getGradesAndStudentId, getStudentName, getTasks } from "./integrations4"

async function entregasAluno(id: number){
    await getStudentNameById(id)

    const taskId = await getTaskIdAndGrade(id)

    await getExercisesName(taskId)
}

// console.log(entregasAluno(4))

async function mediaNotas(id: number){
    await getStudentNameById(id)

    const grades = await getGrade(id)

    await getGradeAverage(grades)
}

// console.log(mediaNotas(4))

async function tarefasPendentes(id: number) {
    const taskId = await getTaskId(id)

    await getExercises(taskId)
}

// console.log(tarefasPendentes(5))

async function alunosEmDia(exercise: string) {
    const taskId = await getTasks(exercise)

    const studentId = await getGradesAndStudentId(taskId)

    await getStudentName(studentId)
}

console.log(alunosEmDia('Colocando em prática 2.1'))