export class Noticia {

    private titulo: string;
    private contenido: string;
    private fechaCreacion: Date;
    private id: Number;
    private static cont: number=0;

    constructor(titulo: string,contenido: string,fechaCreacion: Date){
        this.titulo=titulo
        this.contenido=contenido
        this.fechaCreacion=fechaCreacion
        this.id=Noticia.cont
        Noticia.cont++;
    }

    getid(): Number{
        return this.id;
    }

}
