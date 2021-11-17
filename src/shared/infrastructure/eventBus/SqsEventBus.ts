import AWS from "aws-sdk";
import { injectable } from "inversify";
import { Event } from "~/shared/domain/definitions/event";
import { EventBusAsync } from "~/shared/domain/definitions/eventBusAsync";

@injectable()
export class SqsEventBus implements EventBusAsync {
  readonly sqsUrl: string;
  private sqs: AWS.SQS;

  constructor() {
    this.sqsUrl = process.env.SQS_COUPON_CREATED;
    this.sqs = new AWS.SQS({ apiVersion: "2012-11-05" });
  }

  async publish<T extends Event>(events: T[]): Promise<void> {
    const promises: Array<Promise<any>> = [];
    events.forEach((event) => {
      const eventData = JSON.stringify(event.toDTO());
      const params = {
        MessageBody: eventData,
        QueueUrl:
          "https://sqs.eu-west-1.amazonaws.com/311488814345/sqs-coupon-created",
      };
      promises.push(this.sqs.sendMessage(params).promise());
    });

    await Promise.all(promises);
  }
}
