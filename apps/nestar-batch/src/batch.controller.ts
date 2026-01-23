import { Controller, Get, Logger } from '@nestjs/common';
import { BatchService } from './batch.service';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { BATCH_ROLLBACK, BATCH_TOP_AGENTS, BATCH_TOP_PROPERTIES } from '../libs/config';

@Controller()
export class BatchController {
	private readonly logger: Logger = new Logger('BatchController');
	constructor(private readonly batchService: BatchService) {}

	@Timeout(3000)
	handleTimeOut() {
		this.logger.debug('BATCH SERVER READY');
	}

	@Cron('00 00 01 * * *', { name: BATCH_ROLLBACK })
	public async batchRollBack() {
		try {
			return await this.batchService.batchRollback();
		} catch (err) {
			this.logger.error(err);
		}
	}

	@Cron('20 00 01 * * *', { name: BATCH_TOP_PROPERTIES })
	public async batchTopProperties() {
		try {
			return await this.batchService.batchTopProperties();
		} catch (err) {
			this.logger.error(err);
		}
	}

	@Cron('40 00 01 * * *', { name: BATCH_TOP_AGENTS })
	public async batchTopAgents() {
		try {
			return await this.batchService.batchTopAgents();
		} catch (err) {
			this.logger.error(err);
		}
	}

	/*
	@Interval(10000)
	handleInterval() {
		this.logger.debug('Interval Test');
	} 
  */
	@Get()
	getHello(): string {
		return this.batchService.getHello();
	}
}
