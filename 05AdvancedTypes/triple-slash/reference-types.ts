/// <reference types="node" />
// this is similar to reference path, it works just like <reference path="../"some path"/node_module/@types/"/>
// and... Play!

import assert from "assert";
assert(false, 'error!');
assert(true, 'error!'); // mmm, unreachable
