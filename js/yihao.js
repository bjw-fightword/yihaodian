window.onload=function(){
	//1.登录注册下拉框
	var js_top1=$(".js_top1")[0];
	var denglu=$(".denglu")[0];
	var dengluxia=$(".dengluxia")[0];
	hover(denglu,function(){
		js_top1.style.display="block";
		dengluxia.style.backgroundPosition="-60px -870px";
	},function(){
		js_top1.style.display="none";
		dengluxia.style.backgroundPosition="0px -870px";

	})

//2.送货地址下拉框
	var songhuo=$(".songhuo")[0];
	var js_top2=$(".js_top2")[0];
	var csxz=$(".csxz");
	var shanxi=$(".shanxi")[0];
	hover(songhuo,function(){
		js_top2.style.display="block";
	},function(){
		js_top2.style.display="none";
	})
	for(var i=0;i<csxz.length;i++){
		csxz[i].index=i;
		csxz[i].onclick=function(){
			shanxi.innerHTML=csxz[this.index].innerHTML;
			js_top2.style.display="none";
		}
	}
//我的一号店下拉框

		var _top3a=$("._top3a");
		var _top3b=$("._top3b");
		for(var i=0;i<_top3a.length;i++){
			_top3a[i].index=i
			hover(_top3a[i],function(){
		_top3b[this.index].style.display="block"}
		,function(){
			_top3b[this.index].style.display="none"
		})
	}
//掌上一号店下拉
var _top3e=$("._top3e")[0];
var top_rightaf=$(".top_rightaf")[0];
	hover(top_rightaf,function(){
	_top3e.style.display="block";
},function(){
	_top3e.style.display="none";
})
//网站导航
var _top3a3=$("._top3a3")[0];
var _top3z=$("._top3z")[0];
  hover(_top3a3,function(){
  	_top3z.style.display="block";
  },function(){
  	_top3z.style.display="none";
  })

var weeiixn=$(".weixin")[0];
var jswenxin=$(".jswenxin")[0];
hover(weeiixn,function(){
	jswenxin.style.display="block"
},function(){
	jswenxin.style.display="none"
})

//购物车
var headrightb1=$(".headrightb1")[0];
var jsgouwuche=$(".jsgouwuche")[0];

hover(headrightb1,function(){
	jsgouwuche.style.display="block";
},function(){
	jsgouwuche.style.display="none";
})

//搜素框
var head_middle1=$(".head_middle1")[0];
var head_middle2=$(".head_middle2")[0];
var hm3=$(".hm3")[0];
var hm4=$(".hm4")[0];
var hm1=$(".hm1")[0];
var kong;
hover(head_middle1,function(){
	head_middle2.style.display="block";
  hm1.style.backgroundPosition="-235 -70";
},function(){
	head_middle2.style.display="none";
  hm1.style.backgroundPosition="-235 -60";
})
hm3.onclick=function(){
	kong=hm4.innerHTML;
  hm4.innerHTML=hm3.innerHTML;
  hm3.innerHTML=kong;
  head_middle2.style.display="none";
}


var jstext=$("#jstext");
var jstext=$("#jstext")
      jstext.onfocus=function(){
        if(jstext.value=="年度畅销榜 幸福大盘点"){//如果焦点事件是默认字体
          jstext.value="";//则清空
        }
      }   
      jstext.onblur=function(){
        if(jstext.value==""){//如果失去焦点事件是空值则
        jstext.value="年度畅销榜 幸福大盘点"//赋值给默认值 
        }
        
      }

//banner轮播
var banner=$(".banner")[0];
var bannerColor=["#48014f","#ff7a01","#1a86c6","#0c70e0","#8d4da1","#3bb5fe","#cc050c","#9cc101"];
var jsimg=$(".jsimg");
 for(var i=0;i<jsimg.length;i++){
 	jsimg[i].index=i;
 }
 var butbox=$(".butbox");
 var rbutjt=$(".rbutjt")[0];
 var lbutjt=$(".lbutjt")[0];
 var bannermiddle=$(".bannermiddle")[0];
 num=0;
  function move(type){
  	if(type=="r"){
  		num++;
  		 if(num>=jsimg.length){
        num=0;
      }
  	}else if(type=="l"){
  		num--;
  		if(num<=0){
  			num=jsimg.length-1;
  		}
  	}
      for(var i=0;i<jsimg.length;i++){
      jsimg[i].style.opacity=0;
    }
    animate(jsimg[num],{opacity:1});
    banner.style.background=bannerColor[num];
    for(var i=0;i<butbox.length;i++){
    	butbox[i].style.background="pink";
    }
	butbox[num].style.background="#ff3c3c";
}  
    var t=setInterval(function(){
    	move("r")
    },2000);
    rbutjt.onclick=function(){
    	move("r");
    }
    lbutjt.onclick=function(){
    	move("l");
    }
    bannermiddle.onmouseover=function(){
    	clearInterval(t);
    	rbutjt.style.display="block";
    	lbutjt.style.display="block";
    }
    bannermiddle.onmouseout=function(){
    	t=setInterval(function(){
    	move("r")
    	},2000);
    	rbutjt.style.display="none";
    	lbutjt.style.display="none";
    }
   for(var i=0;i<butbox.length;i++){
   	 	butbox[i].index=i;
    	butbox[i].onmouseover=function(){
    		for(var j=0;j<jsimg.length;j++){
    			jsimg[j].style.opacity=0;
    			butbox[j].style.background="#fff";
    		}
    	 	animate(jsimg[this.index],{opacity:1});
    	 	butbox[this.index].style.background="red";
      banner.style.background=bannerColor[this.index];

    	 	num=this.index;
    	}
    	
    }

//bannerleft
    var yiji=$(".yiji");
    var erji=$(".erji");
    for(var i=0;i<yiji.length;i++){
      yiji[i].index=i;
      yiji[i].onmouseover=function(){
        erji[this.index].style.display="block";
      }
      yiji[i].onmouseout=function(){
        erji[this.index].style.display="none";
      }
    }

//bannerright
    var yiji1=$(".yiji1");
    var erji1=$(".erji1");
    for(var i=0;i<yiji1.length;i++){
      yiji1[i].index=i;
      yiji1[i].onmouseover=function(){
        erji1[this.index].style.display="block";
        animate(erji1,{height:188},600,Tween.Linear)
      
      }
      yiji1[i].onmouseout=function(){
        erji1[this.index].style.display="none";
         animate(erji1,{height:0},600,Tween.Linear)
        
      }
    }



//七楼轮播
      var f7bigbox1=$(".f7bigbox1")[0];
      var anniu1=$(".anniu1")[0];
      var anniu2=$(".anniu2")[0];
    function moveleft(){
        var first=getFirst(f7bigbox1);
        var last=getLast(f7bigbox1);
      animate(f7bigbox1,{left:-100},600,Tween.Linear,function(){
        f7bigbox1.appendChild(first);//第一个放最后
        f7bigbox1.style.left=0;//拉回来
      })
    }
     var t1=setInterval(moveleft,2000);
    function moveright(){
       var last=getLast(f7bigbox1);
        var first=getFirst(f7bigbox1);
        last.style.width=0;
        f7bigbox1.insertBefore(last,first);
      animate(last,{width:100},600,Tween.Linear)  
    }
    
        anniu1.onmouseover=anniu2.onmouseover=function(){
          clearInterval(t1);
      }
        anniu1.onmouseout=anniu2.onmouseout=function(){
          t1=setInterval(moveleft,2000);
      }
        anniu1.onclick=function(){
          moveleft();
      }
        anniu2.onclick=function(){
          moveright();
      }

//右侧固定定位
var jump1=$(".jump1");
var jump_a=$(".jump_a");
for(var i=0;i<jump1.length;i++){
  jump1[i].index=i;
  jump1[i].onmouseover=function(){
    jump_a[this.index].style.display="block";
  }
  jump1[i].onmouseout=function(){
    jump_a[this.index].style.display="none";
  }
}
//楼层跳转
  var floors=$(".zf1box");
  var jump=$(".jump")[0];
  var btn=$("li",jump);
  var jump_a=$(".jump_a");
    for(var i=0;i<btn.length;i++){
          btn[i].index=i;
          btn[i].onclick=function(){
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;
                animate(obj,{scrollTop:floors[this.index].t})
          }
        }
 var ch=document.documentElement.clientHeight;
  window.onscroll=function(){
  var scrollT=getScrollT();
  if(scrollT>=1104&&scrollT<=5399){
            jump.style.display="block";
          }else{
            jump.style.display="none";
          }
 for(var i=0;i<floors.length;i++){
              floors[i].t=floors[i].offsetTop;
              if(floors[i].t<scrollT+1){
                for(var j=0;j<jump_a.length;j++){
                  jump_a[j].style.display="none";
                }
                jump_a[i].style.display="block";
              }
            }
//按需加载
//document.title=scrollT;
 for(var i=0;i<floors.length;i++){
      if(floors[i].offsetTop<scrollT+ch){
        var imgs=$("img",floors[i]);
        for(var j=0;j<imgs.length;j++){
          imgs[j].src=imgs[j].getAttribute("aa");
        }
      }
    }            
}
//底部选项卡
  var word=getClass("f10_a");//现获区元素  是集合
  var con=getClass("f10_b");
  for(var i=0;i<word.length;i++){//给每一个标题添加单击事件
    word[i].index=i;//index保存相应对象i的值
    word[i].onclick=function(){
      for(var j=0;j<con.length;j++){
        con[j].style.display="none";//隐藏
        word[j].style.fontWeight="normal"//不点击的时候这个字体不加粗
        word[j].style.textDecoration="none";//不点击的时候这个字体不加下划线
      }
      con[this.index].style.display="block";//点击for里面字体下面的内容相应的显示出来
      
      
      this.style.fontWeight="bold";//点击之后字体加粗
      this.style.textDecoration="underline";//点击之后加下划线
    }
  }

//楼层中间轮播
  function loucengMiddle(a){
      var zf1_middleinner=$(".zf1_middleinner")[a];
      var ibtnbox=$(".ibtnbox")[a];
      var ibtn=$(".ibtn",ibtnbox);
      var NUM1=1;   
    function move1(){
      if(NUM1==3){
      animate(zf1_middleinner,{left:-330*NUM1},600,Tween.Linear,function(){
        animate(zf1_middleinner,{left:0},0)
      });
      NUM1=0;
    }
    else{
      animate(zf1_middleinner,{left:-330*NUM1},600,Tween.Linear);
      }
      for(var i=0;i<ibtn.length;i++){
        ibtn[i].style.background="#333";
      }
      ibtn[NUM1].style.background="#ff6700"
      NUM1++;
    }
    var t2=setInterval(move1,2000);

    for(var i=0;i<ibtn.length;i++){
      ibtn[i].index=i;
      ibtn[i].onmouseover=function(){
        clearInterval(t2);
        for(var j=0;j<ibtn.length;j++){
          ibtn[j].style.background="#333";
        }
        animate(zf1_middleinner,{left:-330*this.index},600,Tween.Linear);
        this.style.background="#ff6700";
        NUM1=this.index+1;
      }
        ibtn[i].onmouseout=function(){
        t2=setInterval(move1,2000);
      }
    }
}
for(var i=0;i<8;i++){
  loucengMiddle(i);
}

//图片上的动效








}