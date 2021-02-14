export class CreateCouponRequest {
  readonly userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }
}
