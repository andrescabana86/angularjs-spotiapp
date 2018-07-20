import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'spotiapp-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  private searchForm: FormGroup
  private searchInput: FormControl

  constructor() { }

  ngOnInit() {
    this.createFormControls()
    this.createForm()
  }

  private createFormControls(): void {
    this.searchInput = new FormControl('', Validators.pattern(/\w/))
  }
  
  private createForm(): void {
    this.searchForm = new FormGroup({
      searchInput: this.searchInput
    })
  }

}
