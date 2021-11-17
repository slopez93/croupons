import middy from "@middy/core";
import { SQSEvent, Context } from "aws-lambda";
import { apiSetup } from "~/api/middlewares/api";

const handlerFunction = (event: SQSEvent, context: Context) => {
  console.debug("SQS COUPON CREATED HANDLER WITH EVENT 4", event);
};

export const handler = middy(handlerFunction).use(apiSetup());
