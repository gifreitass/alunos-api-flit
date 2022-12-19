export interface iStudent{
    Email: string,
    PhoneNumber: string,
    Name: string,
    Date: string,
    id: number
}

 export interface iTask{
    title: string,
    module: string,
    id: number
}

export interface iGrades{
    studentId: string,
    taskId: string,
    number: string,
    id: number
}