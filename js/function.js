//兼容函数
//功能：IE8获取类名的方法
//参数说明：classname：要寻找的类名、obj：要寻找的类名的父容器的类名
//str多个类名集合的字符串
//val想找的类名与classname相对应
function getClass(classname,obj){
	var obj=obj||document;
	if(obj.getElementsByClassName){//判断W3C浏览器
		return obj.getElementsByClassName(classname);//结果返回
	}else{//否则是IE8
		var all=obj.getElementsByTagName("*");//用标签名获取所有元素是一个集合
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkRel(all[i].className,classname)){
				arr.push(arr[i]);
			}
		}
		return arr;
	}
}
//"inner one" ["inner,one"]
//str=[inner one]多个类名的集合以后的字符串
//val：想找的类名inner或者one  上边的classname
function checkRel(str,val){//为了辨别str 和val是不是一样的 一样返回true不一样false
	var newarr=str.split(" ");//拆分字符串
	for(var i=0;i<newarr.length;i++){
		if(newarr[i]==val){
			return true;
		}
	}
	return false;
}

/**********************************************************/
//可获取与设置纯文本函数
//obj
function getText(obj,val){
	if(val==undefined){//获取
		if(obj.innerText){//ie8
			return obj.innerText;
		}else{//w3c
			return obj.textContent;
		}
	}else{
		if(obj.innerText||obj.innerText==""){//ie8但浏览器优innertext属性或者当对象的内容为空字符串时都可以给这个对象设置文本
			obj.innerText=val;
		}
		else{//w3c
			obj.textContent=val;
		}
	}
}


/**********************************************************/
//获取样式
//obj:那个对象 attr 属性
//对象.属性  对象["属性"]   
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
else{
	return getComputedStyle(obj,null)[attr];

	}
}

/************************************************************/
/*获取类名ID名和标签名*/
/*$(.box)类名$("#first")ID名$("div")标签*/
function $(select,obj){
	var obj=obj||document;
	if(typeof select=="string"){
		//去掉字符串前后空格
		select=select.replace(/^\s*|\s*$/g,"")
		if(select.charAt(0)=="."){
			return getClass(select.slice(1),obj);
		}
		else if(select.charAt(0)=="#"){
			return obj.getElementById(select.slice(1));
		}
		else if(/^[a-z|1-6]{1,10}$/g.test(select)){
			return obj.getElementsByTagName(select);
		}
			}
		else if(typeof select=="function"){
		//是函数
		window.onload=function(){
			select();
			
		}
	}
}
/************************************************************/
/*5."a"获取元素子节点的兼容函数
"b"回去元素+文本节点
原理：线获取所有的儿子，然后根据
节点的类型判断，如果为1表示为元素节点，保存到数组里。

*/
function getChilds(parent,type){
	var type=type||"a";
	var childs=parent.childNodes;
	var  arr=[];
	for(var i=0;i<childs.length;i++){
		if(type=="a"){
			if(childs[i].nodeType==1){
			arr.push(childs[i]);
			}
		}
		else if(type=="b"){
			if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
			arr.push(childs[i]);
			}
		}
		
	}
	return arr;
}




/*6.获得第一个节点*/
function getFirst(parent){
	return getChilds(parent)[0];
}


/*7.获得最后一个节点*/
function getLast(parent){
	return getChilds(parent)[getChilds(parent).length-1];
}




/*8.获取指定节点*/
function getNum(parent,num){
	return getChilds(parent)[num];
}

/*9获得下一个兄弟节点*/
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.nextSibling;
		if(next==null){
			return false;
		}
	}
	return next;
}



/*10获得上一个接待点*/
function getUp(obj){
	var up=obj.previousSibling;
	if(up==null){//换行空格判断
		return false;
	}
	while(up.nodeType==3||up.nodeType==8){
		up=up.previousSibling;
		if(up==null){
			return false;
		}
	}
	return up;
}
//11.插入到对象之后
//对象.insertBefore(obj1,obj2)
//插入到下一个	
//给对象的原型添加此方法
//obj2:那个对象之后
//obj1：要插入的对象
//原理：找到第二个参数的下一个兄弟节点，将第一个参数插入到次兄弟节点之前（插入到下一个节点之前）
Object.prototype.insertAfter=function(obj1,obj2){
	var next=getNext(obj2);
	if(next){
		this.insertBefore(obj1,next)

	}
	else{
		this.appendChild(obj1);
	}
}



