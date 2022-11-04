import { ApiProperty } from '@nestjs/swagger';
import { IsEthereumAddress, IsNotEmpty } from 'class-validator';
import { IsEthereumSignature } from '@authentication/decorator/authentication.decorator';

export class AuthenticationRequestDTO {
    @IsNotEmpty()
    @IsEthereumSignature()
    @ApiProperty({ description: 'Web3 signature', example: '...' })
    public signature: string;

    @IsEthereumAddress()
    @ApiProperty({
        description: 'Ethereum address',
        example: '0xf2033bb24a9ACad66945290DD2e1E39C4638d94F'
    })
    public walletAddress: string;
}
