import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavegadorSuperiorComponent } from './navegador-superior/navegador-superior.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostComponent } from './post/post.component';
import { PostInputComponent } from './post-input/post-input.component';
import { routing } from './app.routing';
import { PostarComponent } from './postar/postar.component';
import { PostService } from './post/post.service';


@NgModule({
  declarations: [
    AppComponent,
    NavegadorSuperiorComponent,
    LinhaDoTempoComponent,
    PostComponent,
    PostInputComponent,
    PostarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
