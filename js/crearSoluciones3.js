class App {
    constructor(descargas,puntuacion,peso) {
        this.descargas=descargas
        this.puntuacion=puntuacion
        this.peso=peso
        this.iniciarApp=false
        this.instalada=false
    }
    
    instalar() {
        if(this.instalada==false) {
            this.instalada=true
            alert(`La app se ha instalado`)
        }
    }
    desinstalar() {
        if(this.instalada==true) {
            this.instalada=false
            alert(`La app se ha desinstalado`)
        }
    }
    abrir(){
        if (this.iniciarApp==false && this.instalada==true) {
            this.iniciarApp=true
            alert(`App iniciada`);
        }
    }
    cerrar(){
        if (this.iniciarApp==true && this.instalada==true) {
            this.iniciarApp=false
            alert(`App cerrada`);
        }
    }
    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b> </br>
        Puntuacion: <b>${this.puntuacion}</b> </br>
        Peso: <b>${this.peso}</b> </br>
        `
    }

}

const app1= new App(`16.000`,`5 estrellas`,`900 mb`)
const app2= new App(`1.000`,`3 estrellas`,`200 mb`)
const app3= new App(`6.000`,`2 estrellas`,`800 mb`)
const app4= new App(`4.000`,`4 estrellas`,`100 mb`)
const app5= new App(`8.000`,`4 estrellas`,`600 mb`)
const app6= new App(`20.000`,`3.5 estrellas`,`500 mb`)
const app7= new App(`100.000`,`5 estrellas`,`2000 mb`)

document.write(`
    ${app1.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
`)
// app1.instalar()
// app1.abrir()
// app1.cerrar()
// app1.desinstalar()