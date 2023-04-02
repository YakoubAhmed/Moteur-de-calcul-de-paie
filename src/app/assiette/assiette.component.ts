import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-assiette',
  templateUrl: './assiette.component.html',
  styleUrls: ['./assiette.component.css']
})
export class AssietteComponent implements OnInit {

  assiettefm= new FormGroup({
    code : new FormControl(''),
    libelle : new FormControl(''),
    formule : new FormControl(''),
    deff: new FormControl(''),
    df : new FormControl(''),
    basecalcul : new FormControl(''),


  });

  constructor(private formBuilder: FormBuilder ,  private MyServiceService: MyServiceService) { }

  ngOnInit() {
     this.formBuilder.group({
      code: ['', Validators.required,Validators.minLength(2)],
      libelle: ['', Validators.required],
      formule: ['', [Validators.required]],
      deff: ['', [Validators.required]],
      df: ['', [Validators.required]]

    });
  }
  onSubmit() {
    this.MyServiceService.addData2(this.assiettefm.value);
    this.assiettefm.reset();
    // local storage
    const data = this.assiettefm.value;
    localStorage.setItem('data', JSON.stringify(data));
  }
  public resetForm(): void {
    this.assiettefm.reset();
  }


}
