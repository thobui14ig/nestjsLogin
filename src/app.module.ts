import { OrderModule } from './order/order.module';
// import { ProfileModule } from './profile/profile.module';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/product.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order/order.controller';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      entities: ["dist/**/*.entity{.ts,.js}"],

      "migrationsTableName": "custom_migration_table",
      "migrations": ['dist/src/db/migrations/*.js'],
      "cli": {
          "migrationsDir": "src/db/migrations"
      },
    synchronize: true
      // autoLoadEntities: true,
    }),
    ProductModule,
    AuthModule,
    UsersModule,
    ProfileModule,
    OrderModule,

    
    ],
    controllers: [],
    providers: [],
  }) 
export class AppModule {}
