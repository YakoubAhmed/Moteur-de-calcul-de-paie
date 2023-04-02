import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { RebriqueComponent } from '../rebrique/rebrique.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private dialog:Dialog){}

  openRebrique(){
    this.dialog.open(RebriqueComponent)

  }
}
