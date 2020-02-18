var each = function (arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        fun(i, arr[i])
    }
}

each([1231, 123, 13123, 123, 1, 4, 2, 312, 3], function (index, value) {
    console.log('index=', index, '=>value=', value)
})