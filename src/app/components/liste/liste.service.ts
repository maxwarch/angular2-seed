import { Injectable } from '@angular/core';
import { ListeModel } from './liste.model';

@Injectable()
export class ListeService{
	data:ListeModel[];

	getAll(){
		this.data =[
						new ListeModel('Lorem ipsum dolor sit amet.', 'texte 1'),
						new ListeModel('lore.', 'texte 2'),
						new ListeModel('test 3.', 'texte 3'),
						new ListeModel('essai.', 'texte 4'),
					];

		return this.data;
	}

	add(d){
		this.data.push(new ListeModel(d.titre, d.texte))
	}

	remove(d){
		this.data.splice(this.data.indexOf(d), 1);
	}
}