import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloDataService } from '../service/data/hello-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name='';
  welcomeMessage='';
  errorMessage='';

  constructor(private route:ActivatedRoute,private helloWorldService:HelloDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  handleWelcome() {
    this.helloWorldService.helloWorld().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
      
    );
  }

  helloWorldWithParam() {
    console.log(this.name);
    this.helloWorldService.helloWorldWithParam(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
      
    );
  }

  handleSuccessResponse(response:any) {
    this.welcomeMessage = response.message;
    
  }
  handleErrorResponse(error:any) {
    this.errorMessage = error.error.message;
    console.log(error);
    
  }

}
