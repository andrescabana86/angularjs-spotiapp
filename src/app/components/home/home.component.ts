import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'spotiapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _spotifyService:SpotifyService) {}

  ngOnInit() {
    debugger
    this._spotifyService.getNewReleases()
    .then(data => {
      data.subscribe(datos => {
        debugger
      })
    }, error => {
      debugger
    })
  }

}
