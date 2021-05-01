import { Singleton } from "typescript-ioc";
import { NumberReplacementHandlerFactory, NumberReplacementHandler, NumberByDefaultHandler } from "../common";
import { FizzForThreeHandler, BuzzForFiveHandler, FizzBuzzForThreeFiveHandler } from "./handlers";

@Singleton
export class FizzBuzzHandlersFactory implements NumberReplacementHandlerFactory {
  public create(): NumberReplacementHandler[] {
    return [
        new FizzBuzzForThreeFiveHandler(),
        new FizzForThreeHandler(),
        new BuzzForFiveHandler(),
        new NumberByDefaultHandler()
    ];
  }
}
