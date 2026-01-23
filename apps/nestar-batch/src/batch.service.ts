import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	getHello(): string {
		return 'WELCOME TO NESTAR BATCH SERVER';
	}

	public async batchRollBack(): Promise<void> {
		console.log('batchRollBack');
	}

	public async batchProperties(): Promise<void> {
		console.log('batchProperties');
	}

	public async batchAgents(): Promise<void> {
		console.log('batchAgents');
	}
}
