console.log('Hellodaa');
const adios = 'Adios';
//Duck typing

let edad: number;
let nombre: string;
let casado: boolean;
let fechaNacimiento: Date = new Date();

class Usuario {
    nombre: string;
    private casado: boolean;
    protected edad: number;
    constructor(nombre: string, casado: boolean, edad: number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}
let adrian: Usuario = new Usuario('Adrian', false, 28);

class UsuarioDos {
    constructor(public nombre:string,private _casado:boolean,protected _edad:number){
    }
    get casado(){
        return this._casado;
    }
    set casado(casado: boolean){
        this._casado = casado;
    }
    public imprimirUsuario(saludo: string): string{
        //  Template Strings
        return `${saludo}. Minombre es ${this.nombre},estoy casado ${this.casado}, mi edad es ${this._edad}`;
    }
}
let lexxarDos = new UsuarioDos( 'adrian',false,20);
console.log(lexxarDos);
console.log(lexxarDos.imprimirUsuario('Hola soy koku'));
let carla: UsuarioTres={
    nombre: 'Adrian',
    casado: false,
    edad: 28
};
interface  UsuarioTres {
    nombre: string;
    casado?: boolean; //Opcional
    edad: number;
    imprimir?(saludo: string):string;
}
