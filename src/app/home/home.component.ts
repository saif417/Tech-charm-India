import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TechCharmAPiService } from '../service/tech-charm-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  newPostTopic:any;
  newPostDetail:any;
  // listData:any = [];
  previousStoreData:any;


  // mock data
  listData:any = [
    {
      topic: 'test display inner html show data from json akfdqiwd',
      detail: '<p>123</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus enim sit? Tenetur, laudantium nobis recusandae ratione fuga id blanditiis laboriosam voluptatibus ipsa beatae et sed tempora quibusdam temporibus sequi!</p>',
      dateTime: '12/12/24',
      userName: 'name sample'
    },
    {
      topic: 'test display inner html show data from json akfdqiwd',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus enim sit? Tenetur, laudantium nobis recusandae ratione fuga id blanditiis laboriosam voluptatibus ipsa beatae et sed tempora quibusdam temporibus sequi!',
      dateTime: '12/12/24',
      userName: 'sample test 22'
    },
    {
      topic: 'test display inner html show data from json akfdqiwd',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus enim sit? Tenetur, laudantium nobis recusandae ratione fuga id blanditiis laboriosam voluptatibus ipsa beatae et sed tempora quibusdam temporibus sequi!',
      dateTime: '12/12/24',
      userName: 'test sample 33'
    },
    {
      topic: 'test display inner html show data from json akfdqiwd',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus enim sit? Tenetur, laudantium nobis recusandae ratione fuga id blanditiis laboriosam voluptatibus ipsa beatae et sed tempora quibusdam temporibus sequi!',
      dateTime: '12/12/24',
      userName: 'confirm'
    },
  ];
  questionData: any;
  abc: any;

  constructor(private auth:AuthService,private apiService : TechCharmAPiService){}

  ngOnInit(){
    this.listData;
  }

}
