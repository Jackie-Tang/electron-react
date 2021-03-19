var path = require("path");
var fs = require("fs");

export class FsWebpackPlugin {
    constructor(_workSpace) {
        this.workSpace = _workSpace ? _workSpace : process.cwd();
    }
    getFilePath(_path, _isAbsolutePath) {
        if (_isAbsolutePath) return _path;
        var aux = (_path.substr(0, 1) == "/" || _path.substr(0, 1) == "\\") ? "." : "";
        var filePath = path.join(this.workSpace, aux + _path);
        return path.normalize(filePath);
    }
    existsFile(_name, _isAbsolutePath) {
        return fs.existsSync(this.getFilePath(_name, _isAbsolutePath));
    }
    existsPath(_name, _isAbsolutePath) {
        return fs.existsSync(this.getFilePath(_name, _isAbsolutePath)).isDirectory();
    }
    //设置工作空间
    setWorkSpace(_workSpace) {
        this.workSpace = _workSpace ? _workSpace : process.cwd();
    }
    getWorkSpace() {
        return this.workSpace;
    }
    copyPat(_from, _to, _isAbsolutePath) {
        var _from = this.getFilePath(_from, _isAbsolutePath);
        var _to = this.getFilePath(_to, _isAbsolutePath);
        if (!fs.existsSync(_from)) return [];
        if (!fs.existsSync(_to + path.sep)) fs.mkdirSync(_to + path.sep);
        var fileArr = [];
        var readDir = fs.readdirSync(_from);
        readDir.forEach(function (fileName) {
            var pathFromStr = path.join(_from, fileName);
            var pathToStr = path.join(_to, fileName);
            var statInfo = fs.statSync(pathFromStr);
            if (statInfo.isFile()) {
                fileArr.push(pathFromStr);
                fs.writeFileSync(pathToStr, fs.readFileSync(pathFromStr));
            } else if (statInfo.isDirectory()) {
                fileArr.push(pathFromStr + path.sep);
                if (!fs.existsSync(pathToStr)) {
                    fs.mkdirSync(pathToStr);
                }
                fileArr = fileArr.concat(readPath(pathFromStr, pathToStr));
            }
        })
        return fileArr;
    }
    copyFile(_from, _to, _isAbsolutePath) {
        var fromPath = this.getFilePath(_from, _isAbsolutePath);
        var toPath = this.getFilePath(_to, _isAbsolutePath);
        fs.writeFileSync(toPath, fs.readFileSync(fromPath));
    }
    readFile(_fileName, _code, _isAbsolutePath) {
        return fs.readFileSync(this.getFilePath(_fileName, _isAbsolutePath), _code);
    }
    readDir(_filepath, _isAbsolutePath) {
        return fs.readdirSync(this.getFilePath(_filepath, _isAbsolutePath));
    }
    mkdirs(dirname, _isAbsolutePath) {
        var pathFull = this.getFilePath(dirname, _isAbsolutePath);
        var pathObj = path.parse(pathFull);
        var pathStr = pathObj.dir.substr(pathObj.root.length);
        var pathStrArr = pathStr.split(path.sep);
        var currentPath = pathObj.root;
        pathStrArr.forEach(pathItem => {
            if (!pathItem) return;
            currentPath += pathItem + path.sep;
            var result = fs.existsSync(currentPath);
            if (!result) {
                fs.mkdirSync(currentPath);
            }
        });
    }
    fileState(_file, _isAbsolutePath) {
        return fs.statSync(this.getFilePath(_file, _isAbsolutePath));
    }
    writeFile(_fileName, _content, _isAbsolutePath) {
        var filePath = this.getFilePath(_fileName, _isAbsolutePath);
        this.mkdirs(filePath, true);
        var fileId = fs.openSync(filePath, "w");
        var reslut = fs.writeFileSync(fileId, _content)
        fs.closeSync(fileId);
        return reslut;
    }
    findFile(_path, _filter, _isAbsolutePath) {
        var _path = this.getFilePath(_path, _isAbsolutePath);
        var fileArr = [];
        if (!fs.existsSync(_path)) return fileArr;
        var readDir = fs.readdirSync(_path);
        readDir.forEach(function (fileName) {
            var pathFileStr = path.join(_path, fileName);
            var statInfo = fs.statSync(pathFileStr);
            if (statInfo.isFile()) {
                if (_filter && _filter.test && _filter.test(pathFileStr)) {
                    fileArr.push(pathFileStr);
                } else {
                    fileArr.push(pathFileStr);
                }
            } else if (statInfo.isDirectory()) {
                fileArr = fileArr.concat(readPath(pathFileStr));
            }
        });
        return fileArr;
    }
    deletePath(_path, _isAbsolutePath) {
        var files = [];
        if (fs.existsSync(_path)) {
            files = fs.readdirSync(_path);
            files.forEach(function (file, index) {
                var curPath = _path + path.sep + file;
                if (fs.statSync(curPath).isDirectory()) {
                    deleteall(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(_path);
        }
    }
}

export default FsWebpackPlugin;
