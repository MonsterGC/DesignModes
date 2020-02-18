const Folder = function (folder) {
    this.folder = folder;
    this.lists = [];
}

Folder.prototype.add = function (resource) {
    this.lists.push(resource);
};

Folder.prototype.scan = function () {
    console.log('开始扫描文件夹：', this.folder);
    for (let i = 0, folder; folder = this.lists[i++];) {
        folder.scan();
    }
};

const File = function (file) {
    this.file = file;
};

File.prototype.add = function () {
    throw Error('文件下不能添加其它文件夹或文件');
};

File.prototype.scan = function () {
    console.log('开始扫描文件：', this.file);
};

const folder = new Folder('根文件夹');
const folder1 = new Folder('JS');
const folder2 = new Folder('life');

const folder1_1 = new Folder('React');
const folder1_2 = new Folder('权威指南');

const file1 = new File('深入React技术栈.pdf');
const file2 = new File('JavaScript权威指南.pdf');
const file3 = new File('小王子.pdf');


// 根目录里面存在folder1、folder2
folder.add(folder1);
folder.add(folder2);

// folder1里面存在folder1_1、folder1_2
folder1.add(folder1_1);
folder1.add(folder1_2);

// folder1_1里面有file1
folder1_1.add(file1);
// folder1_2里面有file2
folder1_2.add(file2);

// folder2里面存在file3
folder2.add(file3);

folder.scan();