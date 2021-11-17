import { injectable } from "inversify";
import { DomainEventSubscriber } from "~/shared/domain/definitions/domainEventSuscriber";
import { EventClass } from "~/shared/domain/definitions/event";
import { CreateCouponDomainEvent } from "../domain/createCouponDomainEvent";

var AWS = require("aws-sdk");
AWS.config.update({
  region: "eu-west-1",
  accessKeyId: "AKIAURBRODUEXOC4O4HH",
  secretAccessKey: "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",
});
const dynamodb = new AWS.DynamoDB.DocumentClient();

@injectable()
export class CreateCouponDomainEventSubscriber
  implements DomainEventSubscriber<CreateCouponDomainEvent>
{
  subscribedTo(): EventClass[] {
    return [CreateCouponDomainEvent];
  }

  on(event: CreateCouponDomainEvent): Promise<void> {
    console.log("EVENT CreateCouponDomainEvent RECEIVED", event);
    try {
      dynamodb.put(
        {
          TableName: "croupons-coupons",
          Item: {
            couponId: event.aggreateId,
            userId: "userId",
            couponInfo: { couponName: "couponName", discount: 0 },
            createdOn: event.ocurredOn.toISOString(),
          },
        },
        function (err: any, data: any) {
          if (err) {
            console.log(err); // an error occurred
          } else {
            console.log(data); // successful response
          }
        }
      );
    } catch (error) {
      console.log("error", error);
    }
    return;
  }
}
