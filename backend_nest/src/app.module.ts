import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ModelsModule } from "src/modules/models/models.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeORMConfig from "src/config/database";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeORMConfig),
    ModelsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
