"use strict";
const core_module_1 = require("../core/core.module");
const default_application_configurator_core_1 = require("../default-configuration/default-application-configurator.core");
const default_injector_configurator_core_1 = require("../default-configuration/default-injector-configurator.core");
var applicationConfigurator = new default_application_configurator_core_1.DefaultApplicationConfigurator();
var injectorConfigurator = new default_injector_configurator_core_1.DefaultInjectorConfigurator();
core_module_1.ApplicationLoader.instance.loadApp(applicationConfigurator, injectorConfigurator);
//# sourceMappingURL=index.js.map