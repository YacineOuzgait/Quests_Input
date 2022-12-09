import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  @Input()
  developerToHandle!: Developer;

  skillName: string = '';

  constructor() {}

  ngOnInit() {}


}
