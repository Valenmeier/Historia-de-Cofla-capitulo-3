class Celulares {
    constructor(color,peso,rdp,rdc,ram) {
        this.color=color;
        this.peso=peso;
        this.resolucionDePantalla=rdp;
        this.resolucionDeCamara=rdc;
        this.memoriaRam=ram;
        this.encendido=false
    }
    presionarBotonEncendido() {
        if(this.encendido==false) {
            alert(`Celular prendido`)
            this.encendido=true
        }else {
            alert(`Celular apagado`)
            this.encendido=false
        }
    }
    reiniciar() {
        if(this.encendido==true) {
            alert(`reiniciando celular`)
        }else {
            alert(`prende el celular para reiniciar`)
        }
    }
    tomarFoto() {
        alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`)
    }
    grabarVideo() {
        alert(`Grabando video en una resolución de: ${this.resolucionDeCamara}`)
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b>   <br>
        Tamaño: <b>${this.resolucionDePantalla}</b> <br>
        Resolución de cámara: <b>${this.resolucionDeCamara}</b>   <br>
        Resolución de video: <b>${this.resolucionDeCamara}</b>   <br>
        Ram: <b>${this.memoriaRam}</b> <br>
        `;
    }
}

const celular1= new Celulares(`Azul`,`150gr`,`5 pulgadas`,`full hd`,`1 gb`)
const celular2= new Celulares(`Rojo`,`155gr`,`5.4 pulgadas`,`hd`,`2 gb`)
const celular3= new Celulares(`Blanco`,`146gr`,`5.9 pulgadas`,`full hd`,`2 gb`)

// celular1.presionarBotonEncendido()
// celular1.tomarFoto()
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.presionarBotonEncendido()
document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`)