import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';


@Component({
	selector:'liste',
	templateUrl:'app/components/liste/liste.component.html'
})
export class Liste{
	liste: [{}];
	listeForm: ControlGroup;

	constructor(fb:FormBuilder){
		this.liste = [
			{ titre: 'Lorem ipsum dolor sit amet.' },
			{ titre: 'lore.' },
			{ titre: 'test 3.' },
			{ titre: 'essai.' },
		]

		this.listeForm = fb.group({
			titre:['', Validators.required]
		})
	}
	
	addItem(d){
		if(this.listeForm.valid)
			this.liste.push(this.listeForm.value)
	}

	removeItem(d){

	}
}