interface HelloWorld {
    name: string,
    age: number,
    [key: string]: any
}

class MyWorld implements HelloWorld {
    name: "Hello World!"
    age: 15
}

console.log(new MyWorld().name)