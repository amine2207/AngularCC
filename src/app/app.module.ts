import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { JeuxComponent } from './jeux/jeux.component';
import { UpdateJeuComponent } from './update-jeu/update-jeu.component';
import { LaisserCommentaireComponent } from './laisser-commentaire/laisser-commentaire.component';
import { ListCommentairesComponent } from './list-commentaires/list-commentaires.component';
import { AddJeuComponent } from './add-jeu/add-jeu.component';
import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateCommentaireComponent } from './update-commentaire/update-commentaire.component';


@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    MenuComponent,
    AddGenreComponent,
    UpdateGenreComponent,
    JeuxComponent,
    UpdateJeuComponent,
    LaisserCommentaireComponent,
    ListCommentairesComponent,
    AddJeuComponent,
    UpdateCommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng5SliderModule,
    Ng2SearchPipeModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
