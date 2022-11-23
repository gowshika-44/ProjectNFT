import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:Router) { }

  goto(){
    this.route.navigateByUrl('/'+'main');
  }
  backoff(){
    this.route.navigateByUrl('/'+'sign');
  }
  ngOnInit(): void {
  }
  url="/assets/others/student3.jpeg"
  onselectFile(chooseFile:any){
    if(chooseFile.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(chooseFile.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
}
