// // module.exports.test1 = function test1() {
// //     console.log("test1")
// // }

// // module.exports.test2 = function test2() {
// //     console.log("test2")
// // }

// COMMONJS SYNTAX

// module.exports = {
//     name: "Yunus",
//     test1: function() {
//         console.log("test1")
//     },
//     person: {
//         name: "Yunus",
//         mail: "ynsmrtpc@gmail.com"
//     }
// }

// ES6 SYNTAX
export const name = "Yunus"
export function test() {
    console.log("test fonskiyonu")
}
export class Person {
    static Test() {
        console.log("Person test")
    }
}
export const employee = {
    name: "Emre",
    salary: 5000
}

export default class Deneme {
    static deneme() {
        console.log("default deneme")
    }
}