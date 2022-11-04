export interface IJwtPayload {
  sub: string;
}

export interface IUserApiKeys {
  apiKey: string;
  secretApiKey: string;
}

export interface IJwtEmailPayload {
  sub: string;
  email: string;
}
