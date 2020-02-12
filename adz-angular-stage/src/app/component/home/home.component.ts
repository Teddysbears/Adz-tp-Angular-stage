import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'adz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  keywords: FormGroup;
  private params: String;

  constructor(private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.keywords = this.fb.group({
      keyword: ['']
      }
    )
  }

  manageKeyword() {
  }

  submitForm() {
    this.router.navigate(['catalogue/',this.keywords.value]);
  }

}
