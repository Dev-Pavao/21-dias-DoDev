class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemoriaRam = memoriaRam
        this.Ssd = ssd
    }

    ExibirInformacoes(){
        console.log("Informações do Computador: ")
        console.log("Tipo: " + this.Tipo)
        console.log("Processador: " + this.Processador)
        console.log("Vídeo: " + this.Video)
        console.log("Armazenamento: " + this.Armazenamentormazenamento)
        console.log("Memoria RAM: " + this.MemoriaRam)
        console.log("Ssd: " + this.Ssd)
    }
}
let computador = new Computador("notebook","Intel i7","Integrado","500GB","16GB","False")
computador.ExibirInformacoes();
