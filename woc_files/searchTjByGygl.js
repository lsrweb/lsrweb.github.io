//======================����¼�===========================

//���У��
function clickXq(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//���԰����ѡ����
	removeYxtjByLd("yqdm");
	//���¥����ѡ����
	removeYxtjByLd("ld");
	//��ղ�����ѡ����
	removeYxtjByLd("ch");
	//������Һ���ѡ����
	removeYxtjByLd("qsh");
	removeYxtjByLd("qsh");
	//����꼶��ѡ����
	removeYxtjByLd("nj");
	//���ѧԺ��ѡ����
	removeYxtjByLd("xy");
	//���רҵ��ѡ����
	removeYxtjByLd("zy");
	//��հ༶��ѡ����
	removeYxtjByLd("bj");
	
	
	//����԰������
	if($("yqdm_ul")){
		//����԰��
		creatGyHtml("yqdm");
	}
	//�����꼶����
	if($("nj_ul")){
		//�����꼶
		creatGyHtml("nj");
	}
	//����ѧԺ����
	if($("xy_ul")){
		//����ѧԺ
		creatGyHtml("xy");
	}
	
	//����¥������
	if($("ld_ul")){
		//����¥��
		creatGyHtml("ld");
	}
	
	//���ڲ������
	if($("ch_ul")){
		//�������
		creatGyHtml("ch");
	}
	
	//������������
	if($("qsh_ul")){
		//�������Һ�
		creatGyHtml("qsh");
	}
	
	//¥��
	var ld_click = getClickLd();
	//�Ƿ���¥��
	var flag = false;
	if(ld_click.length > 0 ){
		flag = true;
	}

/*	//������������
	if($("qsh_ul")){
		if(flag){
			$("qsh_dl").style.display = "";
			//��������
			setNewQsh();
			//�����������DIV
			removeQshDiv();
		}else{
			$("qsh_dl").style.display = "none";
		}
	}*/
	
}

//���԰��
function clickYq(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}

	//���¥����ѡ����
	removeYxtjByLd("ld");
	//��ղ�����ѡ����
	removeYxtjByLd("ch");
	//������Һ���ѡ����
	removeYxtjByLd("qsh");
	//����꼶��ѡ����
	removeYxtjByLd("nj");
	//���ѧԺ��ѡ����
	removeYxtjByLd("xy");
	//���רҵ��ѡ����
	removeYxtjByLd("zy");
	//��հ༶��ѡ����
	removeYxtjByLd("bj");
	
	
	//����¥������
	if($("ld_ul")){
		//����¥��
		creatGyHtml("ld");
	}
	
	//���ڲ������
	if($("ch_ul")){
		//�������
		creatGyHtml("ch");
	}
	
	//������������
	if($("qsh_ul")){
		//�������Һ�
		creatGyHtml("qsh");
	}
	//�����꼶����
	if($("nj_ul")){
		//�����꼶
		creatGyHtml("nj");
	}
	//����ѧԺ����
	if($("xy_ul")){
		//����ѧԺ
		creatGyHtml("xy");
	}
	//¥��
	var ld_click = getClickLd();
	//�Ƿ���¥��
	var flag = false;
	if(ld_click.length > 0 ){
		flag = true;
	}

/*	//������������
	if($("qsh_ul")){
		if(flag){
			$("qsh_dl").style.display = "";
			//��������
			setNewQsh();
			//�����������DIV
			removeQshDiv();
		}else{
			$("qsh_dl").style.display = "none";
		}
	}*/

}

//���¥��
function clickLd(obj){
	
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}

	//��ղ�����ѡ����
	removeYxtjByLd("ch");
	//������Һ���ѡ����
	removeYxtjByLd("qsh");
	
	//���ڲ�������
	if($("cs_ul")){
		//��������
		setNewCs();
	}
	
	//���ڲ������
	if($("ch_ul")){
		//�������
		creatGyHtml("ch");
	}
	
	//������������
	if($("qsh_ul")){
		//�������Һ�
		creatGyHtml("qsh");
	}
	
	//¥��
	var ld_click = getClickLd();
	//�Ƿ���¥��
	var flag = false;
	if(ld_click.length > 0 ){
		flag = true;
	}

