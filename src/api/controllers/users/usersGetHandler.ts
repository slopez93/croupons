import middy from "@middy/core";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import container from "~/config/di";
import { UsersGetController } from "./usersGetController";
import { apiSetup } from "~/api/middlewares/api";

const handlerFunction = (event: APIGatewayProxyEvent, context: Context) => {
  const getNextQuestionController = container.get<UsersGetController>(
    "UsersGetController"
  );
  return getNextQuestionController.run(event, context);
};

export const handler = middy(handlerFunction).use(apiSetup());
