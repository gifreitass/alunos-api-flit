import { iGrades, iStudent, iTask } from "./interfaces"

export async function getTasks(exercise: string) {
    let taskId: number = 0

    await fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks')
        .then(function (response) {
            return response.json()
        })
        .then(function (data: iTask[]) {
            data.forEach(tasks => {
                if (tasks.title === exercise) {
                    taskId = tasks.id
                }
            })
        })
    return taskId
}

export async function getGradesAndStudentId(taskId: number) {
    const number: string[] = []
    const studentId: string[] = []

    await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
        .then(function (response) {
            return response.json()
        })
        .then(function (data: iGrades[]) {
            data.forEach(grades => {
                if (grades.taskId === taskId.toString()) {
                    number.push(grades.number)
                    studentId.push(grades.studentId)
                }
            });
            console.log(number)
        })
    return studentId
}

export async function getStudentName(studentId: string[]) {
    const studentName: string[] = []

    await fetch('https://apigenerator.dronahq.com/api/g4C15xPP/students')
        .then(function (response) {
            return response.json()
        })
        .then(function (data: iStudent[]) {
            studentId.forEach(id => {
                data.forEach(students => {
                    if (students.id === parseInt(id)) {
                        studentName.push(students.Name)
                    }
                });
            });
        })
        console.log(studentName)
}