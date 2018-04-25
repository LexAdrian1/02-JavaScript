console.log('Hellodaa');
var adios = 'Adios';
//Duck typing
var edad;
var nombre;
var casado;
var fechaNacimiento = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var adrian = new Usuario('Adrian', false, 28);
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imprimirUsuario = function (saludo) {
        //  Template Strings
        return saludo + ". Minombre es " + this.nombre + ",estoy casado " + this.casado + ", mi edad es " + this._edad;
    };
    return UsuarioDos;
}());
var lexxarDos = new UsuarioDos('adrian', false, 20);
console.log(lexxarDos);
console.log(lexxarDos.imprimirUsuario('Hola soy koku'));
var carla = {
    nombre: 'Adrian',
    casado: false,
    edad: 28
};
