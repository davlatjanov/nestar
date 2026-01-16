import { LikeService } from './like.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import LikeSchema from '../../schemas/Like.model';
import { MemberModule } from '../member/member.module';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Like',
				schema: LikeSchema,
			},
		]),
		MemberModule,
	],
	providers: [LikeService],
	exports: [LikeService],
})
export class LikeModule {}
