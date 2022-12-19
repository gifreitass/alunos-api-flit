import { iGrades } from "./interfaces";

export async function getGrade(id: number){
    let number: string[] = []

    await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
        .then(function (response){
            return response.json()
        })
        .then(function (data: iGrades[]){
            data.forEach(grades => {
                if(grades.studentId === id.toString()){
                        number.push(grades.number)
                    }
            });
        })

    return number
}

export async function getGradeAverage(grades: string[]) {
    const numberGrades: number[] = []
    grades.forEach(grade => {
        numberGrades.push(parseInt(grade))
    });

    let sumNumberGrades = 0
    numberGrades.forEach(grade => {
        sumNumberGrades += grade / numberGrades.length
    });

    console.log(sumNumberGrades)
}