//	//������������
//	if($("qsh_ul")){
//		if($("qsh_dl")){
//			if(flag){
//				$("qsh_dl").style.display = "";
//				//��������
//				setNewQsh();
//				//�����������DIV
//				removeQshDiv();
//			}else{
//				$("qsh_dl").style.display = "none";
//			}
//		}
//	}
}

//�������
function clickCs(obj){

	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//������Һ���ѡ����
	removeYxtjByLd("qsh");
	
	//¥��
	var ld_click = getClickLd();
	//�Ƿ���¥��
	var flag = false;
	if(ld_click.length > 0 ){
		flag = true;
	}

	//������������
	if($("qsh_ul")){
		//�������Һ�
		creatGyHtml("qsh");
	}
}

//������Һ�
function clickQsh(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}

}

//����ڹ�����
function clickQgbm(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}

}

//������Һ�����
function clickQshQt(qshpy){
	var divid = "div_qsh_"+qshpy;
	var qtid = "div_qt_qsh_"+qshpy;
	var hiid = "hi_"+qshpy;
	
	var userStatus = $("userStatus").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;
	
	var divHtml ="<div class='search_advanced'><div class='prop-item'>";
		divHtml+="<table width='80%' border='0' class='formlist open01'>";
		divHtml+="<tbody><tr><td colspan='4'>";
		divHtml+="<font color='orange' size='3'>"+qshpy+"�ִ�ͷ����</font>";
		divHtml+="</td></tr>";
		
		divHtml+="<tr><td colspan='4'>";
		divHtml+="<div style=\"width:100%;height:260;overflow-x:hidden;overflow-y:auto;\"><table style=\"width:100%\">";
		
		//�����tr����
		var tr_num = "6";
		
		dwr.engine.setAsync(false);
				
		//У��
		var xq_click = getClickTj("xqdm");
		//԰��
		var yq_click = getClickTj("yqdm");
		//¥��
		var ld_click = getClickLd();
		//����
		var cs_click = getClickTj("ch");
		
		searchUtil.getQsInfoByPy(qshpy,xq_click,yq_click,ld_click,cs_click,userStatus,userName,userDep,function(data){

			if(data !=null && data.length >0){
				
				var size = data.length;
				
				//������������ʵ������Ϊ׼
				if((size/4) > tr_num){
					tr_num = parseInt(size/4);
					
					//���һ�з����������
					var sy_num = parseInt(size%4);
					if(sy_num != "0"){
						tr_num =parseInt(tr_num)+1;
					}
				}
				
				var n = size;
				for(var i=0;i<tr_num;i++){
					
					divHtml+="<tr>";
					
					for(var j=0;j<4;j++){
					
						if(n <= size && n >= 0){
						
							n--;
							
							if(n!=-1){
							
								var qshid = "a_qsh_"+data[n].qshdm;
								var xsid = "qsh_mc_xs_"+data[n].qshdm;
								var ycid = "qsh_mc_yc_"+data[n].qshdm;
							
								divHtml+="<td width='25%'>";
								if(!$(xsid) && !$(ycid)){
									
									var qshmc = data[n].qshmc;

									if(qshmc.length > 6){
										qshmc = qshmc.substring(0,6)+"...";
									}
									divHtml+="<li><a href='#' class='bg_none' name='a_qsh_mc'id=\""+ycid+"\" style=\"\"";
									divHtml+="title=\""+data[n].qshmc+"\"";
									divHtml+="onclick=\"clickQsh(this);";
									divHtml+="creatClickedTj('qsh','���Һ�','"+data[n].qshdm+"','"+data[n].qshmc+"',this);return false;\"";
									divHtml+=">"+qshmc+"</a></li>";
								}else{
									divHtml+="&nbsp;";
								}
								divHtml+="</td>";
							
							}else{
								divHtml+="<td width='25%'>&nbsp;</td>";
							}	
						}else{
							divHtml+="<td width='25%'>&nbsp;</td>";
						}
					}
					
					divHtml+="</tr>";
				}
			}
		});
				
		dwr.engine.setAsync(true);
			
		divHtml+="</table></div>";
		divHtml+="</td></tr>";
		divHtml+="</tbody>";
		divHtml+="<tfoot><tr><td colspan='4'><div class='btn'>";
		divHtml+="<button onclick=\"hiddenZyDiv('"+divid+"');return false;\" id='buttonSave'>ȷ��</button>";
		divHtml+="</div></td></tr></tfoot>";
		divHtml+="</table></div></div>";
		
	createOtherDiv("����ѡ��",divHtml,divid,"600","380");

}
//======================����¼� end===========================

