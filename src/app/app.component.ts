import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Blog_Noticias';
  oscuro!: Boolean

  cambiarFondoPadre(event: Boolean){
    this.oscuro=event;
    if(this.oscuro){
      document.body.className="oscuro"
    }
    else{
      document.body.className="claro"
    }
  }
}
