export enum StorageEnum {
    IPFS = 'ipfs',
    S3 = 's3'
}

export enum NetworkNameEnum {
    Goerli = 'goerli',
    Mumbai = 'mumbai'
}

export enum NetworkChainEnum {
    Ethereum = 'ethereum',
    Polygon = 'polygon'
}

export enum NetworkTypeEnum {
    Mainnet = 'mainnet',
    Testnet = 'testnet'
}

export enum NetworkCurrencyEnum {
    EthereumMainnet = 'ETH',
    EthereumGoerli = 'ETH',
    PolygonMumbai = 'MATIC',
    PolygonMainnet = 'MATIC'
}

export enum CollectionCreationStepEnum {
    Initial = '759c8faa-123f-11ed-812b-1760bcef1ad1',
    Information = '61be131e-0d85-11ed-9a49-2bd996532cf5',
    Beneficiaries = '67b044fe-0d85-11ed-99e7-334380a59f8a',
    Royalties = '6c88aae8-0d85-11ed-a785-c338b8b8fb0a',
    Deployment = '71638204-0d85-11ed-b629-6b385bce0b55',
    Finished = 'b6b1dd6e-126d-11ed-a058-fbf23c7ea1ac'
}

export enum BatchCreationStepEnum {
    EmptyBatch = '8e86ef38-0d85-11ed-a50c-db0604b3572d',
    QuantityBatch = 'f8bc5060-1956-4f84-bd20-50fe5aeac97b',
    UploadImage = '1d609b8c-af12-4ad2-9921-5d5a5b38e5b6',
    PropertiesChoice = '924176c0-0d85-11ed-bdf7-17d16af14ed8',
    PropertiesForm = '9710d4fc-0d85-11ed-a752-8bd95e9e3534',
    PropertiesCsv = '9710d4fc-0d85-11ed-a752-8bd95e9e3534',
    TableToken = '9d856492-0d85-11ed-9b23-e343a3ecc55e',
    RevealChoice = 'a3452232-0d85-11ed-b43b-cf74ad447861',
    Flask = 'a84b6a0c-0d85-11ed-a5e9-4bc2a79e86ee',
    DeployToken = 'ae4473d6-0d85-11ed-bd29-4b1b208bba21'
}

export enum EventType {
    GROUP_SUBSCRIBE = 'group_subscribe',
    GROUP_RESUBSCRIBE = 'group_resubscribe',
    GROUP_UNSUBSCRIBE = 'group_unsubscribe',
    SPAMREPORT = 'spamreport',
    DROPPED = 'dropped',
    BOUNCE = 'bounce',
    CLICK = 'click',
    OPEN = 'open',
    DELIVERED = 'delivered',
    DEFERRED = 'deferred',
    PROCESSED = 'processed'
}

export enum ContractDeployStatus {
    ONGOING = 'ONGOING',
    DEPLOYED = 'DEPLOYED'
}

export enum PlatformSalesTopic {
    LOOKSRARE = '0x68cd251d4d267c6e2034ff0088b990352b97b2002c0476587d0c4da889c11330',
    RARIBLE = '0x268820db288a211986b26a8fda86b1e0046281b21206936bb0e61c67b5c79ef4',
    SEAPORT = '0x9d9af8e38d66c62e2c12f0225249fd9d721c54b83f48d9352c97c6cacdcb6f31',
    X2Y2 = '0x3cbb63f144840e5b1b0a38a7c19211d2e89de4d7c5faf8b2d3c1776c302d1d33'
}

export enum BlockHash {
    FIRST = '0x0',
    LAST = 'latest'
}

export enum ChainId {
    ETHEREUMGOERLI = 5,
    ETHEREUMMAINNET = 1,
    POLYGONMAINNET = 137,
    POLYGONMUMBAI = 1337
}

export enum ChainIdHexa {
    ETHEREUMGOERLI = '0x5',
    ETHEREUMMAINNET = '0x1',
    POLYGONMAINNET = '0x89',
    POLYGONMUMBAI = '0x13881'
}

export enum ChainName {
    ETHEREUMGOERLI = 'ethereum-goerli',
    ETHEREUMMAINNET = 'ethereum-mainnet',
    POLYGONMAINNET = 'polygon-mainnet',
    POLYGONMUMBAI = 'polygon-mumbai'
}

export enum TransactionMethodHashEnum {
    CLAIM = '0xa9059cbb', //CHANGE CLAIM METHOD ID WHEN CHANGE CONTRACT
    BUY = '0xa4029cbb', //CHANGE BUY METHOD ID WHEN CHANGE CONTRACT
    BIDDING = '0xa9059abb' //CHANGE BIDDING METHOD ID WHEN CHANGE CONTRACT
}

export enum CreationMethodEnum {
    GENERATIVE = 'generative',
    PURE = 'pure'
}

export enum MintingMethodEnum {
    LAZY = 'lazy',
    DIRECT = 'direct'
}
