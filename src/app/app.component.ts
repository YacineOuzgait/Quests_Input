import { Component } from '@angular/core';
import { Developer } from './models/developer.model';
import { Skill } from './models/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  skillInstance : Skill[] = [
    new Skill("Angular", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png","https://angular.io/"),
    new Skill("Angular", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png","https://angular.io/"),
  ]
  
  developerInstance: Developer = new Developer(
    'Yacine', 
    'Ouzgait', 
    28, 
    'M', 
    'Dévelopeur en herbe', 
    this.skillInstance
    );
}
