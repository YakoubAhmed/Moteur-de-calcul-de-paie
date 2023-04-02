import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-rebrique',
  templateUrl: './rebrique.component.html',
  styleUrls: ['./rebrique.component.css']
})
export class RebriqueComponent implements OnInit {
  rebriquefm= new FormGroup({
    code : new FormControl(''),
    libelle : new FormControl(''),
    formule : new FormControl(''),
    deff: new FormControl(''),
    df : new FormControl(''),
    type : new FormControl(''),
    basecalcul : new FormControl(''),


  });
  formData: FormData[] = [];


  constructor(private formBuilder: FormBuilder , private MyServiceService: MyServiceService)   { }

  ngOnInit() {
     this.formBuilder.group({
      code: ['', Validators.required,Validators.maxLength(3)],
      libelle: ['', Validators.required,Validators.minLength(5)],
      formule: ['', [Validators.required]],
      deff: ['', [Validators.required]],
      df: ['', [Validators.required]]

    });
  }
  onSubmit() {
    this.MyServiceService.addData(this.rebriquefm.value);
    this.rebriquefm.reset();
    const data = this.rebriquefm.value;
    // this.formData.push(this.rebriquefm.value)
    localStorage.setItem('data', JSON.stringify(data));
  

  }
  public resetForm(): void {
    this.rebriquefm.reset();
  }

  isValidCode(){
    return this.rebriquefm.controls.code.invalid && this.rebriquefm.controls['code'].dirty ;
  }

  isValidLibelle(){
    return this.rebriquefm.get('libelle')?.errors?.['minlength'] &&
    this.rebriquefm.controls['libelle'].touched;
    }
  
}