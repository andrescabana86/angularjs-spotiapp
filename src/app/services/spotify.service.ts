import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  private spotifyServerUrl:string = 'https://spotify-get-token.herokuapp.com/spotify'
  private clientId:string = '752e887fe0244daaae54efc04e60c746'
  private clientSecret:string = '5018b1f759fc4f8ea6f9f6393bb1db17'
  private apiTokenUrl = `${this.spotifyServerUrl}/${this.clientId}/${this.clientSecret}`
  private token:string = ''
  private tokenPromise = null
  private spotifyApiUri = 'https://api.spotify.com/v1'
  
  constructor(private _http:HttpClient) {
    this.tokenPromise = this.getNewToken()
  }

  getNewToken(callback?:Function) {
    return this._http.get(this.apiTokenUrl)
    .toPromise()
    .then(newToken => {
      this.token = `${newToken['token_type']} ${newToken['access_token']}`
    })
  }

  getNewReleases() {
    return this.tokenPromise
    .then(() => {
      const url = `${this.spotifyApiUri}/browse/new-releases`
      const headers = new HttpHeaders({ 'Authorization': this.token })
      return this._http.get(url, { headers })
    })
  }
}
