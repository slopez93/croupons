import "reflect-metadata";
import { Container } from "inversify";
import { UserContainer } from "./Users";
import { CouponsContainer } from "./Coupons";

const container = new Container();
const containerModules = [UserContainer, CouponsContainer];
for (const reg of containerModules) {
  new reg().register(container);
}

export default container;
