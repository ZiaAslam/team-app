import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../Services/teams.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  getData = [];
  name!: string;
  name1: any;
  nameGet: string []=[];
  

   findNames!: FormGroup;
  constructor(service: TeamsService, private formBuilder: FormBuilder) {
    service.mainData().subscribe((res: any) => {
      console.log('data', res);
      this.getData = res.users;
    });
  }
  ngOnInit(): void {
    this.findNames = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  nameFind() {
    this.name1 = this.getData.filter((value: any) => value.name == this.name);
    if (!(this.name1.length == 0)) {
      this.nameGet.push(this.name);
      console.log('dat', this.nameGet);
    } else {
      alert('went wrong');
    }
  }
  LogOut() {
    alert('LogOut successfully');
  }
}
