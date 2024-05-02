import { Component } from '@angular/core';

@Component({
  selector: 'app-my-solution',
  templateUrl: './my-solution.component.html',
  styleUrl: './my-solution.component.css',
})
export class MySolutionComponent {
  userName = '';
  resetUserName() {
    this.userName = '';
  }
}
