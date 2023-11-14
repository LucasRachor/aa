import { Placa } from '../entities/placa-entity';
import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreatePlacaDto extends Placa {
    @IsNotEmpty()
    @IsString()
    cliente: string;

    @IsString()
    serial: string;

    @IsNotEmpty()
    modelo: string;

    @IsNotEmpty()
    defeito: string;

    @IsNotEmpty()
    causa: string;

    @IsNotEmpty()
    pos_mec: string;

    @IsNotEmpty()
    posto: string;

    @IsString()
    acumulado: string;

    tecnico: string
}