import { Injectable } from '@angular/core';
//import Web3 from 'web3';
import * as ethers from 'ethers';
import { environment } from '../../environments/environment';
import { baseClientService } from './baseClient.service';

import * as University from '../../../build/contracts/University.json';
import * as Classroom from '../../../build/contracts/Classroom.json';

declare let window: any;
declare let ethereum: any;

@Injectable({
	providedIn: 'root',
})
export class InfuraService extends baseClientService {
	public networkName: any;

	constructor() {
		super();
		const provider = new ethers.providers.InfuraProvider(
			environment.network,
			environment.infuraKey
		);
		this.setupProvider(provider);
		this.universityContractInstance = new ethers.Contract(
			environment.universityAddress,
			University.abi,
			this.provider
		);
	}

	public async connectClassroom(address: string){
		this.classroomContractInstance = new ethers.Contract(
			address,
			Classroom.abi,
			this.provider
		);
	}
}
