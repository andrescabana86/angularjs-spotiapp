import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private tokenServer:string = 'https://spotify-get-token.herokuapp.com/spotify'
  private clientId:string = '752e887fe0244daaae54efc04e60c746'
  private clientSecret:string = '5018b1f759fc4f8ea6f9f6393bb1db17'
  private tokenUrl = `${this.tokenServer}/${this.clientId}/${this.clientSecret}`
  private token:string = ''
  
  constructor(private _http:HttpClient) {}

  public getToken(): string {
    return this.token
  }

  public isAuthorized(): Promise<boolean> | boolean {
    if (this.token) {
      return true
    } else {
      return this.getTokenFromServer()
    }
  }

  private getTokenFromServer(): Promise<boolean> {
    return new Promise(resolve => {
      this._http.get(this.tokenUrl).toPromise()
      .then(token => {
        this.token = `${token['token_type']} ${token['access_token']}`
        resolve(true)
      }).catch(error => {
        this.token = ''
        resolve(false)
      })
    })
  }
}
