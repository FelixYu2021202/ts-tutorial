declare module "json!*" { // now we can import anything matches "json!*"
    type JSON = number | string | boolean | Array<JSON> | { [key in string | number]: JSON }
    var JSONObject: JSON;
    export default JSONObject;
}