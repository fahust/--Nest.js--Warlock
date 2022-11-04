import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from '@database/constant/database.constant';
import { MailModule } from '@mail/module/mail.module';
import { UserController } from '@user/controller/user.controller';
import {
    UserDatabaseName,
    UserEntity,
    UserSchema
} from '@user/schema/user.schema';
import { UserBulkService } from '@user/service/user.bulk.service';
import { UserService } from '@user/service/user.service';

@Module({
    imports: [
        JwtModule.register({}),
        forwardRef(() => MailModule),
        MongooseModule.forFeature(
            [
                {
                    name: UserEntity.name,
                    schema: UserSchema,
                    collection: UserDatabaseName
                }
            ],
            DATABASE_CONNECTION_NAME
        )
    ],
    exports: [UserService, UserBulkService],
    providers: [UserService, UserBulkService],
    controllers: [UserController]
})
export class UserModule {}
