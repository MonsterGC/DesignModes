const setCommand = function (button, command) {
    button.onclick = function () {
        command.execute();
    };
};

// 行为列表
const menu = {
    updateMenu() {
        console.log('更新菜单')
    },
    createMenu() {
        console.log('创建菜单')
    }
};

// 执行命令
const command = function (receive, command) {
    return {
        execute: receive[command]
    };
};
// 创建命令
const updateCommandMenu = command(menu, 'updateMenu');
const createCommandMenu = command(menu, 'createMenu');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// 设置命令
setCommand(button1, updateCommandMenu)
setCommand(button2, createCommandMenu)