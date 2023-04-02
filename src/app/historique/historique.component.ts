import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit{
  data:any[]=[];
  data2:any[]=[];

  displayedColumns: string[] = [
    'code',
    'libelle',
    'formule',
    'Type',
    'dateEffet',
    'date fin',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor(private MyServiceService: MyServiceService){}
  ngOnInit(): void {
    this.MyServiceService.getData().subscribe((dataSource) => (this.data = dataSource));
    this.MyServiceService.getData2().subscribe((data2) => (this.data2 = data2));

  }

}
