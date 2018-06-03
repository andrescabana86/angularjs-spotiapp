import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { SubjectSubscriber } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'spotiapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private subscriptions:Subscription
  private releases:Object[] = []

  constructor(private _spotifyService:SpotifyService) {}

  ngOnInit() {
    this.subscriptions = this._spotifyService.getNewReleases()
    .subscribe(list => {
      this.releases = list
    })
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}
