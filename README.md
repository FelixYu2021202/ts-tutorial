# Contents
1. basic types:
    + [basic type](https://github.com/yufeixian/ts-tutorial/blob/master/01BasicTypes/basicType.ts)

2. variable declaring:
    + [variable declaring](https://github.com/yufeixian/ts-tutorial/blob/master/02VariableDeclaring/variableDeclaring.ts)

3. types:
    + [class](https://github.com/yufeixian/ts-tutorial/blob/master/03Types/class.ts)
    + [enum](https://github.com/yufeixian/ts-tutorial/blob/master/03Types/enum.ts)
    + [function](https://github.com/yufeixian/ts-tutorial/blob/master/03Types/function.ts)
    + [generic function](https://github.com/yufeixian/ts-tutorial/blob/master/03Types/generic.ts)
    + [interface](https://github.com/yufeixian/ts-tutorial/blob/master/03Type/interface.ts)

4. type operations:
    + [compatibilities](https://github.com/yufeixian/ts-tutorial/blob/master/04TypeOperations/typeCompatibilities.ts)
    + [inference](https://github.com/yufeixian/ts-tutorial/blob/master/04TypeOperations/typeInference.ts)
    + [intersection](https://github.com/yufeixian/ts-tutorial/blob/master/04TypeOperations/typeIntersections.ts)

5. advanced types:
    + [advanced types](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/advancedTypes.ts)
    + [iterator and generator](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/iteratorAndGenerator.ts)
    + [symbol](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/symbol.ts)
    + decorator:
        - [decorator](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/decorator/decorator.ts)
    + triple-slash:
        - [`///<reference path="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedType/triple-slash/reference-path.ts)
        - [`///<reference lib="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedType/triple-slash/reference-lib.ts)
        - [`///<reference type="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancecdType/triple-slash/reference-type.ts)
        - [`///<amd-module name="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedType/triple-slash/AsyncModuleDefinition/moduleIn.ts)
        - [`///<amd-dependency path="..." name="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedType/triple-slash/AsyncModuleDefinition/moduleOut.ts)

6. Namespaces and modules
    + simple import and exports(based on zoo)
        - [export statement](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModule/01SimpleImportAndExport/animal.ts)
        - [namespace import and default export](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/01SimpleImportAndExport/zoo.ts)
        - [re-export and namespace import with default](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/01SimpleImportAndExports/zooOpener.ts)
        - [side effect and type import](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/01SimpleImportAndExports/zooOpener2.ts)
        - [default export literal](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/01SimpleImportAndExports/zoos.ts)
    + CommonJS module
        - [`export = ...`](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/02CommonJs/export.ts)
        - [`import ... = require("...")`](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/02CommonJs/import.ts)
    + Ambient module
        - [declaring](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/03Ambient/ambientModule.d.ts)
        - [using](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/03Ambient/user.ts)
        - shorthand
            * [declaring](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/04ShortandAmbient/shortandAmbient.d.ts)
            * [using](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/04ShortandAmbient/calculator.ts)
        - wildchar
            * [declaring](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/05WildcharAmbient/allowJSON.d.ts)
            * [using](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/05WildcharAmbient/user.ts)

    + Universal Module Definition
        - [declaring using `export as ...`](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/06UniversalModuleDefinition/declaration.d.ts)
        - [use import in module](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/06UniversalModuleDifinition/module.ts)
        - [use UMD global in script](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/06UniversalModuleDefinition/script.ts)

    + Namespacing
        - [the old un-scoped module](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/07SimpleNamespace/old.ts)
        - [the new tidied scoped module](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/07SimpleNamespace/new.ts)

    + Namespace Merging
        - [me](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/08NamespaceMerging/basic.ts)[rg](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/08NamespaceMerging/get.ts)[ing](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/08NamespaceMerging/moreThings.ts)
        - [use](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/08NamespaceMerging/user.ts)

7. Others
    + [declaration merging](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/declarationMerging.ts)
    + TSX
        - [module JSX and intrinsic elements](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/TSX/intrinsicBasic.tsx)
        - [function and class component](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/TSX/functionAndClassComponent.tsx)
        - [attribute type](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/TSX/attributeType.tsx)
        - [children type](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/TSX/childrenType.tsx)