//======================��������===========================

//�����µ�԰��
function setNewYq(){
	
	$("yqdm_ul").innerHTML = "";
	
	//У��
	var xq_click = getClickTj("xqdm");
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"yqdm_ul\">";

	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;

	//����У��ȡ��԰��
	searchUtil.getGyglInfo("yq",xq_click,null,null,null,gyglyQx,userName,userDep,function(data){
		if(data !=null && data.length >0){
		
			for(var i=0;i<data.length;i++){
				divHtml += "<li>";
				divHtml += "<a href=\"#\" class=\"\"";
				divHtml += " onclick=\"clickYq(this);";
				divHtml += "creatClickedTj('yqdm','԰��','"+data[i].yqdm+"','"+data[i].yqmc+"',this);return false;\"";
				divHtml += " id=\"tj_yqdm_"+data[i].yqdm+"\" name=\"tj_yqdm\">";
				divHtml += data[i].yqmc;
				divHtml += "</a></li>";
			}
		}
	});

	divHtml += "</ul>";

	$("yqdm_ul").outerHTML = divHtml;

	dwr.engine.setAsync(true);

}

//�����µ�¥��
function setNewLd(){
	
	$("lddm_ul").innerHTML = "";
	
	//У��
	var xq_click = getClickTj("xqdm");
	//԰��
	var yq_click = getClickTj("yqdm");
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"lddm_ul\">";

	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;

	//����У��,԰��,ȡ��¥����Ϣ
	searchUtil.getGyglInfo("ld",xq_click,yq_click,null,null,gyglyQx,userName,userDep,function(data){
		if(data !=null && data.length >0){

			for(var i=0;i<data.length;i++){
			
				if(i<8){
					divHtml += "<li>";
					divHtml += "<a href=\"#\" class=\"\"";
					divHtml += " onclick=\"clickLd(this);";
					divHtml += "creatClickedTj('lddm','¥��','"+data[i].lddm+"','"+data[i].ldmc+"',this);return false;\"";
					divHtml += " id=\"lddm_mc_xs_"+data[i].lddm+"\" name=\"a_lddm_mc\">";
					divHtml += data[i].ldmc;
					divHtml += "</a></li>";
				}else{
					divHtml += "<li>";
					divHtml += "<a href=\"#\" class=\"\" style=\"display: none;\"";
					divHtml += " onclick=\"clickLd(this);";
					divHtml += "creatClickedTj('lddm','¥��','"+data[i].lddm+"','"+data[i].ldmc+"',this);return false;\"";
					divHtml += " id=\"lddm_mc_yc_"+data[i].lddm+"\" name=\"a_lddm_mc\">";
					divHtml += data[i].ldmc;
					divHtml += "</a></li>";
				}
			}
			
			if(data.length < 8){
				if($("ld_more")){
					$("ld_more").style.display = "none";
				}
			}else{
				$("ld_more").style.display = "";
				$("ld_more").innerHTML = "����";
				$("ld_more").className = "more_down";
			}
		}
	});

	divHtml += "</ul>";

	$("lddm_ul").outerHTML = divHtml;	

	dwr.engine.setAsync(true);

}

//�����µĲ���
function setNewCs(){
	
	$("cs_ul").innerHTML = "";
	
	//У��
	var xq_click = getClickTj("xqdm");
	//԰��
	var yq_click = getClickTj("yqdm");
	//¥��
	var ld_click = getClickLd();
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"cs_ul\">";

	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;

	//����У��,԰����¥����ȡ�ò���
	searchUtil.getGyglInfo("cs",xq_click,yq_click,ld_click,null,gyglyQx,userName,userDep,function(data){
		if(data !=null && data.length >0){
			for(var i=0;i<data.length;i++){
				divHtml += "<li>";
				divHtml += "<a href=\"#\" class=\"\"";
				divHtml += " onclick=\"clickCs(this);";
				divHtml += "creatClickedTj('cs','����','"+data[i].cs+"','"+data[i].cs+"',this);return false;\"";
				divHtml += " id=\"tj_cs_"+data[i].cs+"\" name=\"tj_cs\">";
				divHtml += data[i].cs;
				divHtml += "</a></li>";
			}
		}
	});

	divHtml += "</ul>";

	$("cs_ul").outerHTML = divHtml;	

	dwr.engine.setAsync(true);

}

