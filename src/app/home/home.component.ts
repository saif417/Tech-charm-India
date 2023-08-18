import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TechCharmAPiService } from '../service/tech-charm-api.service';
interface Tag {
  name: string;
  description: string;
  usageCount: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
  constructor(){}

  ngOnInit(){
  }
  tags: Tag[] = [
    { name: 'angular', description: 'Angular framework', usageCount: 100 },
    { name: 'javascript', description: 'JavaScript programming language', usageCount: 500 },
    // Add more tags...
  ];
}
