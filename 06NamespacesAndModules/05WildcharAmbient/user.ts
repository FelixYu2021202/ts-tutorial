/// <reference path="./allowJSON.d.ts" />
import json from "json!asdf";
json.toString(); // pass
!!(json as boolean); // pass
(json as number).toFixed(10); // pass
(json as Array<string>).reverse(); // pass