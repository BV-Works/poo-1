class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  obtDetalles() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Género: ${this.genero}`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }

  registrar(curso = this.curso, grupo = this.grupo) {
    this.curso = curso;
    this.grupo = grupo;
    console.log(`Estudiante registrado: ${this.nombre}-${this.edad}-${this.genero}`);
    console.log(`Curso: ${this.curso}`);
    console.log(`Grupo: ${this.grupo}`);
  }
}

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }

  asignar(asignatura = this.asignatura , nivel = this.nivel) {
    this.asignatura = asignatura;
    this.nivel = nivel;
    console.log(`Profesor asignado: ${this.nombre}-${this.edad}-${this.genero}`);
    console.log(`Asignatura: ${this.asignatura}`);
    console.log(`Nivel: ${this.nivel}`);
  }
}

const persona1 = new Persona("Carlos", 30, "Masculino");

const estudiante1 = new Estudiante("Ana", 20, "Femenino", "2º DAW", "A");

const profesor1 = new Profesor("Luis", 45, "Masculino", "Programación", "Avanzado");


console.log("PERSONA");
persona1.obtDetalles();

console.log("ESTUDIANTE");
estudiante1.obtDetalles();
estudiante1.registrar();
estudiante1.registrar("backend", "B");
console.log("PROFESOR");
profesor1.obtDetalles();
profesor1.asignar();
profesor1.asignar("BBDD", "C");


class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }

  attack() {
    return this.power;
  }

  defend(damage) {
    this.life -= damage;
    console.log(`Vida restante: ${this.life}`);
  }
}

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkColaCao() {
    this.power += 10;
    console.log(`Maya bebe Cola Cao → Poder: ${this.power}`);
  }
}

class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkNesquik() {
    this.life += 10;
    console.log(`Azteca bebe Nesquik → Vida: ${this.life}`);
  }
}


const maya = new Maya(100, 20);
const azteca = new Aztec(100, 25);

console.log("=== COMBATE ===");

// Azteca bebe Nesquik
azteca.drinkNesquik();

// Maya bebe Cola Cao
maya.drinkColaCao();

// Maya ataca a Azteca
console.log("Maya ataca!");
azteca.defend(maya.attack());

// Azteca ataca a Maya
console.log("Azteca ataca!");
maya.defend(azteca.attack());