export class Noticias {

    private titulo: string;
    private contenido: string;
    private fechaCreacion: Date;

    constructor(titulo: string,contenido: string,fechaCreacion: Date){
        this.titulo=titulo
        this.contenido=contenido
        this.fechaCreacion=fechaCreacion
    }

}
