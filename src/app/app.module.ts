import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

// Routes
import { APP_ROUTES } from './app.routes'


import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { ArtistComponent } from './components/artist/artist.component'
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component'
import { SpotifyService } from './services/spotify.service'
import { AuthGuardService } from './services/auth-guard.service'
import { AuthService } from './services/auth.service';
import { SearchFormComponent } from './components/search-form/search-form.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [
    SpotifyService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