//�����µ�����
function setNewQsh(){

	//У��
	var xq_click = getClickTj("xqdm");
	//԰��
	var yq_click = getClickTj("yqdm");
	//¥��
	var ld_click = getClickLd();
	//����
	var cs_click = getClickTj("cs");
	
	$("qsh_ul").innerHTML = "";
	
	var noTj = false;

	//�ж��Ƿ����������������ѡ��
	if(xq_click.length == 0 && yq_click.length == 0 && ld_click.length == 0 && cs_click.length == 0){
		noTj = true;
	}
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"qsh_ul\">";

	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;
	
	//����У��,԰����¥��������ȡ������
	searchUtil.getGyglInfo("qsh",xq_click,yq_click,ld_click,cs_click,gyglyQx,userName,userDep,function(data){
	
		if(data !=null && data.length >0){
		
			var qsh_count = 0;
			var qsh_py_num = 0;

			//ѭ��ƴ��
			for(var i=0;i<PY_BIG.length;i++){
			
				var	flag = true;
				over_flag = false;
				var qt_flag = true;
				var qt_num = 0;
				
				//�༶�����б�
				for(var j=0;j<data.length;j++){
					
					if(PY_BIG[i] == data[j].qshpy){
					
						var qi_id = "qsh_qt_qsh_"+PY_BIG[i];

						qsh_py_num++;
						
							if(qsh_count < 12){
								
								if(flag){
								
									divHtml += "<li>";
									
									divHtml += "<h5 id=\"qsh_py_xs_";
									divHtml += qsh_py_num
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;								
									flag = false;
								}
							
								if(qt_flag){
									divHtml += " <a href=\"#\" class=\"\" name=\"a_qsh_mc\" ";
									divHtml += " id=\"qsh_mc_xs_";
									divHtml += data[j].qshdm
									divHtml += "\"";
									divHtml += "onclick=\"clickQsh(this);";
									divHtml += "creatClickedTj('qsh','���Һ�','"+data[j].qshdm+"','"+data[j].qshmc+"',this);return false;\">";
									divHtml += data[j].qshmc;
									divHtml += "</a>";
																				
									qt_num++;
									
									//����
									if(qt_num == 3){
										
										qsh_count++;
										qsh_count++;
										
										divHtml += "<a href=\"#\" class=\"moreValue_click\" onclick=\"clickQshQt(\'"
										divHtml += data[j].qshpy
										divHtml += "\')\"";
										divHtml += "id=\"";
										divHtml += qi_id;
										divHtml += "\">����</a>";

										qt_num = 0;
										
										qt_flag = false;
															
									}
								}														
							}else{
								if(flag){
								
									divHtml += "<li>";
									
									divHtml += "<h5 style=\"display:none\" id=\"qsh_py_yc_";
									divHtml += qsh_py_num
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;										
									flag = false;
								}
							
								if(qt_flag){
								
									divHtml += " <a href=\"#\" class=\"\" name=\"a_qsh_mc\" style=\"display:none;\"";
									divHtml += " id=\"qsh_mc_yc_";
									divHtml += data[j].qshdm
									divHtml += "\"";
									divHtml += "onclick=\"clickQsh(this);";
									divHtml += "creatClickedTj('qsh','���Һ�','"+data[j].qshdm+"','"+data[j].qshmc+"',this);return false;\">";
									divHtml += data[j].qshmc;
									divHtml += "</a>";			
										
									divHtml += "<input type=\"hidden\" name=\"qsh_hidv_yc\" id=\"qsh_hidv_yc_";
									divHtml += data[j].qshdm;
									divHtml += "\" value=\"";
									divHtml += data[j].qshdm;
									divHtml += "\"/>";
								
									qt_num++;
									
									//����
									if(qt_num == 3){
										
										qsh_count++;
										qsh_count++;
										
										divHtml += "<a href=\"#\" style=\"display:none;\" class=\"moreValue_click\" onclick=\"clickQshQt(\'"
										divHtml += data[j].qshpy
										divHtml += "\')\"";
										divHtml += "id=\"";
										divHtml += qi_id;
										divHtml += "\">����</a>";														
										
										divHtml += "<input type=\"hidden\" name=\"qsh_hidv_qt\" id=\"qsh_hidv_qt_";
										divHtml += data[j].qshdm;
										divHtml += "\" value=\"qsh_";
										divHtml += data[j].qshpy;
										divHtml += "\"/>";
										
										qt_num = 0;
										
										qt_flag = false;
															
									}
								}
							}
						
						if(qt_flag){
							qsh_count++;
						}
						
					}

				}	
				
				if(over_flag){
					divHtml+="</li>";
					over_flag = false;
				}		
			}

			if(qsh_count <= 12){
				if($("qsh_more")){
					$("qsh_more").style.display = "none";
				}
			}else{
				$("qsh_more").style.display = "";
				$("qsh_more").innerHTML = "����";
				$("qsh_more").className = "more_down";
			}
			
			divHtml += "<input type=\"hidden\" id=\"qsh_py_num\" value=\""+qsh_py_num+"\"/>";
		}
	});
			
	divHtml += "</ul>";
	$("qsh_ul").outerHTML = divHtml;	
	
	dwr.engine.setAsync(true);
	
}

