import { createI18n } from "vue-i18n";

const modules = import.meta.globEager("./**/*.json");
const locales: Record<
  string,
  {
    [key: string]: any;
  }
> = {};
Object.entries(modules).forEach(([path, definition]) => {
  const moduleName = path
    .split("/")
    .pop()
    ?.replace(/\.\w+$/, "");
  if (!moduleName) {
    return;
  }
  locales[moduleName] = definition.default;
});

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: locales,
});
