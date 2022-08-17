class Mathematic {
    sqrt(x){
        console.log(x*x);
    }
    static cube(x){
        console.log(x*x*x);
    }
}
Mathematic.cube(3); // static olduğu için direkt bu şekilde kullanabiliyoruz. new Mathematic şeklinde kullanamıyoruz.

const math = new Mathematic(); // static olmadığı için bu şekilde kullanıyoruz.
math.sqrt(4);

