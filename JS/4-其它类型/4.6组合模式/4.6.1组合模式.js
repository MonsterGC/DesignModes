const macroCommand = function () {
    return {
        lists: [],
        add: function (task) {
            this.lists.push(task);
        },
        execute: function () {
            // ①：组合对象调用这里的 execute，
            for (let i = 0; i < this.lists.length; i++) {
                this.lists[i].execute();
            }
        }
    };
};

const command1 = macroCommand(); // 基本对象

command1.add({
    execute: () => console.log('煮咖啡') // ②：基本对象调用这里的 execute，
});

const command2 = macroCommand(); // 组合对象

command2.add({
    execute: () => console.log('打开电视')
});

command2.add({
    execute: () => console.log('打开音响')
});

const command3 = macroCommand();

command3.add({
    execute: () => console.log('打开空调')
});

command3.add({
    execute: () => console.log('打开电脑')
});

const macroComm = macroCommand();
macroComm.add(command1);
macroComm.add(command2);
macroComm.add(command3);

macroComm.execute();

  // 煮咖啡
  // 打开电视
  // 打开音响
  // 打开空调
  // 打开电脑