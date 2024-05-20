// Union Type 

let tax: number | string = 10

tax = "Tax"


let ReqStatus: "pending" | "complete" | "success" = "success"

ReqStatus = "pending"

ReqStatus = "complete"


//###########Typ Any#################

let notSure: any = 4

notSure = "maybe a string instead"

let Random;

const books = ["Book", "Book2", "Book3"]

let foundBook: string | undefined;

for (let book of books) {
    if (book === "Book2") {
        foundBook = book;
        break;
    }
    else {
        foundBook = "Not Found"
    }
}

//console.log(foundBook?.length)
//####################Arays #################


let prices: number[] = [50, 40, 30]

let array: [] = []

let names = ["Said", "Edaa", 1]

let temperatures: number[] = [50, 25, 30]

let colors: string[] = ["red", "green", "yellow"]

let mixed: (string | number)[] = ["red", "green", 50]


//####################Object #################


let car: { brand: string, year: number } = {
    brand: "toyota", year: 2022
}

let car1: { brand: string, year: number } = {
    brand: "ford", year: 2022
}
let car2 = {
    brand: "BMW"
}

let items: { brand: string, year?: number }[] = [car1, car2, car]

items.push({
    brand: "Volks"
})

//console.log(items)


//#################### Function Parameters #################


function sayHi(name: string) {
    //console.log(name)
}

sayHi("Said")


//#################### Function Returns #################


function calculate(price: number): number {
    return price * 10
}

const calculated = calculate(10)


/*  Function */


let allnames: string[] = ["Volks", "Standard", "was"]


function isNameInList(name: string): boolean {

    return allnames.includes(name)
}

let nameToCheck = "Said"


if (isNameInList(nameToCheck)) {
    // console.log(`${nameToCheck} is in the list`)
}
else {
    //console.log(`${nameToCheck} is not in the list`)
}


function claculatePrice(price: number, discount?: number): number {
    return price - (discount || 0)
}

let priceAfterDiscount = claculatePrice(100, 20)

//console.log(`${priceAfterDiscount}`)
/*Default Parameter */

function calcutleScore(score: number, penaltyPoint: number = 0): number {
    return score - penaltyPoint
}

//let scoreAfterPenalty = calcutleScore(100, 20)

//let scoreWithoutPenalty = calcutleScore(300)


function sum(msg: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2)
    //console.log("🚀 ~ sum ~ doubled:", doubled)

    let total = numbers.reduce((prev, curr) => {
        return prev + curr
    }, 0)

    return `${msg} ${total}`
}

let result = sum("Text", 1, 2, 3, 4)
//console.log(result)


/*********** VOID */


function logMsg(msg: string): void {
    console.log(msg)
}

//logMsg("Hello Said From Void Function")


/*********** Type Guards */

function processInput(parem: string | number) {
    if (typeof parem === "string") console.log(parem.toUpperCase())
    if (typeof parem === "number") console.log(parem * 2)
}

//processInput("hello")
//processInput(10)


function cerateEmploy({ id }: { id: string }): { id: number, isActive: boolean } {
    return {
        id: +id,
        isActive: true
    }
}

//console.log(cerateEmploy({ id: "123" }))

// ############# Excess Property Check


function createStudent(student: { id: number, name: string }): void {
    //  console.log(student)
}

const newStudent = {
    id: 123,
    name: "Said",
    email: "email@email"
}
createStudent(newStudent)
//createStudent({id : 1 , name : "Edaa" , email : "email@email" })


function processData(pram1: string | number, { reverse }: { reverse: boolean } = { reverse: false }): string | number {
    if (typeof pram1 === "string") {
        return reverse ? pram1.split("").reverse().join("") : pram1.toUpperCase()
    }
    else {
        return pram1 * 2
    }
}

//console.log("🚀 ~ processData:",processData("Hello", { reverse: true }))


// ############# Type Alias
type User = {
    id: StringORNumber,
    name: string,
    isActive: boolean
}

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
};
const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser(user: User): User {
    //  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
    return user;
}

type StringORNumber = string | number

type Thema = "dark" | "light"

let thema: Thema
thema = "dark"



type Employee = {
    id: number,
    name: string,
    department: string
}
type Manager = {
    id: number,
    name: string,
    employees: Employee[]
}

