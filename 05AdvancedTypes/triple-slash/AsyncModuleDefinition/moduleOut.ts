///<amd-dependency path="./moduleIn.ts" name="moduleIn" />
/**
 * Compiled result:
 * ```js
 * define(["require", "exports", "./moduleIn.ts"], function(require, exports, moduleIn) {
 *     moduleIn.a.slice(1, 2);
 * })
 * ```
 */
declare var moduleIn: typeof import("./moduleIn");

moduleIn.a.slice(1, 2);
