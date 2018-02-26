import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { ModelComponent } from './model/model.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    ModelComponent,
    ModalComponent,
    HeaderComponent,
    ListComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
