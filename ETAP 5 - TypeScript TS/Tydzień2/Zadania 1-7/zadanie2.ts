interface Person {
    name: string;
    points: number;
}

// @ts-ignore
const data: Person[] = [
    {
        name: 'Anna',
        points: 1000,
    },
    {
        name: 'Krzysztof',
        points: 500,
    },
    {
        name: 'Ola',
        points: 2500,
    },
    {
        name: 'Marek',
        points: 5000,
    },
];

// @ts-ignore
const incPoints = (obj: Person): number => obj.points++;

// @ts-ignore
function totalPoints(ar: Person[]): number {
    return ar.reduce((prev, curr) => prev + curr.points, 0)
}

// What if there is no people in the array??

// @ts-ignore
function personWithMostPoints(ar: Person[]): Person | null {

    //FUNCTION WITH REDUCE
    // if(ar.length===0){return null}
    // return ar.reduce((prev, curr)=>{
    //     if(prev.points < curr.points){
    //         return curr;
    //     }else return  prev;
    // })

    // SHORT HAND FUNCTION WITH REDUCE
    // if(ar.length===0){return null}
    // return ar.reduce((prev, curr) =>
    //     prev.points < curr.points ? curr : prev
    // )

    // SORT FUNCTION
    // return ar.sort((a: Person, b: Person) => {
    //     if (a.points < b.points) {
    //         return 1
    //     } else if (a.points > b.points) {
    //         return -1
    //     } else {
    //         return 0
    //     }
    // })[0];

    //    SORT FUNCTION SHORTHAND
    return ar.sort((a, b) => b.points - a.points)[0] ?? null;
}

console.log(incPoints(data[1]));
console.log(totalPoints(data));
console.log(personWithMostPoints(data));
