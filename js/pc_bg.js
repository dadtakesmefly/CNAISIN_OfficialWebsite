/**
 * Created by cnaisin06 on 2017/7/4.
 */
$(function () {
    //canvas背景
    class Circle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.r = Math.random() * 10 ;
            this._mx = Math.random() ;
            this._my = Math.random() ;

        }
        drawCircle(ctx) {
            ctx.beginPath();
            //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
            ctx.arc(this.x, this.y, this.r, 0, 360)
            ctx.closePath();
            ctx.fillStyle = 'rgba(243, 243, 243, 0.8)';
            ctx.fill();
        }

        drawLine(ctx, _circle) {
            var dx = this.x - _circle.x;
            var dy = this.y - _circle.y;
            var d = Math.sqrt(dx * dx + dy * dy)
            if (d < 150) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);   //起始点
                ctx.lineTo(_circle.x, _circle.y);   //终点
                ctx.closePath();
                ctx.strokeStyle = 'rgba(243, 243, 243, 0.8)';
                ctx.stroke();
            }
        }

        // 圆圈移动
        // 圆圈移动的距离必须在屏幕范围内
        move(w, h) {
            this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
            this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);
            this.x += this._mx / 2;
            this.y += this._my / 2;
        }
    }
//鼠标点画圆闪烁变动
    class currentCirle extends Circle {
        constructor(x, y) {
            super(x, y)
        }

        drawCircle(ctx) {
            //ctx.beginPath();
            ////注释内容为鼠标焦点的地方圆圈半径变化
            ////this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
            //this.r = 8;
            //ctx.arc(this.x, this.y, this.r, 0, 360);
            //ctx.closePath();
            ////ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
            //ctx.fillStyle = 'rgba(255, 77, 54, 0.6)'
            //ctx.fill();

        }
    }
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var canvas = document.getElementById('canvas_two');
    var ctx = canvas.getContext('2d');
    var w = canvas.width = canvas.offsetWidth;
    var h = canvas.height = canvas.offsetHeight;
    var circles = [];
    var current_circle = new currentCirle(0, 0)
    var draw = function () {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < circles.length; i++) {
            circles[i].move(w, h);
            circles[i].drawCircle(ctx);
            for (j = i + 1; j < circles.length; j++) {
                circles[i].drawLine(ctx, circles[j])
            }
        }
        if (current_circle.x) {
            current_circle.drawCircle(ctx);
            for (var k = 1; k < circles.length; k++) {
                current_circle.drawLine(ctx, circles[k])
            }
        }
        requestAnimationFrame(draw)
    }

    var init = function (num) {
        for (var i = 0; i < num; i++) {
            circles.push(new Circle(Math.random() * w, Math.random() * h));
        }
        draw();
    }
    window.addEventListener('load', init(60));

    //window.onmousemove = function (e) {
    //    e = e || window.event;
    //    current_circle.x = e.clientX;
    //    current_circle.y = e.clientY;
    //}
    //window.onmouseout = function () {
    //    current_circle.x = null;
    //    current_circle.y = null;
    //
    //};
})

$(function () {
    class Circle {

        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.r = Math.random() * 10 ;
            this._mx = Math.random() ;
            this._my = Math.random() ;

        }
        drawCircle(ctx) {
            ctx.beginPath();
            //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
            ctx.arc(this.x, this.y, this.r, 0, 360)
            ctx.closePath();
            ctx.fillStyle = 'rgba(243, 243, 243, 0.8)';
            ctx.fill();
        }
        drawLine(ctx, _circle) {
            var dx = this.x - _circle.x;
            var dy = this.y - _circle.y;
            var d = Math.sqrt(dx * dx + dy * dy)
            if (d < 150) {
                ctx.beginPath();
                //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
                ctx.moveTo(this.x, this.y);   //起始点
                ctx.lineTo(_circle.x, _circle.y);   //终点
                ctx.closePath();
                ctx.strokeStyle = 'rgba(243, 243, 243, 0.8)';
                ctx.stroke();
            }
        }
        move(w, h) {
            this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
            this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);
            this.x += this._mx / 2;
            this.y += this._my / 2;
        }
    }
//鼠标点画圆闪烁变动
    class currentCirle extends Circle {
        constructor(x, y) {
            super(x, y)
        }
        drawCircle(ctx) {
            //ctx.beginPath();
            ////注释内容为鼠标焦点的地方圆圈半径变化
            ////this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
            //this.r = 8;
            //ctx.arc(this.x, this.y, this.r, 0, 360);
            //ctx.closePath();
            ////ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
            //ctx.fillStyle = 'rgba(255, 77, 54, 0.6)'
            //ctx.fill();

        }
    }

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var canvas = document.getElementById('canvas_four');
    var ctx = canvas.getContext('2d');
    var w = canvas.width = canvas.offsetWidth;
    var h = canvas.height = canvas.offsetHeight;
    var circles = [];
    var current_circle = new currentCirle(0, 0)
    var draw = function () {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < circles.length; i++) {
            circles[i].move(w, h);
            circles[i].drawCircle(ctx);
            for (j = i + 1; j < circles.length; j++) {
                circles[i].drawLine(ctx, circles[j])
            }
        }
        if (current_circle.x) {
            current_circle.drawCircle(ctx);
            for (var k = 1; k < circles.length; k++) {
                current_circle.drawLine(ctx, circles[k])
            }
        }
        requestAnimationFrame(draw)
    }

    var init = function (num) {
        for (var i = 0; i < num; i++) {
            circles.push(new Circle(Math.random() * w, Math.random() * h));
        }
        draw();
    }
    window.addEventListener('load', init(60));
    //window.onmousemove = function (e) {
    //    e = e || window.event;
    //    current_circle.x = e.clientX;
    //    current_circle.y = e.clientY;
    //}
    //window.onmouseout = function () {
    //    current_circle.x = null;
    //    current_circle.y = null;
    //
    //};
})
