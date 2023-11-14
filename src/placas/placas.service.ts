import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlacaDto } from './dto/create-placa.dto';

@Injectable()
export class PlacasService {
    constructor(private prismaService: PrismaService) { }
    async createPlaca(createPlacaDto: CreatePlacaDto) {
        try {
            await this.prismaService.placas.create({
                data: {
                    cliente: createPlacaDto.cliente,
                    modelo: createPlacaDto.modelo,
                    defeito: createPlacaDto.defeito,
                    causa: createPlacaDto.causa,
                    posto: createPlacaDto.posto,
                    pos_mec: createPlacaDto.pos_mec,
                    serial: createPlacaDto.serial,
                    acumulado: createPlacaDto.acumulado,
                    tecnico: createPlacaDto.tecnico,
                },
            });
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new HttpException(
                    'Serial já cadastrado!',
                    HttpStatus.BAD_REQUEST,
                );
            }
            throw new HttpException(
                'Erro ao inserir o reparo!',
                HttpStatus.BAD_REQUEST,
            );
        }
        return {
            msg: 'reparo concluído!'
        }
    };

    findBySerial(serial: string) {
        return this.prismaService.placas.findUnique({
            where: { serial }
        })
    }

}