//======================�������� end===========================

//======================�������� end===========================
//���ѡ�е�У������
function getClickXqdm(){

	//¥��
	var xqdm_num = document.getElementsByName("tj_xqdm").length;
	var xqdm_arr = new Array();
	var xqdm_count = 0;

	for(var i=0;i<xqdm_num;i++){
		var obj = document.getElementsByName("tj_xqdm")[i];
		if(obj.className == "selectedValue"){
			var xqdm_v = obj.id.split("_")[3];
			xqdm_arr[xqdm_count] = xqdm_v;
			xqdm_count++;
		}
	}
	
	return xqdm_arr;
}

//���ѡ�е�԰������
function getClickYqdm(){

	//¥��
	var yqdm_num = document.getElementsByName("tj_yqdm").length;
	var yqdm_arr = new Array();
	var yqdm_count = 0;

	for(var i=0;i<yqdm_num;i++){
		var obj = document.getElementsByName("tj_yqdm")[i];
		if(obj.className == "selectedValue"){
			var yqdm_v = obj.id.split("_")[3];
			yqdm_arr[yqdm_count] = yqdm_v;
			yqdm_count++;
		}
	}
	
	return yqdm_arr;
}

//���ѡ�е�¥��
function getClickLd(){

	//¥��
	var lddm_num = document.getElementsByName("tj_ld").length;
	var lddm_arr = new Array();
	var lddm_count = 0;

	for(var i=0;i<lddm_num;i++){
		var obj = document.getElementsByName("tj_ld")[i];
		if(obj.className == "selectedValue"){
			var lddm_v = obj.id.split("_")[3];
			lddm_arr[lddm_count] = lddm_v;
			lddm_count++;
		}
	}
	
	return lddm_arr;
}

//�������������
function removeQshDiv(){
	//ѭ��ƴ��
	for(var i=0;i<PY_BIG.length;i++){
		var id = "div_qsh_"+PY_BIG[i];
		if($(id)){
			//�����ѡ����
			var a_num = $(id).getElementsByTagName('a').length;
			for(var j=0;j<a_num;j++){
				var obj = $(id).getElementsByTagName('a')[j];
				if(obj.name == "a_qsh_mc"){
					var a_id = obj.id;
					var qshdm = a_id.split("_")[3];
					var dd_id = qshdm + "_qsh_yxtj_dd";
					
					if($(dd_id)){
						$(dd_id).outerHTML = "";
					}
				}
			}
			//��ղ�
			$(id).outerHTML = "";
		}
	}
}
//======================�������� end===========================