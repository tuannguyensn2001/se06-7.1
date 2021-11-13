import { Controller, Get } from "@nestjs/common";

@Controller('api/models')
export class ModelsController {

    @Get('/')
    public async index(){
      return 'hello';
    }

}
