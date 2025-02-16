import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import PrismaService from './prisma';
import { JwtModule } from '@nestjs/jwt';
import { ChatModule } from './chat/chat.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    JwtModule.register({
      secret: "a123b123c123d123"
    }),
    ChatModule,
    ProfileModule]
    ,
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
