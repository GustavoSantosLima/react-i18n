import { resources } from "./i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: typeof resources["pt"]["translation"];
    };
  }
}
