import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

  private spotifyApiUri = 'https://api.spotify.com/v1'
  private releases = new BehaviorSubject<Object[]>([])
  private releasesObservable = this.releases.asObservable()

  constructor(
    private _http:HttpClient,
    private _authService:AuthService
  ) {}

  private updateReleases(updatedList): void {
    this.releases.next(updatedList)
  }

  public getNewReleases(): Observable<Object[]> {
    const url = `${this.spotifyApiUri}/browse/new-releases`
    const headers = new HttpHeaders({ 'Authorization': this._authService.getToken() })
    this._http.get(url, { headers })
    .map((releases:any) => {
      const items = releases.albums.items
      return items.map(album => {
        return {
          image: album.images[0].url,
          name: album.name,
          release: album.release_date,
          link: album.external_urls.spotify
        }
      })
    }).subscribe(releases => {
      this.updateReleases(releases)
    })
    return this.releasesObservable
  }
}
