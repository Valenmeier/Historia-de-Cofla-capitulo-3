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
class CelularAltaGama extends Celulares {
    constructor(color,peso,rdp,rdc,ram,rdce) {
        super(color,peso,rdp,rdc,ram)
        this.resolucionDeCamaraExtra= rdce
    }
    grabarVideoLento() {
        alert(`Estas grabando en camara lenta`)
    }
    reconocimientoFacial() {
        alert(`Iniciando reconocimiento faicial`)
    }
    infoAltaGama() {
        return this.mobileInfo()+`Resolución de camara extra: <b>${this.resolucionDeCamaraExtra}</b> <br>`
    }
}




// const celular1= new Celulares(`Azul`,`150gr`,`5 pulgadas`,`full hd`,`1 gb`)
// const celular2= new Celulares(`Rojo`,`155gr`,`5.4 pulgadas`,`hd`,`2 gb`)
// const celular3= new Celulares(`Blanco`,`146gr`,`5.9 pulgadas`,`full hd`,`2 gb`)

// document.write(`
//     ${celular1.mobileInfo()} <br>
//     ${celular2.mobileInfo()} <br>
//     ${celular3.mobileInfo()} <br>
// `)

// celular1.presionarBotonEncendido()
// celular1.tomarFoto()
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.presionarBotonEncendido()

const celular1= new CelularAltaGama(`verde`,`130gr`,`5.2 pulgadas`,`4k`,`3gb`,`Full hd`)
const celular2= new CelularAltaGama(`verde`,`125gr`,`5.4 pulgadas`,`2k`,`4gb`,`hd`)

document.write(`
    ${celular1.infoAltaGama()} <br>
    ${celular2.infoAltaGama()} <br>
`)