//12获取滚动条与页面顶部的距离

function getScrollT(){
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
	return scrollT;
}





//13 一个元素添加多个事件obj  那个对象   ev：什么事件"click" "dbclick"  fun：事件处理程序
function addEvent(obj,ev,fun){
	if(obj.addEventListener){
		return obj.addEventListener(ev,function(){
			fun.call(obj);
		},false);
	}
	else{
		return obj.attachEvent("on"+ev,function(){
			fun.call(obj);
		});
	}//ie8 this不指当前对象指的是window
}



//14删除事件

function removeEvent(obj,event,fun){
	if(obj.addEventListener){
		return obj.removeEventListener(event,fun,false);
	}
	else{
		return obj.detachEvent("on"+event,fun);
	}//ie8 this不指当前对象指的是window
}

//15获取浏览器宽高
function getCW(){
	return document.documentElement.clientWidth;
}
function getCH(){
	return document.documentElement.clientHeight;
}
//16拖拽
		function drag(obj){
		var cw=getCW();
		var ch=getCH();
		var ow=obj.offsetWidth;
		var oh=obj.offsetHeight;
		obj.onmousedown=function(e){
			var ev=e||window.event;
			var ox=ev.offsetX;
			var oy=ev.offsetY;
			//阻止浏览器默认行为
			if (ev.preventDefault ){
				ev.preventDefault();
				} //阻止默认浏览器动作(W3C)
			else{
				ev.returnValue=false;
			}//IE中阻止函数器默认动作的
			document.onmousemove=function(e){
				var ev=e||window.event;
				var cx=ev.clientX;
				var cy=ev.clientY;
				var newx=cx-ox;
				var newy=cy-oy;
				if(newx<=0){
					newx=0
				}
				if(newx>(cw-ow)){
					newx=cw-ow;
				}
				if(newy<=0){
					newy=0
				}
				if(newy>(ch-oh)){
					newy=ch-oh
				}
				obj.style.left=newx+"px";
				obj.style.top=newy+"px";
			}
		}
		obj.onmouseup=function(){
			document.onmousemove=null;
		}
	
		}

//15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/
//选项卡函数
function attr(){
	var obj=arguments[0];
	if(arguments.length==2){
		if(typeof arguments[1]=="string"){
			return obj.getAttribute(arguments[1]);
		}
		else if(typeof arguments[1]=="object"){
			for(var i in arguments[1]){
				if(i!="inserAfter"){
					obj.setAttribute(i,arguments[1][i]);
				}
			}
		}
		
	}
	else if(arguments.length==3){
		obj.setAttribute(arguments[1],arguments[2]);
	}
}
function tab(obj){
		var obj=obj;
		var title=$(".title",obj);
		var con=$(".con",obj);
		for(var i=0;i<title.length;i++){
			title[i].index=i;
			title[i].onclick=function(){
				for(var j=0;j<con.length;j++){
					con[j].style.display="none";
				}
				con[this.index].style.display="block";
			}
		}
	}



	//********************************************
//obj:哪个对象添加滚轮事件
//upfun:处理滚轮向上的函数
//downfun:处理滚轮向下的函数
function mouseWheel(obj,upfun,downfun){
	if(obj.attachEvent){
	obj.attachEvent("onmousewheel",scrollFn);
	//IE、opera
	}
	else if(obj.addEventListener){
	obj.addEventListener("mousewheel",scrollFn,false); 
	//chrome,safari -webkit
	obj.addEventListener("DOMMouseScroll",scrollFn,false); }
	//firefox -moz-
	function scrollFn(e){
		var ev=e||window.event;
		if(ev.preventDefault){
			ev.preventDefault(); 
			//阻止默认浏览器动作(W3C) 
		}
		else{
			ev.returnValue = false;
			//IE中阻止函数器默认动作的方式
		}

		var num=ev.detail||ev.wheelDelta;
		if(num==-3||num==120){
			if(upfun){
				upfun();
			}
		}
		if(num==3||num==-120){
			if(downfun){
				downfun();
			}	
		}
	}
}
