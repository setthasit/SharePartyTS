import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PartyModule } from './party/party.module';
import { UserModule } from './user/user.module';
import { PartyMemberModule } from './party-member/party-member.module';

@Module({
  imports: [DatabaseModule, PartyModule, UserModule, PartyMemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
