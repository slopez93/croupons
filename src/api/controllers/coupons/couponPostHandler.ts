import middy from "@middy/core";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import container from "~/config/di";
import { apiSetup } from "~/api/middlewares/api";
import { CouponPostController } from "./couponPostController";

const handlerFunction = (event: APIGatewayProxyEvent, context: Context) => {
  const createCouponController = container.get<CouponPostController>(
    "CouponPostController"
  );
  return createCouponController.run(event, context);
};

export const handler = middy(handlerFunction).use(apiSetup());
