import { Container } from "typescript-ioc";
import { DependencyConfigurator } from "./startup";
import { NumberListPrinter } from "./common";

DependencyConfigurator.configure();
var printer = Container.get(NumberListPrinter);
printer.print(100);