let factory = function (role) {

    function User(obj){
        this.name = obj.name;
        this.role = obj.role;
    }

    switch (role) {
        case 'superman':
            return new User(
                {
                    name = '超级管理员',
                    role = ['修改密码', '发布消息', '查看主页']
                }
            );
            break;
        case 'man':
            return new User(
                {
                    name = '普通游客',
                    role = ['查看主页']
                }
            );
            break;
        default:
            throw new Error('参数错误')
    }

}

let superman = factory('superman');
let man = factory('man');