import { StringValueObject } from '../../../shared/domain/valueObject/StringValueObject';

export class CouponId extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureValidCoupon(value);
  }

  static random(): string {
    return Math.floor(Math.random() * 99999 + 1).toString();
  }

  private ensureValidCoupon(value: string) {
    if (value.length !== 5) {
      throw new Error('Invalid coupon format');
    }
  }
}
