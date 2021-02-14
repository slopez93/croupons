import { APIGatewayProxyEvent, Context } from 'aws-lambda';

export interface Controller {
  run(event: APIGatewayProxyEvent, context: Context): void;
}
