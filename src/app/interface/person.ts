export interface Person {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
}

export const consumers: Person[] = [
    {
        firstName: 'A',
        lastName: 'B',
        gender: 'Male',
        age: 25
    },
    {
        firstName: 'X',
        lastName: 'Y',
        gender: 'Male',
        age: 30
    },
    {
        firstName: 'J',
        lastName: 'K',
        gender: 'Female',
        age: 25
    },
]