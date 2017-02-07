import { ApplicationLoader } from "../core/core.module";
import { DefaultApplicationConfigurator } from "../default-configuration/default-application-configurator.core";
import { DefaultInjectorConfigurator } from "../default-configuration/default-injector-configurator.core";

var applicationConfigurator = new DefaultApplicationConfigurator();
var injectorConfigurator = new DefaultInjectorConfigurator();

ApplicationLoader.instance.loadApp(applicationConfigurator, injectorConfigurator);