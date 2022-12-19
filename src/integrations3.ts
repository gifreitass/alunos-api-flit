import { iGrades, iTask } from "./interfaces";

export async function getTaskId(id: number) {
    let taskId: string[] = []

    await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
        .then(function (response) {
            return response.json()
        })
        .then(function (data: iGrades[]) {
            data.forEach(grades => {
                if (grades.studentId === id.toString()) {
                    taskId.push(grades.taskId)
                }
            });
        })

    return taskId
}

export async function getExercises(taskId: string[]) {
    const solvedExercises: string[] = []
    const pendingExercises: string[] = []

    let pendingExercisesId: string[] = []
    const exercisesId: string[] = []

    await fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks')
        .then(function (response) {
            return response.json()
        })
        .then(function (data: iTask[]) {
            data.forEach(tasks => {
                taskId.forEach(id => {
                    if (tasks.id === parseInt(id)) {
                        solvedExercises.push(tasks.title)
                    }
                })
                exercisesId.push(tasks.id.toString())
            });

            pendingExercisesId = exercisesId.filter(exercisesId => !taskId.filter(id => exercisesId == id).length)
            pendingExercisesId.forEach(id => {
                data.forEach(tasks => {
                    if (tasks.id === parseInt(id)) {
                        pendingExercises.push(tasks.title)
                    }
                });
            });

            console.log(`Os exercícios entregues são: ${solvedExercises}`)
            console.log(`Os exercícios entregues são: ${pendingExercises}`)
        })
}