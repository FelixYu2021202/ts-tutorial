export = { // ts can model commonJs modules, all the 'module.exports = ' are changed to 'export = '
    print(...datas: [string, ...Array<any>]) { // this means: first member is string and others don't care
        console.log(...datas);
    }
}