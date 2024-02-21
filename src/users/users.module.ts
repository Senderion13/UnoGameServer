import { Module, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { Repository } from 'typeorm';

@Module({
  providers: [UsersResolver, UsersService, Repository],
})
export class UsersModule {}
