import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import File from "../entities/File.entity";
import Entities from "../entities";

const typeORMConfig : TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService : ConfigService) : Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      synchronize: configService.get('DB_SYNC'),
      logging: true,
      entities: Entities
    };
  },
  inject: [ConfigService]
}



export default typeORMConfig;