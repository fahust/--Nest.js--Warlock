import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthenticationChallengeResponseDTO {
    @IsString()
    @ApiProperty({ description: 'Challenge', example: `Welcome to warlock` })
    public challenge: string;

    @IsString()
    @ApiProperty({
        description: 'Nonce',
        example: '8fbebda2-dd21-11ec-83ba-e72899f4ce15'
    })
    public nonce: string;
}
