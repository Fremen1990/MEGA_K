interface Person {
    name: string;
    points: number;
}

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
        points: 0,
    },
];

function incPoints(obj: Person): number {
    const incrementedWith: number=obj.points++;
    return incrementedWith;
}

function totalPoints(ar: Person[]): number {
    return ar.reduce((prev, curr) => prev + curr.points, 0)
}

// What if there is no people in the array??

function personWithMostPoints(ar: Person[]): Person {

    return ar.reduce((prev, curr)=>{
        if(prev.points < curr.points){
            return curr;
        }else return  prev;
    })
}
console.log(incPoints(data[1]));
console.log(totalPoints(data));
console.log(personWithMostPoints(data));
