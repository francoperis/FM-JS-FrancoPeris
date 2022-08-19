class Persona {
    constructor(nombre, edad , genero , direccion){
        this.nombre = nombre,
        this.edad = edad,
        this.genero = genero,
        this.direccion= direccion
    }

    saludar(){
        console.log('Hola... !')
    }

    presentarme(){
        if(this.genero === 'M' || this.genero === 'Masculino' || this.genero === 'masculino' || this.genero === 'm'){
            this.genero = 'Sr.',
            console.log(`
                        Hola... ! mi nombre es ${this.genero} ${this.nombre} tengo ${this.edad} , vivo en la direccion ${this.direccion},
                        
            `)}
        else if (this.genero === 'F' || this.genero === 'Femenino' || this.genero === 'femenino' || this.genero === 'f'){
                this.genero = 'Srita.',
                console.log(`
                            Hola... ! mi nombre es ${this.genero} ${this.nombre} tengo ${this.edad} , vivo en la direccion ${this.direccion},
                            
                `)
        }else{
                this.genero = 'Srx.',
                console.log(`
                            Hola... ! mi nombre es ${this.genero} ${this.nombre} tengo ${this.edad} , vivo en la direccion ${this.direccion},
                            
                `)
        }
    }

}

class Alumno extends Persona{
    constructor(nombre, edad , genero , direccion, matricula, carrera){
        super(nombre, edad , genero , direccion),
        this.matricula = matricula,
        this.carrera = carrera
    }
}


class Maestro extends Persona{
    constructor(nombre, edad , genero , direccion,materias){
        super(nombre, edad , genero , direccion),
        this.materias= materias
    }
}

let alumno1 = new Alumno('Diego', 18 , 'Masculino' , 'XXXXXXXXXXX', '2047884158', 'Analista en Herencias')  
let alumno2 = new Alumno('Dominiqui', 22 , 'F' , 'XXXXXXXXXXX', '2555587455', 'Junior JS')  

let maestro1 = new Maestro('Christian', 34 , 'M' , 'YYYYYYYYYYY', ['Matematica', 'Lengua y Literatura', 'Fisica'])
let maestro2 = new Maestro('Melisa', 45 , 'Femenino' , 'YYYYYYYYYYY', ['Matematica', 'Lengua y Literatura', 'Fisica'])


alumno1.presentarme()
alumno2.presentarme()
maestro1.presentarme()
maestro2.presentarme()