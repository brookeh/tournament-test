
import { Container, Scope, } from "typescript-ioc";
import { Logger, ConsoleLogger, NumberListPrinter } from "../common";
import { FizzBuzzPrinter } from "../fizzbuzz";

export class DependencyConfigurator {
  public static configure(): void {
    Container.bind(Logger).to(ConsoleLogger).scope(Scope.Singleton);
    Container.bind(NumberListPrinter).to(FizzBuzzPrinter).scope(Scope.Singleton);
  }
}