import HtmlConfig, { Options as HtmlConfigOptions, IHTMLTag} from "vite-plugin-html-config";

type NewHtmlConfigOptions = {
  [k in keyof HtmlConfigOptions]: Array<string | IHTMLTag>
}
export function defineHtmlTagConfig(options: NewHtmlConfigOptions) {
  return HtmlConfig(options as any)
}