type Staff = Employee | Manager

function printStaffDetails(staff: Staff) {
    if ("employees" in staff) return `${staff.name} is a manager of ${staff.employees.length} employees.`
    else return `${staff.name} is not a manager`

}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(bob);



// ############# Intersection Type 

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
    id: 2,
    name: 'How to Cook a Dragon',
    price: 15,
};

const book2: Book = {
    id: 3,
    name: 'The Secret Life of Unicorns',
    price: 18,
};

const discountedBook: DiscountedBook = {
    id: 4,
    name: 'Gnomes vs. Goblins: The Ultimate Guide',
    price: 25,
    discount: 0.15,
};

// ############# Interface Type

interface BookType {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    printTitle(): void
}

const newBook: BookType = {
    isbn: 123,
    title: "deep work",
    author: "Said",
    genre: "The Ultimate Guide",
    printTitle() {
        //        console.log(this.title)
    },
}
newBook.printTitle()



interface Computer {
    readonly id: number,
    brand: string,
    ram: string,
    storage?: string
    upgradeRam(somVal: number): number
}

const obj: Computer = {
    id: 123,
    brand: "Apple",
    ram: "16GB",
    upgradeRam(somVal) {
        return somVal * 2
    }
}

obj.storage = "265"

//console.log(obj)

interface Person {
    name: string,
    getDetails(): string
}


interface DogOwner {
    dogName: string,
    getDogDetails(): string
}

interface Person {
    age: number,
}
const person: Person = {
    age: 45,
    name: "Said",
    getDetails() {
        return this.name
    }
}

interface Employees extends Person {
    employeeId: number,
}


const employee: Employees = {
    name: "Said",
    age: 45,
    getDetails() {
        return this.name
    },
    employeeId: 123
}

interface Managers extends Person, DogOwner {
    managePepole(): void
}

const Manager: Managers = {
    name: "Manager",
    age: 45,
    getDetails() {
        return this.name
    },
    dogName: "ManagerDog",
    managePepole() {

    },
    getDogDetails() {
        return this.dogName
    }
}


interface NewPerson {
    name: string,
}

interface NewDogOwner extends NewPerson {
    nameTheDog: string
}

interface NewManager extends NewPerson {
    managePepole(): void
    delegateTasks(): void
}





function getEmp(): NewDogOwner | NewManager | NewPerson {
    let nam = 5
    if (nam < 5) {
        return {
            name: "Said"
        }
    }
    if (nam > 5) return { nameTheDog: "DOG", name: "DogOwner" }

    else (nam === 5)
    return {
        name: "Manager", managePepole() {
            console.log("Manager of Pepole")
        },
        delegateTasks() {
            console.log("Deleate Tasks")
        }
    }
}

const getEmployee: NewDogOwner | NewManager | NewPerson = getEmp();


//##### type predicate 
function isManager(obj: NewDogOwner | NewManager | NewPerson): obj is NewManager {
    return "managePepole" in obj
}

if (isManager(getEmployee)) {
    //   getEmployee.delegateTasks()
}



/*##################### Tuples ################# */

let per: [string, number] = ["jon", 1]

let date: readonly [number, number, number] = [12, 12, 12]

/*####################enum type #################*/


enum ServerResStatus {
    success = 200,
    error = 500
}


interface ServerRes {
    result: ServerResStatus,
    date: string[]
}


function getServer(): ServerRes {
    return {
        result: ServerResStatus.success,
        date: ["12", "12", "12"]
    }
}
//console.log(getServer())

/*#################### Reverse Mapp #################*/

Object.values(ServerResStatus).forEach((val) => {
    //  console.log(val)
})


enum UserRole {
    Admin,
    Manager,
    Employee
}

type NewUser = {
    id: number,
    name: string,
    role: UserRole,
    contact: [string, string]
}

function createNewUser(obj: NewUser): NewUser {
    return obj
}

let rsl: NewUser = createNewUser({
    id: 1,
    name: "Said",
    role: UserRole.Admin,
    contact: [
        "email",
        "phone"
    ]
})

//console.log(rsl)

/*********************Type Assertion************************/

let somValue: any = "This is a string"

let strLength: number = (somValue as string).length


