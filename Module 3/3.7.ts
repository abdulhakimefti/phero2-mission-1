{
    //static
    class Counter{
        static count: number= 0;
        increment(){
            return(Counter.count= Counter.count+1)
        }
        decrement(){
            return(Counter.count= Counter.count-1)
        }
    }

    const instance1 = new Counter()
    const instance2 = new Counter()
    instance1.increment()
    instance1.increment()
    instance2.increment()
    instance2.increment()
    console.log(Counter.count)
    // console.log(instance2.count)
}