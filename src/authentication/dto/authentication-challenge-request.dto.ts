import { ApiProperty } from '@nestjs/swagger';
import { IsEthereumAddress } from 'class-validator';

export class AuthenticationChallengeRequestDTO {
    @IsEthereumAddress()
    @ApiProperty({
        description: 'Ethereum address',
        example: '0xf2033bb24a9ACad66945290DD2e1E39C4638d94F'
    })
    public walletAddress: string;
}
