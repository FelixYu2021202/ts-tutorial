/// <reference path="./allowJSON.d.ts" />
import json from "json!asdf"; // it matches "json!*"
json.toString(); // pass
!!(json as boolean); // pass
(json as number).toFixed(10); // pass
(json as Array<string>).reverse(); // pass
(json["1234"]["asdf"] as Array<string>).concat([]); // all pass