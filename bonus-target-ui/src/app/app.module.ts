import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import { ListScreenContainerComponent } from './core/list-screen-container/list-screen-container.component';
import { EditScreenContainerComponent } from './core/edit-screen-container/edit-screen-container.component';
import { GetNamePipe } from './shared/pipes/get-name.pipe';
import { LoadingAnimationComponent } from './shared/ui/loading-animation/loading-animation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendHttpInterceptor } from './shared/backend-http-interceptor.service';
import { MenuComponent } from './theme/menu/menu.component';
import { MenuItemComponent } from './theme/menu/menu-item/menu-item.component';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListScreenContainerComponent,
    EditScreenContainerComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    ButtonModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendHttpInterceptor,
      multi: true
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
