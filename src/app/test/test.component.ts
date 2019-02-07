import { Component, OnInit } from '@angular/core';
import { Personne } from '../shared/personne';
import { TestMockService } from './test.mock.service';


@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
    personnes:Personne[] = [];
    constructor(private testMockService:TestMockService){}
    ngOnInit(){
        this.personnes = this.testMockService.getPersonnes();
    }
}