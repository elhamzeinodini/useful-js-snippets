const locales = [
  {
    name: "en",
    code: "English",
  },
  {
    name: "fr",
    code: "French",
  },
].map((lang) => ({
  file: lang.code + ".json",
  ...lang,
}));

for (let locale of locales) {
  console.log(locale.file)
}
