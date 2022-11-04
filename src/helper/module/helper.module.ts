import { Global, Module } from '@nestjs/common';
import { HelperDateService } from '@helper/service/helper.date.service';
import { HelperHashService } from '@helper/service/helper.hash.service';
import { HelperPermissionService } from '@helper/service/helper.permissions.service';
import { HelperService } from '@helper/service/helper.service';

@Global()
@Module({
    providers: [
        HelperService,
        HelperDateService,
        HelperHashService,
        HelperPermissionService,
    ],
    exports: [
        HelperService,
        HelperDateService,
        HelperHashService,
        HelperPermissionService,
    ],
    controllers: [],
    imports: []
})
export class HelperModule {}
