//======================����¼�===========================

//���У��-----------------------------δ�޸�-----------------------------
function clickXq_Third(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//���԰����ѡ����
	removeYxtjByLd("yqdm");
	//���¥����ѡ����
	removeYxtjByLd("lddm");
	//��ղ�����ѡ����
	removeYxtjByLd("cs");
	//������Һ���ѡ����
	removeYxtjByLd("qsh");
	
	//����԰������
	if($("yqdm_ul")){
		//����԰��
		setNewYq();
	}
	
	//����¥������
	if($("lddm_ul")){
		//����¥��
		setNewLd();
	}
	
	//���ڲ�������
	if($("cs_ul")){
		//��������
		setNewCs();
	}
	
	//¥��
	var ld_click = getClickLd();
	//�Ƿ���¥��
	var flag = false;
	if(ld_click.length > 0 ){
		flag = true;
	}

	//������������
	if($("qsh_ul")){
		if(flag){
			$("qsh_dl").style.display = "";
			//��������
			setNewQsh();
			//�����������DIV
			removeQshDiv_Third();
		}else{
			$("qsh_dl").style.display = "none";
		}
	}
	
}

//���԰��-----------------------------δ�޸�-----------------------------
function clickYq_Third(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}

	//���¥����ѡ����
	removeYxtjByLd("lddm");
	//��ղ�����ѡ����
	removeYxtjByLd("cs");
	//������Һ���ѡ����
	removeYxtjByLd("qsh");
	
	//����¥������
	if($("lddm_ul")){
		//����¥��
		setNewLd();
	}
	
	//���ڲ�������
	if($("cs_ul")){
		//����¥��
		setNewCs();
	}
	
	//¥��
	var ld_click = getClickLd();
	//�Ƿ���¥��
	var flag = false;
	if(ld_click.length > 0 ){
		flag = true;
	}

	//������������
	if($("qsh_ul")){
		if(flag){
			$("qsh_dl").style.display = "";
			//��������
			setNewQsh();
			//�����������DIV
			removeQshDiv_Third();
		}else{
			$("qsh_dl").style.display = "none";
		}
	}

}

//���¥��-----------------------------���޸�-----------------------------
function clickLd_Third(obj){
			
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
		
	//���ڲ������
	if($("ch_ul")){
		//�������
		setNewCh_Third();
	}
	
	//¥��
	var ld_click = getClickLd_Third();
	//�Ƿ���¥��
	var flag = false;
	if(ld_click.length > 0 ){
		flag = true;
	}

	//������������
	if($("qsh_ul")){
		if(flag){
			$("qsh_dl").style.display = "";
			//��������
			setNewQsh_Third();
			//�����������DIV
			removeQshDiv_Third();
		}else{
			$("qsh_dl").style.display = "none";
		}
	}
	
}

//������-----------------------------���޸�-----------------------------
function clickCh_Third(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//������Һ���ѡ����
	removeYxtjByLd("qsh");
	
	//¥��
	var ld_click = getClickLd_Third();
	//�Ƿ���¥��
	var flag = false;
	if(ld_click.length > 0 ){
		flag = true;
	}

	//������������
	if($("qsh_ul")){
		if(flag){
			$("qsh_dl").style.display = "";
			//��������
			setNewQsh_Third();
			//�����������DIV
			removeQshDiv_Third();
		}else{
			$("qsh_dl").style.display = "none";
		}
	}

}

//������Һ�-----------------------------���޸�-----------------------------
function clickQsh_Third(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}

}

