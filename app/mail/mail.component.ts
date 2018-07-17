import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  mails = [
    { name:'Ahmed Mohamed' , mail: 'ahmedmoh@gmail.com'},
    { name:'Nada Diaa' , mail: 'nada.diaa@gmail.com'},
    { name:'Ali Mohamed' , mail: 'ali.moh@yahoo.com'},
    { name:'Khaled Hassan' , mail: 'khaled@yahoo.com'},
    { name:'Isam Gamal' , mail: 'islam.gamal@yahoo.com'},
  ];
  name ='';
  mail ='';
  currentValue='';
  addMessage;
  editMessage;

    addMail(value){ 
    if(this.currentValue){
      this.mails[this.currentValue].name = value.name;
      this.mails[this.currentValue].mail = value.address;
      this.editMessage = true;
      setTimeout(()=>{
        this.editMessage = false;
      }, 3000);
    }else{
       if (this.name && this.mail){
        this.mails.push({'name': value.name, 'mail': value.mail});
        this.addMessage = true;
        setTimeout(()=>{
        this.addMessage = false;
      }, 3000);
      }
    }


    this.name ='';
    this.mail ='';
    this.currentValue = '';
  }

  removeMail (value) {
    this.mails.splice(value , 1)
  }

  editMail(value){
    //console.log(value);
    this.name = this.mails[value].name;
    this.mail = this.mails[value].mail;
    this.currentValue = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
