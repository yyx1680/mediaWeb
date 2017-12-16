window.onload = function(){
	function adpat(){
		//第1步
		var dpr = window.devicePixelRatio;//获取设备像素比
		var sca = dpr>1 ? 1/dpr : 1;//动态改变viewport的缩放比例；
		var meta = document.createElement('meta');//动态创建meta标签
		meta.name = 'viewport';//meta标签添加name属性
		//meta标签添加content属性
		meta.content = 'width=device-width,user-scalable=no,initial-scale='+sca;
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(meta);
		//第2步
		//设置HTML的字体大小，求rem的基准值，默认设置100px(或者设置默认其他)
		var winWidth = document.documentElement.clientWidth;
		var html = document.getElementsByTagName('html')[0];
		var remRoot = winWidth*100/720;//720为设置搞的总宽度，100为自定义的HTML字体大小
		html.style.fontSize = remRoot+'px';
	}
	adpat();
	window.resize = function(){
		adpat();
	}
}

