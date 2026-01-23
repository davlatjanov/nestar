import { Controller, Get } from '@nestjs/common';
import { NestarBatchService } from './nestar-batch.service';

@Controller()
export class NestarBatchController {
	constructor(private readonly nestarrBatchService: NestarBatchService) {}

	@Get()
	getHello(): string {
		return this.nestarrBatchService.getHello();
	}
}
