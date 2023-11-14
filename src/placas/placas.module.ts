import { Module } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlacasController } from './placas.controller';

@Module({
  controllers: [PlacasController],
  providers: [PlacasService, PrismaService],
  exports: [PlacasService]
})
export class PlacasModule {}
