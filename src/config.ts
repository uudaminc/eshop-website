import {DynamoDB} from "@aws-sdk/client-dynamodb"
import {DynamoDBDocument} from '@aws-sdk/lib-dynamodb';

const awsCredentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
};
console.log(process.env.AWS_ACCESS_KEY)
const dynamoConfig = {
    region: process.env.AWS_REGION,
    credentials: awsCredentials,
} as {
    credentials: {
        accessKeyId: string;
        secretAccessKey: string;
    };
    region: string;
};

export const dbClient = DynamoDBDocument.from(new DynamoDB(dynamoConfig), {
    marshallOptions:{
        convertEmptyValues: true,
        removeUndefinedValues: true,
        convertClassInstanceToMap: false
    }
})