type Bird = {
    name: string
}

let Bird1 = '{"name" : "Bird1"}'

let birdobj = JSON.parse(Bird1) as Bird

//console.log(birdobj)


/*********************Type Unknow************************/

let unknowValue: unknown;

unknowValue = "This is a string"
unknowValue = ["1", 1]
unknowValue = {
    name: "Said",
    age: 45
}


/*********************Type Never************************/


let someNever: never

type ThemaMode = "light" | "dark"

function setThema(thema: ThemaMode) {
    if (thema === "light") {
        return "light"
    } else {
        return "dark"
    }
}

/*********************Modules************************/


import SetStudent, { SayHello, Newperson } from "./action"

SayHello("")

Newperson
SetStudent


try {
    throw new Error("This is Error ")
} catch (error) {
    if (error instanceof Error) {
        console.log(error);
    }
}

function checkInput(input: Date | string): string {
    return "Was"
}


type Increment = {
    amount: number
    type: "Increment"
}

type Discremnt = {
    amount: number
    type: "Discremnt"
}

type Action = Increment | Discremnt

function reducer(state: number, action: Action) {
    switch (action.type) {
        case "Increment":
            return state + action.amount
        case "Discremnt":
            return state - action.amount
        default:
            throw new Error("unexpected action")
    }
}


const newState = reducer(15, { amount: 5, type: "Increment" })

console.log(newState)


/*********************Generics************************/

function genericFunction<T>(arg: T): T {
    return arg
}

const someStringValue = genericFunction<string>("someString")

const someNeverValue = genericFunction<number>(5)


interface CenerciInterface<T> {
    value: T;
    getValue: () => T;
}
const genericString: CenerciInterface<string> = {
    value: "someString",
    getValue() {
        return this.value
    }
}


async function someFunc(): Promise<string> {
    return "someString"
}


function createArray<T>(l: number, value: T): Array<T> {
    let result: Array<T> = []
    result = Array(l).fill(value)
    return result
}

//console.log(createArray(5, "SAID"));
//console.log(createArray(5, 15));


function pair<T, U>(pram1: T, pram2: U): [T, U] {
    return [pram1, pram2]
}

let Newresult = pair(123, "5")

//console.log(Newresult);


function prossvalue<T extends string>(value: T): T {
    return value
}

//console.log(prossvalue("Said"));

type Car = {
    brand: string;
    model: string;
};

const cars: Car = {
    brand: 'ford',
    model: 'mustang',
};

type Product = {
    name: string;
    price: number;
};

const product: Product = {
    name: 'shoes',
    price: 1.99,
};

type Student = {
    name: string;
    age: number;
};

const student: Student = {
    name: 'peter',
    age: 20,
};


function printname<T extends { name: string }>(input: T): void {
    console.log(input);
}
printname(student)
//printname(product)
//printname(cars)

interface StoreData<T> {
    data: T[]

}

const storeNumbers: StoreData<number> = {
    data: [1, 2, 3, 4, 5, 6, 7, 8]
}

const rondonStuff: StoreData<any> = {
    data: ["random", 5]
}


/* Fetch Data #######################################*/


const url = 'https://www.course-api.com/react-tours-project';

/* async function fetchData(url: string) {
    try {
        const response = await fetch(url);

        // Check if the request was successful.
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        const errMsg =
            error instanceof Error ? error.message : 'there was an error...';
        console.error(errMsg);
        // throw error;
        return [];
    }
} */

/* const tours = await fetchData(url);
tours.map((tour: any) => {
    console.log(tour.name);
});
 */

/*****************Setup the Type  */


type Tours = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string
}

async function fetchData(url: string): Promise<Tours[]> {
    try {
        const response = await fetch(url);

        // Check if the request was successful.
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Tours[] = await response.json();

        return data;

    } catch (error) {
        const errMsg =
            error instanceof Error ? error.message : 'there was an error...';
        console.error(errMsg);
        // throw error;
        return [];
    }
}
const tours = await fetchData(url);
tours.map((tour: Tours) => {
    //console.log(tour.name);
});


/***********************************Classes  Intro*/


class BookClass {
    readonly title: string;
    author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

const deepWork = new BookClass("deep-work", "deep-work")
console.log(deepWork.title)