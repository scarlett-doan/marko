const _marko_template = _t(__filename);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "JSqoVlsR",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  let _item = null;

  if (input.x) {
    _item = {
      "renderBody": (out, y) => {
        out.w(_marko_escapeXml(y));
      }
    };
  }

  _marko_tag(_hello, {
    "item": _item
  }, out, _component, "0");
}, {
  t: _marko_componentType
}, _marko_component);