import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { PlacasController } from './placas/placas.controller';
import { PlacasModule } from './placas/placas.module';
import { PlacasService } from './placas/placas.service';
import { JwtAuthGuard } from './auth/guards/JwtAuth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports: [PrismaModule, AuthModule, PlacasModule, AuthModule],
  controllers: [AppController, UserController, PlacasController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }, PrismaService, UserService, PlacasService, JwtStrategy]
})
export class AppModule { }
