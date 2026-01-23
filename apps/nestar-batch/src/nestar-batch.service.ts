import { Injectable } from '@nestjs/common';

@Injectable()
export class NestarBatchService {
	getHello(): string {
		return 'WELCOME TO NESTAR BATCH SERVER';
	}
}
