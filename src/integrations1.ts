import { iGrades, iStudent, iTask } from "./interfaces";

export async function getStudentNameById(id: number){
    await fetch('https://apigenerator.dronahq.com/api/g4C15xPP/students')
        .then(function (response){
            return response.json()
        })
        .then(function (data: iStudent[]){
            data.forEach(students => {
                if(students.id === id){
                    const studentName = students.Name
                    console.log(studentName)
                    return studentName
                }
            });
        })
}

export async function getTaskIdAndGrade(id: number){
    let taskId: string[] = []
    let number: string[] = []

    await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
        .then(function (response){
            return response.json()
        })
        .then(function (data: iGrades[]){
            data.forEach(grades => {
                if(grades.studentId === id.toString()){
                        taskId.push(grades.taskId)
                        number.push(grades.number)
                    }
            });
            console.log(number)
        })

    return taskId
}

export async function getExercisesName(taskId: string[]){
    let exercises: string[] = []

    await fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks')
        .then(function (response){
            return response.json()
        })
        .then(function (data: iTask[]){
            taskId.forEach(id => {
                data.forEach(tasks => {
                    if(tasks.id === parseInt(id)){
                        exercises.push(tasks.title)
                    }
                });
            });
            console.log(exercises)
        })

    return exercises
}