//������Һ�����-----------------------------���޸�-----------------------------
function clickQshQt_Third(qshpy){
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
		var ld_click = getClickLd_Third();
		//���
		var ch_click = getClickTj("ch");
		
		searchUtil.getQsInfoByPy_Third(qshpy,xq_click,yq_click,ld_click,ch_click,userStatus,userName,userDep,function(data){

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
									divHtml+="onclick=\"clickQsh_Third(this);";
									divHtml+="creatClickedTj_Third('qsh','����','"+data[n].qshdm+"','"+data[n].qshmc+"',this);return false;\"";
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
		divHtml+="<button type=\"button\" onclick=\"hiddenZyDiv('"+divid+"');return false;\" id='buttonSave'>ȷ��</button>";
		divHtml+="</div></td></tr></tfoot>";
		divHtml+="</table></div></div>";
		
	createOtherDiv("����ѡ��",divHtml,divid,"600","380");

}
//======================����¼� end===========================

//======================��������===========================

//�����µ�԰��-----------------------------δ�޸�-----------------------------
function setNewYq_Third(){
	
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
				divHtml += " onclick=\"clickYq_Third(this);";
				divHtml += "creatClickedTj_Third('yqdm','԰��','"+data[i].yqdm+"','"+data[i].yqmc+"',this);return false;\"";
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

//�����µ�¥��-----------------------------���޸�-----------------------------
function setNewLd_Third(){
	
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
	searchUtil.getGyglInfo_Third("ld",xq_click,yq_click,null,null,gyglyQx,userName,userDep,function(data){
		if(data !=null && data.length >0){

			for(var i=0;i<data.length;i++){
			
				if(i<8){
					divHtml += "<li>";
					divHtml += "<a href=\"#\" class=\"\"";
					divHtml += " onclick=\"clickLd_Third(this);";
					divHtml += "creatClickedTj_Third('lddm','¥��','"+data[i].lddm+"','"+data[i].ldmc+"',this);return false;\"";
					divHtml += " id=\"lddm_mc_xs_"+data[i].lddm+"\" name=\"a_lddm_mc\">";
					divHtml += data[i].ldmc;
					divHtml += "</a></li>";
				}else{
					divHtml += "<li>";
					divHtml += "<a href=\"#\" class=\"\" style=\"display: none;\"";
					divHtml += " onclick=\"clickLd_Third(this);";
					divHtml += "creatClickedTj_Third('lddm','¥��','"+data[i].lddm+"','"+data[i].ldmc+"',this);return false;\"";
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

//�����µĲ��-----------------------------���޸�-----------------------------
function setNewCh_Third(){
	
	$("ch_ul").innerHTML = "";
	
	//У��
	var xq_click = getClickTj("xqdm");
	//԰��
	var yq_click = getClickTj("yqdm");
	//¥��
	var ld_click = getClickLd_Third();
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"ch_ul\">";
	
	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;

	//����У��,԰����¥����ȡ�ò���
	searchUtil.getGyglInfo_Third("ch",xq_click,yq_click,ld_click,null,gyglyQx,userName,userDep,function(data){
		if(data !=null && data.length >0){
			for(var i=0;i<data.length;i++){
				divHtml += "<li>";
				divHtml += "<a href=\"#\" class=\"\"";
				divHtml += " onclick=\"clickCh_Third(this);";
				divHtml += "creatClickedTj_Third('ch','���','"+data[i].ch+"','"+data[i].chmc+"',this);return false;\"";
				divHtml += " id=\"tj_ch_"+data[i].ch+"\" name=\"tj_ch\">";
				divHtml += data[i].chmc;
				divHtml += "</a></li>";
			}
		}
	});

	divHtml += "</ul>";
	$("ch_ul").outerHTML = divHtml;	

	dwr.engine.setAsync(true);

}

//�����µ�����-----------------------------���޸�-----------------------------
function setNewQsh_Third(){

	//У��
	var xq_click = getClickTj("xqdm");
	//԰��
	var yq_click = getClickTj("yqdm");
	//¥��
	var ld_click = getClickLd_Third();
	//���
	var ch_click = getClickTj("ch");
	
	$("qsh_ul").innerHTML = "";
	
	var noTj = false;

	//�ж��Ƿ����������������ѡ��
	if(xq_click.length == 0 && yq_click.length == 0 && ld_click.length == 0 && ch_click.length == 0){
		noTj = true;
	}
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"qsh_ul\">";

	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;
	
	//����У��,԰����¥��������ȡ������
	searchUtil.getGyglInfo_Third("qsh",xq_click,yq_click,ld_click,ch_click,gyglyQx,userName,userDep,function(data){
	
		if(data !=null && data.length >0){
		
			var qsh_count = 0;
			var qsh_py_num = 0;
			//ѭ��ƴ��
			for(var i=0;i<PY_BIG.length;i++){
			
				var	flag = true;
				over_flag = false;
				var qt_flag = true;
				var qt_num = 0;
				
				//���������б�
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
									divHtml += "onclick=\"clickQsh_Third(this);";
									divHtml += "creatClickedTj_Third('qsh','����','"+data[j].qshdm+"','"+data[j].qshmc+"',this);return false;\">";
									divHtml += data[j].qshmc;
									divHtml += "</a>";
																				
									qt_num++;
									
									//����
									if(qt_num == 3){
										
										qsh_count++;
										qsh_count++;
										
										divHtml += "<a href=\"#\" class=\"moreValue_click\" onclick=\"clickQshQt_Third(\'"
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
									divHtml += "onclick=\"clickQsh_Third(this);";
									divHtml += "creatClickedTj_Third('qsh','����','"+data[j].qshdm+"','"+data[j].qshmc+"',this);return false;\">";
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
										
										divHtml += "<a href=\"#\" style=\"display:none;\" class=\"moreValue_click\" onclick=\"clickQshQt_Third(\'"
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
//���ѡ�е�¥��-----------------------------���޸�-----------------------------
function getClickLd_Third(){

	//¥��
	var lddm_num = document.getElementsByName("a_lddm_mc").length;
	var lddm_arr = new Array();
	var lddm_count = 0;

	for(var i=0;i<lddm_num;i++){
		var obj = document.getElementsByName("a_lddm_mc")[i];
		if(obj.className == "selectedValue"){
			var lddm_v = obj.id.split("_")[3];
			lddm_arr[lddm_count] = lddm_v;
			lddm_count++;
		}
	}
	
	return lddm_arr;
}

//�������������-----------------------------���޸�-----------------------------
function removeQshDiv_Third(){
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



//======================�������� ����/ɾ��ѡ������ start===========================
//������ѡ�е�����
function creatClickedTjBySearch_Third(){

	var input_num = $("searchTjDiv").getElementsByTagName('input').length;

	if(input_num != 0){
		
		for(var i=0;i<input_num;i++){
			var obj = $("searchTjDiv").getElementsByTagName('input')[i];
			var tjdm = obj.title;
			var dm = obj.value;
			
			if(tjdm != ""){
				//�ؼ�ID
				var a_id = "tj_" + tjdm+"_" + dm;
				var xs_id = tjdm+"_mc_xs_" + dm;
				var yc_id = tjdm+"_mc_yc_" + dm;
				
				if($(a_id)){
					$(a_id).onclick();
				}else if($(xs_id)){
					$(xs_id).onclick();
				}else if($(yc_id)){
					$(yc_id).onclick();
				}else{
					dwr.engine.setAsync(false);
					
					if(tjdm == "qsh"){//���Һ�
					
						var bmpy = dm.substring(0,1);
						var divid = "div_"+tjdm+"_"+bmpy;
						
						clickQshQt_Third(bmpy);
						
						hiddenZyDiv(divid);
						if($(yc_id)){
							$(yc_id).onclick();
						}
					}
					
					dwr.engine.setAsync(true);
				}
			}
		}
	}
}

//������ѡ�е�����
function creatClickedTj_Third(tjdm,tjmc,dm,mc,obj){

	$("yxtj_div").style.display = "";
	
	var className = obj.className;
	var id = dm + "_" + tjdm + "_yxtj_dd";

	var dlHtml = $("yxtj_dl").innerHTML;

	if(className == "selectedValue"){//�����ѯ
		dlHtml+= "<dd id=\""+id+"\">";
		dlHtml+= "<a href=\"#\" onclick=\"removeYxtj_Third('"+tjdm+"','"+dm+"');return false;\">";
		dlHtml+= "<h5>"+tjmc+"</h5>";
		dlHtml+= mc;
		dlHtml+= "<span class=\"close-icon\" title=\"ȡ��\"></span></a></dd>";
		$("yxtj_dl").innerHTML = dlHtml;
	}else{
		$("yxtj_dl").innerHTML = dlHtml;
		$(id).outerHTML = "";
	}
	
	//�ж��Ƿ�Ҫ������ѡ����DIV
	hiddenYxtjDiv();
}

//�Ƴ���ѡ����
function removeYxtj_Third(tjdm,dm){

	var dd_id = dm + "_" + tjdm + "_yxtj_dd";
	var a_id = "tj_" + tjdm+"_" + dm;
	var xs_id = tjdm+"_mc_xs_" + dm;
	var yc_id = tjdm+"_mc_yc_" + dm;

	if($(dd_id)){
		$(dd_id).outerHTML = "";
	}
	
	if($(a_id)){
		$(a_id).className="";
	}

	if($(xs_id)){
		$(xs_id).className="";
	}
	
	if($(yc_id)){
		$(yc_id).className="";
	}
	
	//�ж��Ƿ�Ҫ������ѡ����DIV
	hiddenYxtjDiv();
	
	if(tjdm == "lddm" || tjdm == "ch" ){
		//¥��
		var ld_click = getClickLd_Third();
		//�Ƿ���¥��
		var flag = false;
		if(ld_click.length > 0 ){
			flag = true;
		}
	
		//������������
		if($("qsh_ul")){
			if(flag){
				$("qsh_dl").style.display = "";
				//��������
				setNewQsh_Third();
				//�����������DIV
				removeQshDiv_Third();
			}else{
				$("qsh_dl").style.display = "none";
			}
		}
	}
	
	if(tjdm == "lddm"){
		//���ڲ������
		if($("ch_ul")){
			//�������
			setNewCh_Third();
			//��ղ������DIV
//			removeZyDiv();
		}
	}
	
}
//======================�������� ����/ɾ��ѡ������ end===========================