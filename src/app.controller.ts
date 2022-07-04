import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';


@ApiTags('status')


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
    @ApiOperation({
      summary: 'Visualizar status da aplicação',
    })
    getStatus() {
      return this.appService.getStatus("http://localhost:3000");
    }
  }
