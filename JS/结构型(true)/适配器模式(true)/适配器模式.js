const oldCity = (function () {
    return [
        {
            name: 'ZeroIce',
            id: '0'
        },
        {
            name: 'TW&Ck',
            id: '1'
        }
    ]
})()


const adaptor = function (oldCity) {
    const obj = {};
    if (oldCity != undefined) {
        for (const city of oldCity) {
            obj[city.name] = city.id;
        }
    }
    return obj;
}

/**
 * [
        {
            name: 'ZeroIce',
            id: '0'
        },
        {
            name: 'TW&Ck',
            id: '1'
        }
    ]
    变成
    {
        ZeroIce:0,
        TW&CK:1
    }
 **/