// src/app/api/auth/signin/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { CognitoIdentityProviderClient, CognitoIdentityProviderClientConfig, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';
import crypto from 'crypto';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const clientConfig: CognitoIdentityProviderClientConfig = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_KEY as string,
  },
};

const client = new CognitoIdentityProviderClient(clientConfig);

const generateSecretHash = (username: string, clientId: string, clientSecret: string) => {
  return crypto
    .createHmac('sha256', clientSecret)
    .update(username + clientId)
    .digest('base64');
};

export const POST = async (req: NextRequest) => {
  if (req.method !== 'POST') {
    return new NextResponse(`Method ${req.method} Not Allowed`, { status: 405 });
  }

  const { phoneNumber, password } = await req.json();
  console.log('Received payload:', { phoneNumber, password });

  if (!phoneNumber || !password) {
    return new NextResponse('Phone number and password are required', { status: 400 });
  }

  const clientId = process.env.COGNITO_CLIENT_ID as string;
  const clientSecret = process.env.COGNITO_CLIENT_SECRET as string;

  if (!clientId || !clientSecret) {
    return new NextResponse('Cognito client ID and secret are not configured properly', { status: 500 });
  }

  const secretHash = generateSecretHash(phoneNumber, clientId, clientSecret);

  const command = new InitiateAuthCommand({
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: clientId,
    AuthParameters: {
      USERNAME: phoneNumber,
      PASSWORD: password,
      SECRET_HASH: secretHash,
    },
  });

  try {
    const response = await client.send(command);
    return NextResponse.json(response.AuthenticationResult, { status: 200 });
  } catch (error) {
    console.error('Error during authentication:', error);
    return new NextResponse('Invalid phone number or password', { status: 401 });
  }
};
