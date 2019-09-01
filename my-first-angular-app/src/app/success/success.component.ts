import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `
  <div class="row">
    <div class="col-sm-10 col-sm-offset-1">
        <p class="alert alert-success" role="alert"><span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
         Success works!</p>

    </div>
  </div>
  `,
  styles: [`
    p {
      padding: 20px;
      color: darkgreen;
      background-color: palegreen;
      border: 1px solid green;
    }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
