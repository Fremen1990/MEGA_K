class Test{

    descruturization(){
        console.log("Testing descruturization...");
        let ar : number[]=[];
        const start = + new Date();
        for(let i=0; i<100000;i++){
            ar=[...ar, i];
        }
        const end = + new Date();
        console.log(`Testing descruturization took ${end-start} ms.`)
    }

 push(){
     console.log("Testing push...");
     const ar=[];
     const start = + new Date();
     for(let i=0; i<100000;i++){
         ar.push(i);
     }
     const end = + new Date();
     console.log(`Testing push took ${end-start} ms.`)
 }

    last(){
        console.log("Testing last...");
        const ar=[];
        const start = + new Date();
        for(let i=0; i<100000;i++){
            ar[ar.length]=i;
        }
        const end = + new Date();
        console.log(`Testing last took ${end-start} ms.`)
    }

}

const testSuite = new Test();
testSuite.push();
testSuite.descruturization();
testSuite.last();
