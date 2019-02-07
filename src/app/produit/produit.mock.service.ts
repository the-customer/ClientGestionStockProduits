import { Injectable } from "@angular/core";
import { Produit } from "../shared/produit";

@Injectable()
export class ProduitMockService{

    private PRODUITS:Produit[] = [];
    constructor(){
        let p1:Produit = new Produit('Livre',50,1500);
        let p2:Produit = new Produit('Stylo',150,100);
        let p3:Produit = new Produit('Marqueur',25,500);
        let p4:Produit = new Produit('Effaceur',50,600);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
        this.PRODUITS.push(p4);
    }

    /**
     * getProduit
     */
    public getProduit(): Produit[] {
        return this.PRODUITS;
    }
}