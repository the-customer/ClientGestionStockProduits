import { Personne } from '../shared/personne';
import { Injectable } from '@angular/core';

@Injectable()
export class TestMockService{
    private PERSONNES:Personne[] = [];

    constructor(){
        let p1 = new Personne('NIANG','Aly',19);
        let p2 = new Personne('DIAGNE','Aicha',14);
        let p3 = new Personne('GUEYE','Ndack',13);

        this.PERSONNES.push(p1);
        this.PERSONNES.push(p2);
        this.PERSONNES.push(p3);
    }

    public getPersonnes():Personne[]{
        return this.PERSONNES;
    }
}