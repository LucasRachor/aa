import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { LocalAuthGuard } from 'src/auth/guards/LocalAuth.guard';

@Controller('inserir')
export class PlacasController {
    constructor(private readonly placasService: PlacasService) { }

    @Post()
    async createPlaca(@Body() createPlacaDto: CreatePlacaDto) {
        return await this.placasService.createPlaca(createPlacaDto)
    }

    @Get()
    async findBySerial() {
        return await this.placasService.findBySerial('TLCM123012321')
    }
}
