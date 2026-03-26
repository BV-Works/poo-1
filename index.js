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

console.log("COMBATE");

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


const civilPlanes = ["assets/civil-plane-1.webp", "assets/civil-plane-2.jpg"];
const civilHelicopters = ["assets/civil-heli-1.jpg", "assets/civil-heli-2.jpg"];

const militaryPlanes = ["assets/combat-plane-1.jpeg", "assets/combat-plane-2.jpg"];
const militaryHelicopters = ["assets/combat-heli-1.jpeg", "assets/combat-heli-2.jpg"];


class Gallery {
  constructor(civil, military) {
    this.civil = civil;
    this.military = military;
  }

  getRandomCivil() {
    const index = Math.floor(Math.random() * this.civil.length);
    return this.civil[index];
  }

  getRandomMilitary() {
    const index = Math.floor(Math.random() * this.military.length);
    return this.military[index];
  }

  getAll() {
    return [...this.civil, ...this.military];
  }
}

class Painter {
  constructor() {
    this.createGallery();
  }

  createGallery() {
    const section = document.createElement("section");
    section.classList.add("gallery");
    document.body.appendChild(section);

    this.gallery = section;
  }

  createImageTag(url) {
    const picture = document.createElement("picture");
    const img = document.createElement("img");

    img.src = url;
    img.alt = "Imagen de aviación";

    picture.appendChild(img);

    return picture;
  }

  paintSingleImage(url) {
    const element = this.createImageTag(url);
    this.gallery.appendChild(element);
  }

  paintMultipleImages(images) {
    images.forEach((url) => {
      const element = this.createImageTag(url);
      this.gallery.appendChild(element);
    });
  }
}


const civil = [...civilPlanes, ...civilHelicopters];
const military = [...militaryPlanes, ...militaryHelicopters];

const gallery = new Gallery(civil, military);

const painter = new Painter();

painter.paintMultipleImages(gallery.getAll());

painter.paintSingleImage(gallery.getRandomCivil());
painter.paintSingleImage(gallery.getRandomMilitary());