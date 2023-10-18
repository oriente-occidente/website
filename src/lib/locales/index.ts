import en from "./labels-en";
import it from "./labels-it";

const strings: any = { en, it };

function translate(label: string, locale: string = "it") {
  let text = "-";
  if (strings[locale] && strings[locale][label]) {
    text = strings[locale][label];
  }
  return text;
}

export default translate;
