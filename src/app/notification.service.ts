import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snack:MatSnackBar) { }
  matSnackConfig:MatSnackBarConfig={
    verticalPosition:'bottom',
    horizontalPosition:'center',
    duration:1000
  }
  successfullyCreated(message:any){
    this.matSnackConfig['panelClass']=['notification','success'];
    this.snack.open(message,'',this.matSnackConfig)
  }
}
