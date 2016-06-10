import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

import { ListeService } from './liste.service';
import { ListeModel } from './liste.model';

@Component({
	selector:'liste',
	templateUrl:'app/components/liste/liste.component.html',
	providers:[ListeService]
})
export class Liste{
	listeService:ListeService;
	liste: ListeModel[];
	listeForm: ControlGroup;

	constructor(fb:FormBuilder, listeService:ListeService){
		this.listeService = listeService;
		this.liste = this.listeService.getAll();

		this.listeForm = fb.group({
			titre:['', Validators.required],
			texte:['', Validators.required]
		})
	}
	
	addItem(d){
		if(this.listeForm.valid)
			this.listeService.add(d);
	}

	removeItem(d){
		this.listeService.remove(d); 
	}
}