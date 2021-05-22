import { APIGatewayProxyEvent, Context } from "aws-lambda";
export interface Controller<TResponse> {
  run(event: APIGatewayProxyEvent, context: Context): Promise<TResponse>;
}
