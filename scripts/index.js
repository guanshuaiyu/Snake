window.onload = function(){
	var 
	snake = [{x:0,y:0},{x:0,y:1},{x:0,y:2}], 
	RIGHT = 39,LEFT = 37,UP = 38,DOWN = 40, 
	defaultDirection = RIGHT,kkkk=false;
	MAXSNAKE =100,ROW = 10,
	zhe = document.getElementById('zhezhao'),
	zhao = document.getElementById('zhezhao1'),
	b1 = document.getElementById('b1'),
	b2 = document.getElementById('b2'),
	pause = document.getElementById('zhezhao2'),
	isInSnake = function(x,y){
		for (var i = 0; i < snake.length; i++) {
		if(snake[i].x == x && snake[i].y == y){return true;}
		}return false;
	},
	random = function(){return Math.floor(Math.random()*ROW);},
	$ = function(id){return document.getElementById(id);},
	join = function(f,s){return f +'_'+s;},
	dropFood = function(){
		var x=random(); y=random();
			//当蛇的数据占满整个页面的时候会陷入死循环;
		if(snake.length == MAXSNAKE){
			zhao.style.display = 'block';
			zhao.style.zIndex = '100';
			b2.onclick = function(){window.location.reload();};
			return null;}
		while(isInSnake(x,y)){x=random(); y=random();}
		// $(join(x,y)).style.background= 'white';
		$(join(x,y)).style.backgroundImage= 'url(./image/a.png)';
		$(join(x,y)).style.backgroundSize= 'cover';

		return {x:x,y:y};
	},
	food = dropFood();
 	(function(){
		for (var i = 0; i < snake.length; i++) {
			// $(join(snake[i].x,snake[i].y)).style.background = 'green';
			$(join(snake[i].x,snake[i].y)).style.background= 'url(./image/shetou.jpg) no-repeat center center';
			$(join(snake[i].x,snake[i].y)).style.backgroundSize= "contain ";
		}
	})();
	 zou = function(){	  	
		var last = snake[snake.length-1],newHead,weiba;
		if(defaultDirection==LEFT){newHead = {x:last.x,y:last.y-1};}
		if(defaultDirection==RIGHT){newHead = {x:last.x,y:last.y+1};}
		if(defaultDirection==UP){newHead = {x:last.x-1,y:last.y};}
		if(defaultDirection==DOWN){newHead = {x:last.x+1,y:last.y};}
		if (newHead.x > 9||newHead.x < 0||newHead.y > 9||newHead.y < 0){
			zhe.style.display = 'block';
			zhe.style.zIndex = '100';
			b1.onclick = function(){window.location.reload();};
			return null;}
		if(isInSnake(newHead.x,newHead.y)){
			zhe.style.display = 'block';
			zhe.style.zIndex = '100';
			b1.onclick = function(){window.location.reload();};
			return null;}
		snake.push(newHead);
		if (newHead.x == food.x && newHead.y == food.y){
			$(join(food.x,food.y)).style.background='url(./image/shetou.jpg) no-repeat center center';
			$(join(food.x,food.y)).style.backgroundSize= "contain ";
			$(join(food.x,food.y)).style.webkitTransform='scale(1.2,1.2)';
			$(join(food.x,food.y)).style.borderRadius='50%';
			food=dropFood(); return null;
		}
		weiba = snake.shift();
		$(join(weiba.x,weiba.y)).style.background='white';
		$(join(weiba.x,weiba.y)).style.webkitTransform='scale(1,1)';
		$(join(weiba.x,weiba.y)).style.borderRadius='0px';
		$(join(newHead.x,newHead.y)).style.background='url(./image/shetou.jpg) no-repeat center center';
		$(join(newHead.x,newHead.y)).style.backgroundSize= "contain ";

		return null;
		};
		 var aa=true, time=800, cc = true;
	document.onkeydown = function(e){
		e.preventDefault();
		var direction = e.keyCode;
	 	if (aa) {
			if(direction == DOWN||direction == RIGHT){
				defaultDirection=direction;
				t=setInterval(zou,time);
				aa=false;
				kkkk=true;
			}
	 	}
		if((direction == LEFT||direction == RIGHT||direction == UP||direction == DOWN)&&Math.abs(direction-defaultDirection)!==2){ defaultDirection=direction;}
		var dd = function(){
			if (!cc) {clearInterval(t);t=setInterval(zou,time);pause.style.display = 'none';cc= true;kkkk=true;}
			else{
				if(direction == 32){
					clearInterval(t);
					cc= false;
					pause.style.display = 'block';
					pause.style.zIndex = '100';
					kkkk=false;
				}
			}
		};dd();
window.onblur=function(){
//失去焦点
    clearInterval(t);
}
window.onfocus = function(){
//得到焦点
    if (pause.style.display = 'block') {
    	return;
    }else{
        t = setInterval(zou,time);
    }
}
	}
	if (kkkk) {	
		var ss = function(){
			time-=50;
			clearInterval(t);	
			t=setInterval(zou,time);
		};
		setInterval(ss,10000);
	}








// var kaiguan = true;
// document.onclick = function(){
// 	if(kaiguan){
// 		alert(1);
//		kaiguan=false;
// 	}else{
// 		alert(2);
//		kaiguan=true;
// 	}	
// };

// var arr = [{x:0,y:0},{x:0,y:1},{x:0,y:2}];
// var fn = function(){
// 	arr.shift();
// 	var c = {};
	// c.x = arr[arr.length-1].x;
	// c.y = arr[arr.length-1].y+1;
// 	arr.push(c);
// };
// fn();
// fn();
// console.log(arr);

//while循环的一种用法
// var iskongzuowei = function(x,y){
// 	return (x==2&&y==0)?true:false;
// };
// var dianming = function(){
// 	var x =Math.floor(Math.random()*5),
// 	y = Math.floor(Math.random()*10);
// 	while(iskongzuowei(x,y)){
// 		x =Math.floor(Math.random()*5);
// 		y = Math.floor(Math.random()*10);
// 	}
// 	return {x:x,y:y};
// };console.log(dianming());

//--------
// var da = [{a:1,b:2},{a:3,b:5},{a:12,b:16}];
// var aaaaa = function(x,y){
// for (var i = 0; i < da.length; i++) {
	// if(da[i].a==x&&da[i].b==y){
	// 	return true;
	// }
// };return false;
// };
// console.log(aaaaa(3,5));
//如果数组中有a:3,b:5就返回true,否则返回false
}

//9
// var isPalindrome = function(x) {
//    if(x<0){return false;}
//     var sum=0,sum1=0,base=1;   
//    while(x/base>=10){
//        base*=10;
//    }
//    while(x){
//         sum=x%10;
//         sum1=Math.floor(x/base);
//         if(sum!=sum1){return false;}
//         x -= base * sum1;
//         base /= 100;
//         x =Math.floor(x/10);
//     }
//     return true;
// };