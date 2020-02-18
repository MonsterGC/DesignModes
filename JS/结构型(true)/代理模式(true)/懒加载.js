// 懒加载
var myImage = (function () {
    var imageNode = document.createElement('img');
    document.body.appendChild(imageNode);
    return {
        setSrc: function (src) {
            imageNode.src = src
        }
    }
})();

// 代理
var proxyImage = (function () {
    var img = new Image;
    img.onload = function () {
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            console.log('src', src);
            myImage.setSrc('http://loading.jpg'); // 正在加载的图片
            img.src = src;
        }
    }
})();

proxyImage.setSrc('http://loaded.jpg'); //加载完成的图片