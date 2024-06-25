{
    //constraints

    const addCourseStudent = <T extends {id:number;name:string;email:string}>(student:T) =>{
        const course = "Next Level Web Development";
        return {
            ...student,course
        }
    }

    const student1 = addCourseStudent<{id:number;name:string;email:string;devtype:string;}>({id:55,name:"Efti",email:"efti@gmail.com",devtype:'backend'})
    
    console.log(student1)
}