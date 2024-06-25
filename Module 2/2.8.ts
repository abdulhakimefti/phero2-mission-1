{
    //Promise 
    const createPromise = ():Promise<string> =>{
        const data:string ='';
        return new Promise<string>((resolve,reject)=>{
            if(data){
                resolve(data);
            }
            else{
                reject("Failed to load data");
            }
        })
    }

    const showData = async(): Promise<string> =>{
        const data:string = await createPromise()
        return data;
    }
    console.log(showData())
}