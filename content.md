# Contents
1. basic types:
    + [basic type](./01BasicType/basicType.ts)

2. variable declaring:
    + [variable declaring](./02VariableDeclaring/variableDeclaring.ts)

3. types:
    + [class](./03Types/class.ts)
    + [enum](./03Types/enum.ts)
    + [function](./03Types/function.ts)
    + [generic function](./03Types/generic.ts)
    + [interface](./03Type/interface.ts)

4. type operations:
    + [compatibilities](./04TypeOperations/typeCompatibilities.ts)
    + [inference](./04TypeOperations/typeInference.ts)
    + [intersection](./04TypeOperations/typeIntersections.ts)

5. advanced types:
    + [advanced types](./05AdvancedTypes/advancedTypes.ts)
    + [iterator and generator](./05AdvancedTypes/iteratorAndGenerator)
    + [symbol](./05AdvancedTypes/iteratorAndGenerator)
    + decorator:
        - [decorator](./05AdvancedTypes/decorator/decorator.ts)
    + triple-slash:
        - [`///<reference path="..."/>`](./05AdvancedType/triple-slash/reference-path.ts)
        - [`///<reference lib="..."/>`](./05AdvancedType/triple-slash/reference-lib.ts)
        - [`///<reference type="..."/>`](./05AdvancecdType/triple-slash/reference-type.ts)
        - [`///<amd-module name="..."/>`](./05AdvancedType/triple-slash/AsyncModuleDefinition/moduleIn.ts)
        - [`///<amd-dependency path="..." name="..."/>`](./05AdvancedType/triple-slash/AsyncModuleDefinition/moduleOut.ts)

6. Namespaces and modules
    + simple import and exports(based on zoo)
        - [export statement](./06NamespacesAndModule/01SimpleImportAndExport/animal.ts)
        - [namespace import and default export](./06NamespacesAndModules/01SimpleImportAndExport/zoo.ts)
        - [re-export and namespace import with default](./06NamespacesAndModules/01SimpleImportAndExports/zooOpener.ts)
        - [side effect and type import](./06NamespacesAndModules/01SimpleImportAndExports/zooOpener2.ts)
        - [default export literal](./06NamespacesAndModules/01SimpleImportAndExports/zoos.ts)
    + CommonJS module
        - [`export = ...`](./06NamespacesAndModules/02CommonJs/export.ts)
        - [`import ... = require("...")`](./06NamespacesAndModules/02CommonJs/import.ts)
    + Ambient module
        - [declaring](./06NamespacesAndModules/03Ambient/ambientModule.d.ts)
        - [using](./06NamespacesAndModules/03Ambient/user.ts)
        - shortand
            * [declaring](./06NamespacesAndModules/04ShortandAmbient/shortandAmbient.d.ts)
            * [using](./06NamespacesAndModules/04ShortandAmbient/calculator.ts)
        - wildchar
            * [declaring](./06NamespacesAndModules/05WildcharAmbient/allowJSON.d.ts)
            * [using](./06NamespacesAndModules/05WildcharAmbient/user.ts)

    + Universal Module Definition
        - [declaring using `export as ...`](./06NamespacesAndModules/06UniversalModuleDefinition/declaration.d.ts)
        - [use import in module](./06NamespacesAndModules/06UniversalModuleDifinition/module.ts)
        - [use UMD global in script](./06NamespacesAndModules/06UniversalModuleDefinition/script.ts)

    + Namespacing
        - [the old un-scoped module](./06NamespacesAndModules/07SimpleNamespace/old.ts)
        - [the new tidied scoped module](./06NamespacesAndModules/07SimpleNamespace)

    + Namespace Merging
        - [me](./06NamespacesAndModules/08NamespaceMerging/basic.ts)[rg](./06NamespacesAndModules/08NamespaceMerging/get.ts)[ing](./06NamespacesAndModules/08NamespaceMerging/moreThings.ts)
        - [use](./06NamespacesAndModules/08NamespaceMerging/user.ts)

7. Others
    + [declaration merging](./07Others/declarationMerging.ts)
    + TSX
        - [module JSX and intrinsic elements](./07Others/TSX/intrinsicBasic.tsx)
        - [function and class component](./07Others/TSX/functionAndClassComponent.tsx)
        - [attribute type](./07Others/TSX/attributeType.tsx)
        - [children type](./07Others/TSX/childrenType.tsx)

<style type="text/css">
    h1 {
        font-size=25px
    }
</style>
