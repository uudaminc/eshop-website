import * as crypto from 'crypto';

export function generateSecretHash(username: string, clientId: string, clientSecret: string): string {
    const hmac = crypto.createHmac('SHA256', clientSecret);
    hmac.update(username + clientId);
    return hmac.digest('base64');
}


