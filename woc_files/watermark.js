
function watermark(settings) {
	  //默认设置
	  var defaultSettings={
	    watermark_txt:"text",
	    watermark_x:150,//水印起始位置x轴坐标
	    watermark_y:120,//水印起始位置Y轴坐标
	    watermark_rows:1,//水印行数
	    watermark_cols:3,//水印列数
	    watermark_x_space:50,//水印x轴间隔
	    watermark_y_space:50,//水印y轴间隔
	    watermark_color:'rgb(148, 148, 148)',//水印字体颜色
	    watermark_alpha:0.5,//水印透明度
	    watermark_fontsize:'58px',//水印字体大小
	    watermark_font:'微软雅黑',//水印字体
	    watermark_width:350,//水印宽度
	    watermark_height:80,//水印长度
	    watermark_angle:0//水印倾斜度数
	  };
	  //采用配置项替换默认值，作用类似jquery.extend
	  if(arguments.length===1&&typeof arguments[0] ==="object" )
	  {
	    var src=arguments[0]||{};
	    for(key in src)
	    {
	      if(src[key]&&defaultSettings[key]&&src[key]===defaultSettings[key])
	        continue;
	      else if(src[key])
	        defaultSettings[key]=src[key];
	    }
	  }
	  var oTemp = document.createDocumentFragment();
	  //获取页面最大宽度
	  var page_width = Math.max(document.body.scrollWidth,document.body.clientWidth);
	  //获取页面最大长度
	  var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight);
	  //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
	  if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width *defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
	    defaultSettings.watermark_cols = parseInt((page_width-defaultSettings.watermark_x+defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
	    defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
	  }
	  //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
	  if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
	    defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
	    defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
	  }
	  var x;
	  var y;
	  for (var i = 0; i < defaultSettings.watermark_rows; i++) {
	    y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
	    for (var j = 0; j < defaultSettings.watermark_cols; j++) {
	      x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;

	      var mask_div = document.createElement('div');
	      mask_div.id = 'mask_div' + i + j;
	      mask_div.setAttribute("name",'water-mask');
	      mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
	      //设置水印div倾斜显示
	      mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	      mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	      mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	      mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	      mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
	      mask_div.style.visibility = "";
	      mask_div.style.position = "absolute";
	      mask_div.style.left = x + 'px';
	      mask_div.style.top = y + 'px';
	      mask_div.style.overflow = "hidden";
	      mask_div.style.zIndex = "9999";
	      mask_div.style.opacity = defaultSettings.watermark_alpha;
	      mask_div.style.fontSize = defaultSettings.watermark_fontsize;
	      mask_div.style.fontFamily = defaultSettings.watermark_font;
	      mask_div.style.color = defaultSettings.watermark_color;
	      mask_div.style.textAlign = "center";
	      mask_div.style.width = defaultSettings.watermark_width + 'px';
	      mask_div.style.height = defaultSettings.watermark_height + 'px';
	      mask_div.style.display = "block";
	      mask_div.ondblclick = function(){
	    	 this.style.display = "none";
	      };  
	     oTemp.appendChild(mask_div);
	    };
	  };
	  
	  if(document.getElementById("mask_div00")==null && document.getElementsByName("water-mask").length == 0){
		  document.body.appendChild(oTemp);
	  }else{
		  for(var i = 0; i < document.getElementsByName("water-mask").length; i++){
		
			  document.getElementsByName("water-mask")[i].style.display = 'block';
		  }
	  }
	  
	}