# Contents
1. basic types:
    + [basic type](https://github.com/yufeixian/ts-tutorial/blob/master/01BasicTypes/basicTypes.ts)
        boolean: 1
        number: 6
        string: 15
        array: 22
        tuple: 27
        enum: 37
        any: 63
        void: 71
        never: 81
        object: 93

2. variable declaring:
    + [variable declaring](https://github.com/yufeixian/ts-tutorial/blob/master/02VariableDeclaring/variableDeclaring.ts)
        var: 1
        var scoping: 16
        let: 25
        const: 39
        destructing: 56
        spreading: 75

3. types:
    + [class](https://github.com/yufeixian/ts-tutorial/blob/master/03Types/class.ts)
        class: 1
        extending: 13
        ES private keyword: 25
        public, private and protected: 38
        constructor parameter property readonly: 58
        accessors: 70
        static: 89
        abstract" 101
        interfaces-implements class: 121
    + [enum](https://github.com/yufeixian/ts-tutorial/blob/master/03Types/enum.ts)
        number enum: 1
        string enum: 6
        mixed enum: 18
        use enums as types: 30
        silly bugs finding: 37
        get enum keys: 46
        amient enum: 52
    + [function](https://github.com/yufeixian/ts-tutorial/blob/master/03Types/function.ts)
        simple function: 1
        type function: 7
        arrow function: 13
        arrow type function: 17
        optional, default and rest parameters: 22
        'this' and arrow function: 37
        overloads: 61
    + [generic function](https://github.com/yufeixian/ts-tutorial/blob/master/03Types/generic.ts)
        converting: 1
        step 1: 3
        step 2: 9
        step 3: 15
        generic type extends: 21
        generic type class: 28
    + [interface](https://github.com/yufeixian/ts-tutorial/blob/master/03Types/interface.ts)
        required member: 1
        optional member: 15
        readonly member: 30
            ReadonlyArray: 47
        assertion: 51
        function interface: 57
        indexer: 66
        type indexer: 72
        class interface: 78

4. type operations:
    + [compatibilities](https://github.com/yufeixian/ts-tutorial/blob/master/04TypeOperations/typeCompatibilities.ts)
        type compatibilities: 1
        function type compatibilities: 15
        rest and optional parameters: 31
        enum type compatibilities: 38
        generics type cmopatibilities: 43
    + [inference](https://github.com/yufeixian/ts-tutorial/blob/master/04TypeOperations/typeInference.ts)
        type inference: 1
        basic inference: 3
        best common type: 7
    + [intersection](https://github.com/yufeixian/ts-tutorial/blob/master/04TypeOperations/typeIntersection.ts)
        intersection type: 1

5. advanced types:
    + [advanced types](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/advancedTypes.ts)
        intersection type: 1
        union type: 7
        type guard: 11
        type perdict: 19
        'in' keyword: 26
        'typeof' keyword: 32
        'instanceof' keyword: 37
        nullable types: 44
        value types: 50
        enum member type: 59
        this type: 69
        indexer type: 75
            example: 76
            answer: 82
        mapped type: 88
        conditional type: 94
        'infer' keyword: 117
        multiple type inference: 122
        predefined types in lib.d.ts: 142
            1. Partial: 144
            2. Required: 150
            3. Readonly: 157
            4. Pick: 163
            5. Record: 171
            6. Exclude: 175
            7. Omit: 179
            8. NonNullable: 187
            9. Parameters 191
            10. ConstructorParameters: 195
            11. Retrun Type: 199
            12. InstanceType: 206
            13. ThisParameterType: 210
            14. OmitThisParameter: 214
    + [iterator and generator](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/iteratorAndGenerator.ts)
        iterator: 1
        runners: 3
            1. '...': 5
            2. for in: 11
            3. for of: 17
            4. custom '.next': 23
        generators: 34
    + [symbol](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/symbol.ts)
        symbols: 1
        with description: 5
        Symbol.for: 14
        Symbol.keyFor: 20
        well-known symbols: 24
            1. hasInstance: 26
            2. inConcatSpreadable: 38
            3. iterator: 47
            4. match: 49
            5. replace: 57
            6. search: 65
            7. species: 73
            8. split: 75
            9. primitive: 84
            10. toStringTag: 98
            11. unscopables: 105
    + decorator:
        - [decorator](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/decorator/decorator.ts)
            basic decorator: 4
            meta data: 22
    + triple-slash:
        - [`///<reference path="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/triple-slash/reference-path.ts)
            `///<reference path="..."/>`: 1
        - [`///<reference lib="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/triple-slash/reference-lib.ts)
            `///<reference path="..."/>`: 1
        - [`///<reference types="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancecdTypes/triple-slash/reference-types.ts)
            `///<reference types="...">`: 1
        - [`///<amd-module name="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/triple-slash/AsyncModuleDefinition/moduleIn.ts)
            `///<amd-module name="..">`: 1
        - [`///<amd-dependency path="..." name="..."/>`](https://github.com/yufeixian/ts-tutorial/blob/master/05AdvancedTypes/triple-slash/AsyncModuleDefinition/moduleOut.ts)
            `///<amd-dependency path="..." name="...">`: 1

6. Namespaces and modules
    + simple import and exports
        - [export statement](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/01SimpleImportAndExport/animal.ts)
            export while declaring: 1
            export statement: 41
            export alias: 43
        - [namespace import and default export](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/01SimpleImportAndExport/zoo.ts)
            import statement: 1
            import as namespace: 2
            export default: 6
        - [re-export and namespace import with default](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/01SimpleImportAndExports/zooOpener.ts)
            re-export: 1
            import as namespace with default: 7
        - [side effect and type import](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/01SimpleImportAndExport/zooOpener2.ts)
            type import: 1
            side effect import: 4
        - [default export literal](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/01SimpleImportAndExport/zoos.ts)
            import default alias: 1
            export default literal: 3
    + CommonJS module
        - [`export = ...`](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/02CommonJs/export.ts)
            `export = ...`: 1
        - [`import ... = require("...")`](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/02CommonJs/import.ts)
            `import ... = require("...")`: 1
    + Ambient module
        - [declaring](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/03Ambient/ambientModule.d.ts)
            ambient module: 1
        - [using](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/03Ambient/user.ts)
            import from ambient module: 3
        - shorthand ambient module
            * [declaring](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/04ShorthandAmbient/shorthandAmbient.d.ts)
                shorthand ambient module: 1
            * [using](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/04ShorthandAmbient/calculator.ts)
                import from shorthand ambient module: 1
        - wildchar module
            * [declaring](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/05WildcharAmbient/allowJSON.d.ts)
                wildchar module: 1
            * [using](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/05WildcharAmbient/user.ts)
                use wildchar module: 2

    + Universal Module Definition
        - [declaring using `export as ...`](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/06UniversalModuleDefinition/declaration.d.ts)
            declare using `export as ...`: 2 
        - [use import in module](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/06UniversalModuleDefinition/module.ts)
            use import: 3
        - [use UMD global in script](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/06UniversalModuleDefinition/script.ts)
            use UMD global: 3

    + Namespacing
        - [the old un-scoped module](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/07SimpleNamespace/old.ts)
        - [the new tidied scoped module](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/07SimpleNamespace/new.ts)

    + Namespace Merging
        - [me](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/08NamespaceMerging/basic.ts)[rg](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/08NamespaceMerging/get.ts)[ing](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/08NamespaceMerging/moreThings.ts)
        - [use](https://github.com/yufeixian/ts-tutorial/blob/master/06NamespacesAndModules/08NamespaceMerging/user.ts)

7. Others
    + [declaration merging](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/declarationMerging.ts)
        1. Namespace: 14
        2. Class: 26
        3. Interface 38
        4. Enum: 49
        5. Type: 61
        6. Function: 68
        7. Variable: 81
    + TSX
        - [module JSX and intrinsic elements](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/TSX/intrinsicBasic.tsx)
            module JSX: 1
            interface IntrinsicElements: 2
            intrinsic elements: 6
        - [function and class component](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/TSX/functionAndClassComponent.tsx)
            module Element: 5
            function component: 15
            class component: 21
        - [attribute type](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/TSX/attributeType.tsx)
            module ElementAttributesProperty: 2
            attribute types: 18
        - [children type](https://github.com/yufeixian/ts-tutorial/blob/master/07Others/TSX/childrenType.tsx)
            module ElementChildrenAttribute: 2
            descriptor of children: 10

###### Tip:

1. the codes with jsdoc are suggested to be copied or downloaded to real ts files in order to view them. (download link: yufeixian.github.io/ts-tutorial)
