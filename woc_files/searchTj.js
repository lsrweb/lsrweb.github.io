/** ===============================��ʼ������==================================*/
jQuery(function(){
	initPlcxXhData();
	initPlcxXmData();
});
//ƴ��
var PY_BIG = ["0", "1", "2", "3", "4", "5", "6","7", "8", "9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"];

//��������
//[�Ա�,�꼶,ѧ��,ѧ��,���,�������,ѧ��,ѧ��,�Ƿ���У,�Ƿ��ѱ�ҵ,
//������ò,����,�Ƿ�ɷ�,�Ƿ�,����,ת�����,�춯���,ʡ��,�Ƿ�֪ͨ,
//У������,԰������,¥������,����,���Һ�,�ɷ��ס,���״̬,��λ����״̬,�Ա��޶�
//��ס���,����,�Ƿ�����,�Ƿ�ȷ��,�Ƿ����,�Ƿ��ύ,���,����ԭ��,��˽��,
//¥��,�Ƿ���ס,�Ƿ����,¥���Ա�,��ͥ��������,�����̶�,����״̬,ֵ����Ա,
//��Ԣ��������,���Ž���׶δ���,�Ƿ������, ���״̬1,���״̬2 ,����Ա���״̬��ѧϰ���״̬
//���״̬3,.��Ŀ���룬��Ŀ���ʣ���Ŀ����, , ,��Ԣ�������������,��Ԣ����������,�Ƿ�������У
//------------------------------�벹��-----------------------------------
//------------------------------�벹��-----------------------------------
//�������ڣ�������ʷ��Ŀ��������,�������,�·�,��λ״̬,��λ����,�ڸ�״̬,�������,�ڹ�����,�Ƿ����������ڹ����״̬��
//��ѵ�꼶,��ѵ״̬,��ѵ���,��ѵ��Ϣ,�������,�������,�Ƿ���,�Ƿ��ѱ���,��id,Ӫid,��id,��id,����ѧ��]
//��ѧ��ʽ,ѧ������
//��Ԣ���ɴ������,����״̬����,���״̬����,�������,�û����
//���ˠ�B1,���ˠ�B2,�Ƽ�����,�ϼ��Ƽ�����
//����ѧ����������,������Ŀ����,������ѯ,�ڹ�ѧ������,������Ŀ���ƣ���������Ŀ����]
//zczt ѧ��ע��״̬
//txzt ѧ��С����д״̬,����Ŀ����
//rwfs ���鷽ʽ   gybxlb ��Ԣ������� zzxmlb ������Ŀ���
//qyzt ��������-����ģ������״̬�������嵥ά��״̬�����÷�����Ŀ,��ѧ����,��Ԣ�춯����,��ɫͨ��,����״̬,��������������
//zmc  ������,�ൺ�Ƽ����Ի�����
//������ά�� fxqd �������� sfzdgz �Ƿ��ص��ע wtlx �������� ywzsyn ������ɱ���� ywzsxw ������ɱ��Ϊ
//��ʦ��Ϣά�� fdygwlb ����Ա��λ���  fdysfzr ����Ա�Ƿ���ְ ������Ƹ�� bzrprqk  ��ְ����Ա״̬ jzfdyzt ��ְ����Ա���״̬ jzfdyshzt
//����ʦ�� �ڶ����� ԺУ�������� yxhdServiceType ԺУ�ǩ��״̬ qdqk ����ǩ�� ����״̬ hyhdzt ѧϰ�������ʹ��� rwlxdm �������ʹ��� zllxdm
//���Ϲ�ҵ����Ϣ��ְҵѧԺ xshcycx �Ƿ�ѧ�����Ա xshgbcx �Ƿ�ѧ����ɲ�
//�������� ���۴��� pjdm
//]
var jytj = ["xb","nj","xn","xq","nd","pycc","xz","xj","sfzx","sfyby",
			"zm","mz","sfjf","sfsfs","xsfsfs","sf","hk","zdlb","ydlb","prov","sftz",
			"xqdm","yqdm","lddm","cs","qsh","kfhz","shzt","cwfp","xbxd","sfsxqs",
			"rzqk","bm","sfpf","sfqr","sfsh","sftj","ch","tsyy","shjg","kg",
			"ld","sfrz","sffp","ldxb","jtknlx","jjcd","clzt","shztlx","zbry",
			"gygllx","jddm","sqjg","qjlx","sfhq","shzt1","shzt2","sfytj","dazxqk",
			"shzt3","xmdm","xmxz","xmlx","zw","sflx","gyjllbdldm","gyjllbdm","sfzblx","zd1","zd3",
			"zd5","zd24","zd26","sfbgb","zd8","zd9","zd10","zd11","zd13","zd5","zd17",
			"zd16","zd21","shzt4","shzt5","zczq","cflb","cfyy","cflbmc","cfyymc",
			"pjzq","pjlsxm","qjlb","ssjg","yf","shjg2","shjg3","gwzt","gwxz","zgzt","hdry","qgbm","qgsybm","qgsybmsq","sfkns","qgshzt",
			"jxnj","jxzt","cxqk","jxxx","bxlb","jtbx","sfhd","sfybz","tid","yid","lid","pid","bid","ssid","rwxn",
			"rxfs","xqmc","zzmm","xl","xw","zc","jhshzt","tjdc","zxjtjdc","jxlb","jsfs","jxdj","hjjxmc",
			"gyjlcflb","clztdm","shztdm","pylb","kssj","jssj","ksnum","jsnum","yhsf","qzxgzt",
			"shztOne","shztTwo","rddc","sjdc","zhzt","zzxm","zzxm1","sheng","shi","qu","cxdjdm","tjzt","cpz","sfzs","sfsqrd",
			"sfssmz","sfdgsx","sflspx","sfzjxy","sfjjkn","stsfcj","sfxxkn","sfxlkr","sfjtkr","sfyqtkr",
			"lxdm","xmmc","rcxwshzt","rcxwdl","rcxwlb","rcxwlbnew","rcxwdlnew","rcxwxlnew","zxbk","jydwxz","jyxs","sshy","pxlx","gslx",
			"hfzt","kycxxmlb","wjcddm","wjgabz","pjzt","zxztnew","gywpdl","gywplb","bzlx","bjdl","qjlxdm","xjzt","gyzgzt",
			"zgstatus","yystatus","gzzt","qjzt","qgxssq","pjsqxm","shztx","shztxbjpy","shztbjpyjg","zczt","sfbbhcyhk","xszbblx","bmlb","bbzt","txzt",
			"xjlb","xjlbmc","njNew","xyNew","zyNew","bjNew","bmNew","xxmlx","xxmxz","rwfs","gybxlb","zzxmlb","cbzkmc",
			"qyzt","whzt","xhqk","fbqk","gzlx","syzt","sfnz","gyyjfl","gyyjxfkqk","fyffXm","jxmc","pdxn","pdxq",
			"zxsstatus","zxszg","yyzt","zxzt","sfpkx","jclx","rcswbxlb","bxsfbl",
			"yw","zblx","gzdj","xlwtlx","txhdlb","ydlx","ydlxjg","lstdLy","wplb","wpmc","ghzt","cclx","qqlx","thjlGzdj","ylbxzt","yjnum","bynd","xljkgxlx","xljkgzlx","hjxz",
			"ytlb","fxzt","xqfl","xqfl1","cxblb","shbz","hdlx","bkgs",
			"zjjcDd","zjsyzc","jxkqlx","jxkqlb","xmjb","sskm","stlb","stxmlb","stxm","ystlb","ystxmlb","ystxmmc","qyztmc","pfzt","ffzt","yxzt","zyjrddj","lks","qsz","yqmc","hkxz",
			"zxsNj","zxsXy","zxsZy","zxsBj","zxsXz","zxsXjlb","fzxsNj","fzxsXy","fzxsZy","fzxsBj","fzxsXz","fzxsXjlb","qjlxmc","zjcmtjzt",
			"qjtslx","qjksjc","qjjsjc","kcmc","lb","jclb","gw","czr","knssqxz","hdpl","zjz","tnzt","sdzt","xmmkdm","jfxmdm","yyzc",
			"csms","rdzt","bzrcpdj","xscpdj","qgrq","qgmx","ysjxjxmlx","jxjb","jxlbnew", "yxzt1","jxsqzd",
			"lydq","xqah","drzw","sfqz","jxdmx","fkzt","sfhg","jd","gwlb","xiaoq","zjlysdzt","zzmmnew","sfsn","szdzb","zjlyshsdzt","sfxyyt","sfyyt","czlx","js","jjlx","tjztwpqs","jtgj","xmlb","xmdl",
			"fwjg","xslb","knlx","fwlx","sfbm","lxnew","bxxz","clzb","sfgz","pcjg","sfsxzt","lnjdhk","bxxs","zjxy","ybqk","gfqkfl","sfgcj","kslb","hdxs","hdzl","sy","cqxxxjzt","hdjxzt","stzt","scly",
			"smnj","smlx","dxq","sjd","jssf","zdm","wtjjcd","zcfs","dazcxx","bxlx","drhd","hdlx10699","sfdsh","bmlx","bjsblx","grsblx","sfdb","newstype","zt","zwlx","shztHb","shztZj","cfbmmc",
			"xxqk","qj","zsqk","zsqj","qskqlb","stxj","erjlb","zxsbm","sdlx","cpjg","dazt","ghzt1","xbdm","hdlx10704","zj","zxzt1","wjdj","zc10277","ldmcsx","zhszxm","zhszxmlb","pddj","jydz","zmc",
			"fxqd","sfzdgz","ywzsyn","ywzsxw","wtlx","fdygwlb","fdysfzr","xssxzt","bzrprqk","jzfdysh","jzfdyzt","jzfdyshzt","cxcyjb","zblb","xjztlb","zzsg","cc",
			"zjlydm","yxhdlx",'qdqk','hyhdzt','rwlxdm','zllxdm','lplb','yydj','xshgbcx','xshcycx','jzzt','pjdm','gznr','lqzt','lqwpmc','jddmty','jddmdy','sfds','pclx','khpjdj','yxssz','thlxmc','sfzg','wjbslx'
			,"xfzt","shztsjll","hdlxsjll","xfzt",'wsdj',"zjlx","hszt","tfyy","realopen","objectmodename","tpmode","ifpublic","xfcs","xmjbdekt","xsly","rdztnew","top","visiable"];

			
//����ģ����ѯ
function setMhcxValue(){

	var mkcx_value = $("mkcx_value").value;
	
	var arr_mkcx_value = new Array();
	
	if(mkcx_value!=""){
		arr_mkcx_value = mkcx_value.split("-");
	}
	
	if(arr_mkcx_value.length > 0){
		for(var i=0;i<arr_mkcx_value.length;i++){
			var id = "input_"+arr_mkcx_value[i];
			if($(id)){
				$(id).value = $("input_mhcx").value;
			}
		}
	}
}
	
//���ѡ������
function getClickTj(lx){

	var objName = "tj_"+lx;
	var obj_num = document.getElementsByName(objName).length;
	var obj_arr = new Array();
	var obj_count = 0;
	
	for(var i=0;i<obj_num;i++){
		var obj = document.getElementsByName(objName)[i];
		if(obj.className == "selectedValue"){
			var objId = "tj_"+lx+"_";
			var obj_v = obj.id.replace(objId,"");
			obj_arr[obj_count] = obj_v;
			obj_count++;
		}
	}
	
	return obj_arr;
}

//���ѡ���꼶
function getClickNj(){

	//�꼶
	var nj_num = document.getElementsByName("tj_nj").length;
	var nj_arr = new Array();
	var nj_count = 0;
	
	for(var i=0;i<nj_num;i++){
		var obj = document.getElementsByName("tj_nj")[i];
		if(obj.className == "selectedValue"){
			var nj_v = obj.id.replace("tj_nj_","");
			nj_arr[nj_count] = nj_v;
			nj_count++;
		}
	}
	
	return nj_arr;
}
		
//���ѡ��ѧԺ
function getClickXy(){

	//ѧԺ
	var xy_num = document.getElementsByName("a_xy_mc").length;
	var xy_arr = new Array();
	var xy_count = 0;

	for(var i=0;i<xy_num;i++){
		var obj = document.getElementsByName("a_xy_mc")[i];
		if(obj.className == "selectedValue"){
			var xydm_v = obj.id.substring(9,obj.id.length);
			xy_arr[xy_count] = xydm_v;
			xy_count++;
		}
	}

	return xy_arr;
}
	

//���ѡ��רҵ
function getClickZy(){

	//רҵ
	var zy_num = document.getElementsByName("a_zy_mc").length;
	var zy_arr = new Array();
	var zy_count = 0;

	for(var i=0;i<zy_num;i++){
		var obj = document.getElementsByName("a_zy_mc")[i];
		if(obj.className == "selectedValue"){
			var zydm_v = obj.id.substring(9,obj.id.length);
			zy_arr[zy_count] = zydm_v;
			zy_count++;
		}
	}
	
	return zy_arr;
}

//���ѡ�а༶
function getClickBj(){

	//�༶
	var bj_num = document.getElementsByName("a_bj_mc").length;
	var bj_arr = new Array();
	var bj_count = 0;

	for(var i=0;i<bj_num;i++){
		var obj = document.getElementsByName("a_bj_mc")[i];
		if(obj.className == "selectedValue"){
			var bjdm_v = obj.id.substring(9,obj.id.length);
			bj_arr[bj_count] = bjdm_v;
			bj_count++;
		}
	}
	
	return bj_arr;
}
/** ===============================��ʼ������ end==============================*/

/** ===============================��ѡ�������==============================*/

//������ѡ���ʱ������
function setKssjOrJssj(){
	
	var kssj_count = document.getElementsByName("search_tj_kssj").length;
	var jssj_count = document.getElementsByName("search_tj_jssj").length;
	var sjmc_count = document.getElementsByName("search_tj_sjmc").length;
	
	//��ʼʱ��
	if(kssj_count>0){
		for(var i=0;i<kssj_count;i++){
			var obj = document.getElementsByName("search_tj_kssj")[i];
			if(obj.value != "" && document.getElementsByName("searchModel.search_tj_kssj")
				&& document.getElementsByName("searchModel.search_tj_kssj")[i]){
				document.getElementsByName("searchModel.search_tj_kssj")[i].value = obj.value;
			}
		}
	}
	
	//����ʱ��
	if(jssj_count>0){
		for(var i=0;i<jssj_count;i++){
			var obj = document.getElementsByName("search_tj_jssj")[i];
			if(obj.value != "" && document.getElementsByName("searchModel.search_tj_jssj")
				&& document.getElementsByName("searchModel.search_tj_jssj")[i]){
				document.getElementsByName("searchModel.search_tj_jssj")[i].value = obj.value;
			}
		}
	}

	//ʱ������
	if(sjmc_count>0){
		for(var i=0;i<sjmc_count;i++){
			if(document.getElementsByName("search_tj_kssj")[i] 
				&& document.getElementsByName("search_tj_kssj")[i] 
				&& document.getElementsByName("search_tj_kssj")[i]){
			var kssj = document.getElementsByName("search_tj_kssj")[i];
			var jssj = document.getElementsByName("search_tj_jssj")[i];
			var obj = document.getElementsByName("search_tj_sjmc")[i];
	
				if((kssj && kssj.value != "") || (jssj && jssj.value != "")){
					/*
					$("yxtj_div").style.display = "";
		
					var dlHtml = $("yxtj_dl").innerHTML;
				
					dlHtml+= "<dd id=\""+i+"_sjtj_yxtj_dd\">";
					dlHtml+= "<a href=\"#\" onclick=\"removeYxsjtj('"+i+"');return false;\">";
					dlHtml+= "<h5>"+obj.value+"</h5>��ѡ��";
					dlHtml+= "<span class=\"close-icon\" title=\"ȡ��\"></span></a></dd>";
					
					$("yxtj_dl").innerHTML = dlHtml;
					*/
					
					$("yxtj_div").style.display = "";
					var dlHtml = $("yxtj_dl").innerHTML;
					dlHtml+= "<dd id=\""+i+"_sjtj_yxtj_dd\">";
					dlHtml+= "<a href=\"#\" onclick=\"removeYxsjtj('"+i+"');return false;\">";
					dlHtml+= "<h5>"+obj.value+"</h5>";
					
					if (kssj.value != "" && jssj.value != ""){
						dlHtml += kssj.value;
						dlHtml += " �� ";
						dlHtml += jssj.value;
					} else if (kssj.value == ""){
						dlHtml += "����ʱ�䣺";
						dlHtml += jssj.value;
					} else if (jssj.value == ""){
						dlHtml += "��ʼʱ�䣺";
						dlHtml += kssj.value;
					}
					dlHtml+= "<span class=\"close-icon\" title=\"ȡ��\"></span></a></dd>";
					$("yxtj_dl").innerHTML = dlHtml;
				}
			}
		}
	}

}
//������ѡ�����ֵ����
function setKsnumOrJsnum(){
	
	var ksnum_count = document.getElementsByName("search_tj_ksnum").length;
	var jsnum_count = document.getElementsByName("search_tj_jsnum").length;
	var nummc_count = document.getElementsByName("search_tj_nummc").length;
	
	//��Сֵ
	if(ksnum_count>0){
		for(var i=0;i<ksnum_count;i++){
			var obj = document.getElementsByName("search_tj_ksnum")[i];
			if(obj.value != "" && document.getElementsByName("searchModel.search_tj_ksnum")
					&& document.getElementsByName("searchModel.search_tj_ksnum")[i]){
				document.getElementsByName("searchModel.search_tj_ksnum")[i].value = obj.value;
			}
		}
	}
	
	//���ֵ
	if(jsnum_count>0){
		for(var i=0;i<jsnum_count;i++){
			var obj = document.getElementsByName("search_tj_jsnum")[i];
			if(obj.value != "" && document.getElementsByName("searchModel.search_tj_jsnum")
					&& document.getElementsByName("searchModel.search_tj_jsnum")[i]){
				document.getElementsByName("searchModel.search_tj_jsnum")[i].value = obj.value;
			}
		}
	}
	
	//��ֵ��������
	if(nummc_count>0){
		for(var i=0;i<nummc_count;i++){
			if(document.getElementsByName("search_tj_ksnum")[i] 
			   && document.getElementsByName("search_tj_ksnum")[i] 
			   && document.getElementsByName("search_tj_ksnum")[i]){
				var ksnum = document.getElementsByName("search_tj_ksnum")[i];
				var jsnum = document.getElementsByName("search_tj_jsnum")[i];
				var obj = document.getElementsByName("search_tj_nummc")[i];
				
				if((ksnum && ksnum.value != "") || (jsnum && jsnum.value != "")){
					/*
					$("yxtj_div").style.display = "";
		
					var dlHtml = $("yxtj_dl").innerHTML;
				
					dlHtml+= "<dd id=\""+i+"_numtj_yxtj_dd\">";
					dlHtml+= "<a href=\"#\" onclick=\"removeYxnumtj('"+i+"');return false;\">";
					dlHtml+= "<h5>"+obj.value+"</h5>��ѡ��";
					dlHtml+= "<span class=\"close-icon\" title=\"ȡ��\"></span></a></dd>";
					
					$("yxtj_dl").innerHTML = dlHtml;
					 */
					
					$("yxtj_div").style.display = "";
					var dlHtml = $("yxtj_dl").innerHTML;
					dlHtml+= "<dd id=\""+i+"_numtj_yxtj_dd\">";
					dlHtml+= "<a href=\"#\" onclick=\"removeYxnumtj('"+i+"');return false;\">";
					dlHtml+= "<h5>"+obj.value+"</h5>";
					
					if (ksnum.value != "" && jsnum.value != ""){
						dlHtml += ksnum.value;
						dlHtml += " �� ";
						dlHtml += jsnum.value;
					} else if (ksnum.value == ""){
						dlHtml += "���ֵ��";
						dlHtml += jsnum.value;
					} else if (jsnum.value == ""){
						dlHtml += "��Сֵ��";
						dlHtml += ksnum.value;
					}
					
					dlHtml+= "<span class=\"close-icon\" title=\"ȡ��\"></span></a></dd>";
					$("yxtj_dl").innerHTML = dlHtml;
				}
			}
		}
	}
	
}

//������ѡ���ʱ��������ʾ��
function createKssjOrJssj(){
	// ʱ��ؼ���Ӧ����
	var sjmc_count = document.getElementsByName("search_tj_sjmc").length;
	
	// �ж��Ƿ����ʱ��ؼ�
	if(sjmc_count>0){
	
		for(var i=0;i<sjmc_count;i++){
		
			if(document.getElementsByName("searchModel.search_tj_kssj")[i] // ��ʼʱ�� �Ƿ���ڶ�Ӧ����
				&& document.getElementsByName("searchModel.search_tj_jssj")[i]// ����ʱ�� �Ƿ���ڶ�Ӧ����
				&& document.getElementsByName("search_tj_sjmc")[i]){ // ʱ������ �Ƿ���ڶ�Ӧ����
			
			var kssj = document.getElementsByName("searchModel.search_tj_kssj")[i];// ��ʼʱ���ֵ
			var jssj = document.getElementsByName("searchModel.search_tj_jssj")[i];// ����ʱ���ֵ
			var obj = document.getElementsByName("search_tj_sjmc")[i];// �������Ƶ�ֵ
				
			// �ж� �Ƿ���ڶ�Ӧѡ������
			if (jQuery("#"+i+"_sjtj_yxtj_dd")){
				jQuery("#"+i+"_sjtj_yxtj_dd").remove();
			}
			
			
				// ��������ʼ�����ʱ��ǿ�ֵ��ʱ��ؼ���ʾ��
				if((kssj && kssj.value != "") || (jssj && jssj.value != "") ){
					
					//if($(i+"_sjtj_yxtj_dd")==null){
						$("yxtj_div").style.display = "";
						var dlHtml = $("yxtj_dl").innerHTML;
						dlHtml+= "<dd id=\""+i+"_sjtj_yxtj_dd\">";
						dlHtml+= "<a href=\"#\" onclick=\"removeYxsjtj('"+i+"');return false;\">";
						dlHtml+= "<h5>"+obj.value+"</h5>";
						
						if (kssj.value != "" && jssj.value != ""){
							dlHtml += kssj.value;
							dlHtml += " �� ";
							dlHtml += jssj.value;
						} else if (kssj.value == ""){
							dlHtml += "����ʱ�䣺";
							dlHtml += jssj.value;
						} else if (jssj.value == ""){
							dlHtml += "��ʼʱ�䣺";
							dlHtml += kssj.value;
						}
						
						dlHtml+= "<span class=\"close-icon\" title=\"ȡ��\"></span></a></dd>";
						$("yxtj_dl").innerHTML = dlHtml;
						
					//}
				}
			}
		}
	}

}
//������ѡ�����ֵ����������ʾ��
function createKsnumOrJsnum(){
	// ��ֵ����ؼ���Ӧ����
	var nummc_count = document.getElementsByName("search_tj_nummc").length;
	
	// �ж��Ƿ������ֵ����ؼ�
	if(nummc_count>0){
		
		for(var i=0;i<nummc_count;i++){
			
			if(document.getElementsByName("searchModel.search_tj_ksnum")[i] // ��Сֵ �Ƿ���ڶ�Ӧ����
			   && document.getElementsByName("searchModel.search_tj_jsnum")[i]// ���ֵ �Ƿ���ڶ�Ӧ����
			   && document.getElementsByName("search_tj_nummc")[i]){ // ��ֵ�������� �Ƿ���ڶ�Ӧ����
				
				var ksnum = document.getElementsByName("searchModel.search_tj_ksnum")[i];// ��Сֵ
				var jsnum = document.getElementsByName("searchModel.search_tj_jsnum")[i];// ���ֵ
				var obj = document.getElementsByName("search_tj_nummc")[i];// �������Ƶ�ֵ
				
				// �ж� �Ƿ���ڶ�Ӧѡ������
				if (jQuery("#"+i+"_numtj_yxtj_dd")){
					jQuery("#"+i+"_numtj_yxtj_dd").remove();
				}
				
				
				// ��������Сֵ�����ֵ�ǿ�ֵ����ֵ����ؼ���ʾ��
				if((ksnum && ksnum.value != "") || (jsnum && jsnum.value != "") ){
					
					//if($(i+"_numtj_yxtj_dd")==null){
					$("yxtj_div").style.display = "";
					var dlHtml = $("yxtj_dl").innerHTML;
					dlHtml+= "<dd id=\""+i+"_numtj_yxtj_dd\">";
					dlHtml+= "<a href=\"#\" onclick=\"removeYxnumtj('"+i+"');return false;\">";
					dlHtml+= "<h5>"+obj.value+"</h5>";
					
					if (ksnum.value != "" && jsnum.value != ""){
						dlHtml += ksnum.value;
						dlHtml += " �� ";
						dlHtml += jsnum.value;
					} else if (ksnum.value == ""){
						dlHtml += "���ֵ��";
						dlHtml += jsnum.value;
					} else if (jsnum.value == ""){
						dlHtml += "��Сֵ��";
						dlHtml += ksnum.value;
					}
					
					dlHtml+= "<span class=\"close-icon\" title=\"ȡ��\"></span></a></dd>";
					$("yxtj_dl").innerHTML = dlHtml;
					
					//}
				}
			}
		}
	}
	
}

// ����ʱ��ؼ���Ӧ������
function createHidTime(node){
// ��ȡʱ�����ƶ���
	var obj = document.getElementsByName("search_tj_sjmc");
	// �ж��Ƿ���� ʱ������
	if(obj.length>0){
		
		for(var i=0;i<obj.length;i++){
			// ��ȡ��ʼʱ���ֵ
			var kssj = document.getElementsByName("searchModel.search_tj_kssj")[i].value;
			// ��ȡ����ʱ���ֵ
			var jssj = document.getElementsByName("searchModel.search_tj_jssj")[i].value;
			
			// ----------�ж�ֵ�Ƿ�Ϊ�� begin ----------
			if(kssj==null || kssj==""){
				kssj="!!DDBGG!!";// ��ֵ����
			}
			
			if(jssj==null || jssj==""){
				jssj="!!DDBGG!!";// ��ֵ����
			}
			// ----------�ж�ֵ�Ƿ�Ϊ�� end ----------
			
			// ----------���������� begin---------------
			var tmp = document.createElement("input");
			tmp.type = "hidden";
			tmp.name = "searchModel.search_tj_kssj";
			tmp.value = kssj;
			node.appendChild(tmp);

			var tmp = document.createElement("input");
			tmp.type = "hidden";
			tmp.name = "searchModel.search_tj_jssj";
			tmp.value = jssj;
			node.appendChild(tmp);
			// ----------���������� end---------------
		}
	}	
}
// ������ֵ����ؼ���Ӧ������
function createHidNum(node){
// ��ȡ��ֵ�������ƶ���
	var obj = document.getElementsByName("search_tj_nummc");
	// �ж��Ƿ���� ��ֵ��������
	if(obj.length>0){
		
		for(var i=0;i<obj.length;i++){
			// ��ȡ��Сֵ
			var ksnum = document.getElementsByName("searchModel.search_tj_ksnum")[i].value;
			// ��ȡ���ֵ
			var jsnum = document.getElementsByName("searchModel.search_tj_jsnum")[i].value;
			
			// ----------�ж�ֵ�Ƿ�Ϊ�� begin ----------
			if(ksnum==null || ksnum==""){
				ksnum="!!DDBGG!!";// ��ֵ����
			}
			
			if(jsnum==null || jsnum==""){
				jsnum="!!DDBGG!!";// ��ֵ����
			}
			// ----------�ж�ֵ�Ƿ�Ϊ�� end ----------
			
			// ----------���������� begin---------------
			var tmp = document.createElement("input");
			tmp.type = "hidden";
			tmp.name = "searchModel.search_tj_ksnum";
			tmp.value = ksnum;
			node.appendChild(tmp);
			
			var tmp = document.createElement("input");
			tmp.type = "hidden";
			tmp.name = "searchModel.search_tj_jsnum";
			tmp.value = jsnum;
			node.appendChild(tmp);
			// ----------���������� end---------------
		}
	}	
}

//������ѡ�е�����
function creatClickedTjBySearch(){

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
					
					if(tjdm == "zy" || tjdm == "bj"){
						searchUtil.getBmpy(dm,tjdm,function(data){
							if(data != null && data != ""){
								var bmpy = data;
								
								var divid = "div_"+tjdm+"_"+bmpy;
								
								if(tjdm == "zy"){//����Ϊרҵ�Ļ�			
									
									clickZyQt(bmpy);
									hiddenZyDiv(divid);
									
									if($(yc_id)){
										$(yc_id).onclick();
									}
								}else if(tjdm == "bj"){//����Ϊ�༶�Ļ�		
									
									clickBjQt(bmpy);
									hiddenZyDiv(divid);
									if($(yc_id)){
										$(yc_id).onclick();
									}
								}
							}
						});
					}else if(tjdm == "qsh"){//���Һ�
					
						var bmpy = dm.substring(0,1);
						var divid = "div_"+tjdm+"_"+bmpy;
						
						clickQshQt(bmpy);
						
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
function creatClickedTj(tjdm,tjmc,dm,mc,obj){

	$("yxtj_div").style.display = "";
	
	var className = obj.className;
	var id = dm + "_" + tjdm + "_yxtj_dd";

	var dlHtml = $("yxtj_dl").innerHTML;

	if(className == "selectedValue"){//�����ѯ
		
		dlHtml+= "<dd id=\""+id+"\">";
		dlHtml+= "<a href=\"#\" onclick=\"removeYxtj('"+tjdm+"','"+dm+"');return false;\" name=\"a_name_"+tjdm+"\" id=\"a_id_"+dm+"\">";
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

//������ѯ��������
function creatClickedTjOfPlcx(tjdm,tjmc,dm,mc,tjid){
	$("tj_"+tjdm+"_"+tjdm).className = "selectedValue";
	var cxzd=tjid.split("_")[2];
	jQuery("#plcx_"+cxzd).val(dm);
	$("yxtj_div").style.display = "";
	var className = jQuery("#"+tjid).attr("class");
	var dmFormat = dm.replaceAll("\n",",").replaceAll(" ",",").split(",")[0];
	var id = dmFormat + "_" + tjdm + "_yxtj_dd";

	var dlHtml = $("yxtj_dl").innerHTML;
	
	if(className == "selectedValue"){//�����ѯ
		dlHtml+= "<dd id=\""+id+"\">";
		dlHtml+= "<a href=\"#\" onclick=\"removeYxtj('"+tjdm+"','"+dmFormat+"');return false;\" name=\"a_name_"+tjdm+"\" id=\"a_id_"+dmFormat+"\">";
		dlHtml+= "<h5>"+tjmc+"</h5>";
		dlHtml+= dmFormat;
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
function removeYxtj(tjdm,dm){

	var dd_id = dm + "_" + tjdm + "_yxtj_dd";
	var a_id = "tj_" + tjdm+"_" + dm;
	var pl_id = "tj_" + tjdm+"_" + tjdm;//������ѯ
	var xs_id = tjdm+"_mc_xs_" + dm;
	var yc_id = tjdm+"_mc_yc_" + dm;
	
	if($(dd_id)){
		$(dd_id).outerHTML = "";
	}
	
	if($(pl_id)){
		jQuery("#plcx_"+tjdm).val("");
		$(pl_id).className="";
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
	
	if(tjdm == "nj" || tjdm == "xy" || tjdm == "zy"){
		//���ڰ༶����
		if($("bj_ul")){
			//�����༶
			//setNewBj();
			creatBmHtml("bj");
			//��հ༶����DIV
			removeBjDiv();
		}
	}
	if(tjdm == "njNew" || tjdm == "xyNew" || tjdm == "zyNew"){
		//���ڰ༶����
		if($("bjNew_ul")){
			//�����༶
			//setNewBj();
			creatBmNewHtml("bjNew");
			//��հ༶����DIV
			removeBjNewDiv();
		}
	}

	if(tjdm == "xyNew"){
		//����רҵ����
		if($("zyNew_ul")){
			//����רҵ
			//setNewZy();
			creatBmNewHtml("zyNew");
			//���רҵ����DIV
			removeZyNewDiv();
		}
	}
	if(tjdm == "xy"){
		//����רҵ����
		if($("zy_ul")){
			//����רҵ
			//setNewZy();
			creatBmHtml("zy");
			//���רҵ����DIV
			removeZyDiv();
		}
	}
	
	if(tjdm == "xqdm"){
		//�������Һ�����
		if($("yqdm_ul")){
			//�����༶
			creatGyHtml("yqdm");
			//��ղ�����ѡ����
			removeYxtjByLd("yqdm");
		}
		//����ѧԺ����
		if($("xy_ul")){
			//����ѧԺ
			creatGyHtml("xy");
			removeYxtjByLd("xy");
			removeYxtjByLd("zy");
			removeYxtjByLd("bj");
		}
		//�����꼶����
		if($("nj_ul")){
			//�����꼶
			creatGyHtml("nj");
			removeYxtjByLd("zy");
			removeYxtjByLd("bj");
		}
	}	
	
	if(tjdm == "xqdm" || tjdm == "yqdm"){
		//�������Һ�����
		if($("ld_ul")){
			//�����༶
			creatGyHtml("ld");
			//��ղ�����ѡ����
			removeYxtjByLd("ld");
		}
		//����ѧԺ����
		if($("xy_ul")){
			//����ѧԺ
			creatGyHtml("xy");
			removeYxtjByLd("xy");
			removeYxtjByLd("zy");
			removeYxtjByLd("bj");
		}
		//�����꼶����
		if($("nj_ul")){
			//�����꼶
			creatGyHtml("nj");
			removeYxtjByLd("zy");
			removeYxtjByLd("bj");
		}
	}	
	
	if(tjdm == "xmmkdm"){
		var xmmk_click = getClickTj("xmmkdm");
		creatJfxmHtml("jfxmdm",xmmk_click);
	
	}
	if(tjdm == "ld" || tjdm == "xqdm" || tjdm == "yqdm"){
		//�������Һ�����
		if($("ch_ul")){
			//�����༶
			creatGyHtml("ch");
			//��ղ�����ѡ����
			removeYxtjByLd("ch");
		}
	}
	
	if(tjdm == "ld" || tjdm == "ch" || tjdm == "xqdm" || tjdm == "yqdm"){
		//�������Һ�����
		if($("qsh_ul")){
			//�����༶
			creatGyHtml("qsh");
			//������Һ�����DIV
			removeQshDiv();
			//��ղ�����ѡ����
			removeYxtjByLd("qsh");

		}
	}
	
	if(tjdm == "bid" || tjdm == "pid" || tjdm == "lid" || tjdm == "yid" || tjdm == "tid") {
		//������������
		if($("ssid_ul")){
			//��������
			createJxjzHtml("ssid");
			//�����ѡ����
			removeYxtjByLd("ssid");

		}
	}
	
	if(tjdm == "pid" || tjdm == "lid" || tjdm == "yid" || tjdm == "tid") {
		//���ڰ�����
		if($("bid_ul")){
			//������
			createJxjzHtml("bid");
			//�����ѡ����
			removeYxtjByLd("bid");

		}
	}
	
	if(tjdm == "lid" || tjdm == "yid" || tjdm == "tid"){
		//����������
		if($("pid_ul")){
			//������
			createJxjzHtml("pid");
			//�����ѡ����
			removeYxtjByLd("pid");

		}
	}
	
	if(tjdm == "yid" || tjdm == "tid"){
		//����������
		if($("lid_ul")){
			//������
			createJxjzHtml("lid");
			//��ղ�����ѡ����
			removeYxtjByLd("lid");

		}
	}
	
	if(tjdm == "tid"){
		//����Ӫ����
		if($("yid_ul")){
			//������
			createJxjzHtml("yid");
			//�����ѡ����
			removeYxtjByLd("yid");

		}
	}
	
	if(tjdm == "gyjllbdldm"){
		//��������
		if($("gyjllbdm_ul")){
			//����Υ�����
			creatWjHtml("gyjllbdm");
			//�����ѡ����
			removeYxtjByLd("gyjllbdm");

		}
	}
    if(tjdm == "zhszxm"){
        //��������
        if($("zhszxmlb_ul")){
            //����Υ�����
            creatZhszxmlbHtml("zhszxmlb");
            //�����ѡ����
            removeYxtjByLd("zhszxmlb");

        }
    }
}

//ɾ����ѡ������ʱ�䣩
function removeYxsjtj(num){
	
	var dd_id = num+"_sjtj_yxtj_dd";
	if($(dd_id)){
		$(dd_id).outerHTML = "";
	}
	
	var kssj_count = document.getElementsByName("searchModel.search_tj_kssj").length;
	var jssj_count = document.getElementsByName("searchModel.search_tj_jssj").length;
		
	//��ʼʱ��
	if(kssj_count>0)
	document.getElementsByName("searchModel.search_tj_kssj")[num].value = "";
	
	//����ʱ��
	if(jssj_count>0)
	document.getElementsByName("searchModel.search_tj_jssj")[num].value = "";
		
	//�ж��Ƿ�Ҫ������ѡ����DIV
	hiddenYxtjDiv();
}

//ɾ����ѡ��������ֵ���䣩
function removeYxnumtj(num){
	
	var dd_id = num+"_numtj_yxtj_dd";
	if($(dd_id)){
		$(dd_id).outerHTML = "";
	}
	
	var ksnum_count = document.getElementsByName("searchModel.search_tj_ksnum").length;
	var jsnum_count = document.getElementsByName("searchModel.search_tj_jsnum").length;
	
	//��Сֵ
	if(ksnum_count>0)
		document.getElementsByName("searchModel.search_tj_ksnum")[num].value = "";
	
	//���ֵ
	if(jsnum_count>0)
		document.getElementsByName("searchModel.search_tj_jsnum")[num].value = "";
	
	//�ж��Ƿ�Ҫ������ѡ����DIV
	hiddenYxtjDiv();
}

//��������ɾ����ѡ����
function removeYxtjByLd(dd_Lx){

	var dd_num = $("yxtj_div").getElementsByTagName('dd').length;

	for(var i=dd_num-1;i>=0;i--){
		var obj = $("yxtj_div").getElementsByTagName('dd')[i];
		var obj_id = obj.id;
		lx = obj_id.split("_")[1];
		if(lx == dd_Lx){
			obj.outerHTML = "";
		}
	}
	
	if($("yxtj_div").getElementsByTagName('dd').length == 0){
		$("yxtj_div").style.display = "none";
	}
}

//�����ѡ����
function getYxtj(dd_Lx){

	var arr = new Array();
	var count = 0;
	
	var dd_num = $("yxtj_div").getElementsByTagName('dd').length;
	
	for(var i=dd_num-1;i>=0;i--){
		var obj = $("yxtj_div").getElementsByTagName('dd')[i];
		var obj_id = obj.id;
		var lx = obj_id.split("_")[1];
		var dm = obj_id.split("_")[0];
		if(lx == dd_Lx){
			arr[count]=dm;
			count++;
		}
	}
	
	return arr;
}

//������ѡ����DIV
function hiddenYxtjDiv(){

	var dd_num = $("yxtj_div").getElementsByTagName('dd').length;
	
	if(dd_num == 0){
		$("yxtj_div").style.display = "none";
	}
}
/** ===============================��ѡ������� end==============================*/

/** ===============================����¼�==================================*/
//�߼���ѯ������𣬸������
function showTbody(obj,className1,className2,html1,html2){

	if(obj.className==className1){//����
		obj.className=className2;
		obj.innerHTML=html2;
		$("gjcx_div").style.display = "none";
	}else{//����
		obj.className=className1;
		obj.innerHTML=html1;
		$("gjcx_div").style.display = "";
	}
	parent.moreClick();
}

//��ѯ����չʾ������
function showHiddenBm(obj,tjdm,className1,className2,html1,html2){

	var py_num = "0";
	if($(tjdm+"_py_num")){
		py_num = $(tjdm+"_py_num").value;
	}

	var a_num = document.getElementsByName("a_"+tjdm+"_mc").length;

	var lx = "";
	
	if(obj.className==className1){//����
		lx = "sq";
		obj.className=className2;
		obj.innerHTML=html2;
	}else{
		obj.className=className1; 
		lx = "zk";
	}

	//ƴ��
	for(var i=0;i<py_num;i++){
		var yc_id = tjdm+"_py_yc_"+i;
		if($(yc_id)){
			if(lx == "sq"){
				$(yc_id).style.display = "none";
			}else{
				$(yc_id).style.display = "";
			}
		}
	}
	
	//����
	for(var i=0;i<a_num;i++){
		var bm_obj =  document.getElementsByName("a_"+tjdm+"_mc")[i];
		var bm_id = bm_obj.id;
		var show_lx = bm_id.split("_")[2];
		//ֻ�������صĲ���
		if(show_lx == "yc"){
			if(bm_obj.style.display == "none"){
				bm_obj.style.display = "";
			}else{
				bm_obj.style.display = "none";
			}
		}
	}
	
	//����			
	if(tjdm != "xy"){
	
		var hid_qt_num = document.getElementsByName(tjdm+"_hidv_qt").length;
		
		for(var i=0;i<hid_qt_num;i++){
			var obj = document.getElementsByName(tjdm+"_hidv_qt")[i];
			var bmdm = obj.value;
	
			//����������ID
			var qt_id = tjdm+"_qt_"+bmdm;
			
			if(lx == "zk"){//չ��
					
				if($(qt_id)){
					$(qt_id).style.display = "";
				}
						
			}else{//����
	
				if($(qt_id)){
					$(qt_id).style.display = "none";
				}
			}
		}
				
	}
}

//��ѯ����չʾ������
function showHiddenOther(obj,tjdm,className1,className2,html1,html2){

	if(obj.className==className1){//����
		lx = "sq";
		obj.className=className2;
		obj.innerHTML=html2;
	}else{
		obj.className=className1;
		obj.innerHTML=html1;
		lx = "zk";
	}

	var a_num = document.getElementsByName("tj_"+tjdm).length;
	
	//����
	for(var i=0;i<a_num;i++){
		var tj_obj =  document.getElementsByName("tj_"+tjdm)[i];
		var tj_id = tj_obj.id;
		var show_lx = tj_id.split("_")[2];
		//ֻ�������صĲ���
		if(show_lx == "yc"){
			if(tj_obj.style.display == "none"){
				tj_obj.style.display = "";
			}else{
				tj_obj.style.display = "none";
			}
		}
	}
}

//���ù�������
function czSuperSearch(){

	var del_message = "ȷ��Ҫɾ�����еĹ�������?";
	
	confirmInfo(del_message, function(tag){
		if(tag == 'ok'){
			//����ģ����ѯ
			if($("input_mhcx")){
				$("input_mhcx").value = "";
			}
			
			//���ø߼���ѯ
			$("yxtj_div").style.display = "none";
			$("yxtj_dl").innerHTML = "";
			if($("yxtj_gxh_div")){
				$("yxtj_gxh_div").style.display  = "none";
				$("yxtj_gxh_dl").innerHTML = "";
			}
			
			var a_num = document.getElementsByTagName('a').length;

			for(var i=0;i<a_num;i++){
				
				var a_className = document.getElementsByTagName('a')[i].className;
				
				if(a_className == "selectedValue"){
					document.getElementsByTagName('a')[i].className = "";
				}
			}
			
			var kssj_count = document.getElementsByName("searchModel.search_tj_kssj").length;
			var jssj_count = document.getElementsByName("searchModel.search_tj_jssj").length;
			
			//��ʼʱ��
			for(var i=0;i<kssj_count;i++){
				var obj = document.getElementsByName("searchModel.search_tj_kssj")[i];
				obj.value = "";
				document.getElementsByName("searchModel.search_tj_kssj").value = "";
			}
			
			//����ʱ��
			for(var i=0;i<jssj_count;i++){
				var obj = document.getElementsByName("searchModel.search_tj_jssj")[i];
				obj.value = "";
				document.getElementsByName("searchModel.search_tj_jssj").value = "";
			}
			
			var ksnum_count = document.getElementsByName("searchModel.search_tj_ksnum").length;
			var jsnum_count = document.getElementsByName("searchModel.search_tj_jsnum").length;
			
			//��Сֵ
			for(var i=0;i<ksnum_count;i++){
				var obj = document.getElementsByName("searchModel.search_tj_ksnum")[i];
				obj.value = "";
				document.getElementsByName("searchModel.search_tj_ksnum").value = "";
			}
			
			//���ֵ
			for(var i=0;i<jsnum_count;i++){
				var obj = document.getElementsByName("searchModel.search_tj_jsnum")[i];
				obj.value = "";
				document.getElementsByName("searchModel.search_tj_jsnum").value = "";
			}
		}
	});
}


//�����������
function clickTj(lx,dm){

	var id = "tj_"+lx+"_"+dm;
			
	if($(id)){

		var className = $(id).className;
		
		if(className == "selectedValue"){
			$(id).className = "";
		}else{
			$(id).className = "selectedValue";
		}
	}
	if(lx=='xmmkdm'){
		removeYxtjByLd("jfxmdm");
		var xmmk_click = getClickTj("xmmkdm");
		creatJfxmHtml("jfxmdm",xmmk_click);
	}
}
//���������ѯ����
function clickPlcxTj(method,obj){
	if("selectedValue"==obj.className){
		obj.className="";
		var aName ="a_name_"+obj.id.split("_")[2]; 
		var dlHtml = $("yxtj_dl").innerHTML;
		$("yxtj_dl").innerHTML = dlHtml;
		var aid=jQuery("a[name="+aName+"]").parent().attr("id");
		$(aid).outerHTML = "";
		hiddenYxtjDiv();
		return;
	}
	var url = "seachTjManage.do?method="+method;
	var title = "������ѯѧ��";
	showDialog(title, 730,450, url);

}
function initPlcxXhData(){	
	
	demoHtml = "�밴���¸�ʽ����������ѯѧ��\n\n";
	demoHtml += "���磺\n";
	demoHtml += "20110019\n20100019\n20090026";
	demoHtml += "\n���ߣ�\n";
	demoHtml += "20110019 20100019 20090026";
	
	jQuery("#plcxxh").val(demoHtml);

	jQuery("#plcxxh").css("color", "#999");
	jQuery("#plcxxh").focus( function() {
		if (jQuery(this).val() == demoHtml) {
			jQuery(this).val("");
			jQuery(this).css("color", "");
		}else{
			jQuery(this).css("color", "");
		}
	});

	jQuery("#plcxxh").blur( function() {
		if (jQuery(this).val() == "") {
			jQuery(this).val(demoHtml);
			jQuery(this).css("color", "#999");
		}
	});
}
function initPlcxXmData(){	
	xmdemoHtml = "�밴���¸�ʽ����������ѯ����\n\n";
	xmdemoHtml += "���磺\n";
	xmdemoHtml += "����\n����\n����";
	xmdemoHtml += "\n���ߣ�\n";
	xmdemoHtml += "���� ���� ����";

	jQuery("#plcxxm").val(xmdemoHtml);
	jQuery("#plcxxm").css("color", "#999");
	jQuery("#plcxxm").focus( function() {
		if (jQuery(this).val() == xmdemoHtml) {
			jQuery(this).val("");
			jQuery(this).css("color", "");
		}else{
			jQuery(this).css("color", "");
		}
	});

	jQuery("#plcxxm").blur( function() {
		if (jQuery(this).val() == "") {
			jQuery(this).val(xmdemoHtml);
			jQuery(this).css("color", "#999");
		}
	});
}
//�����������
function clickOtherTj(lx,dm){

	var xsid = lx+"_mc_xs_"+dm;
	var ycid = lx+"_mc_yc_"+dm;
	var id = "";
	
	if($(xsid)){
		id = xsid;
	}
	
	if($(ycid)){
		id = ycid;
	}
	
	if($(id)){

		var className = $(id).className;
		
		if(className == "selectedValue"){
			$(id).className = "";
		}else{
			$(id).className = "selectedValue";
		}
	}

}

//����꼶
function clickNj(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//����רҵ����
	if($("zy_ul")){
		//����רҵ
		//setNewZy();
		//creatBmHtml("zy");
		//���רҵ����DIV
		//removeZyDiv();
	}
	
	//���ڰ༶����
	if($("bj_ul")){
		//�����༶
		//setNewBj();	
		creatBmHtml("bj");
		//��հ༶����DIV
		removeBjDiv();
	}
	
	//���רҵ��ѡ����
	removeYxtjByLd("zy");
	//��հ༶��ѡ����
	removeYxtjByLd("bj");
}

//���ѧԺ
function clickXy(obj){
		
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}

	//����רҵ����
	if($("zy_ul")){
		//����רҵ
		//setNewZy();
		creatBmHtml("zy");
		//���רҵ����DIV
		removeZyDiv();
	}

	//���ڰ༶����
	if($("bj_ul")){
		//�����༶
		//setNewBj();
		creatBmHtml("bj");
		//��հ༶����DIV
		removeBjDiv();
	}

	//���רҵ��ѡ����
	removeYxtjByLd("zy");
	//��հ༶��ѡ����
	removeYxtjByLd("bj");
}	
//���רҵ
function clickZy(obj){
	
	var className = obj.className;

	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//���ڰ༶����
	if($("bj_ul")){
		//�����༶
		//setNewBj();
		creatBmHtml("bj");
		//��հ༶����DIV
		removeBjDiv();
	}
	
	//��հ༶��ѡ����
	removeYxtjByLd("bj");
}

//����༶
function clickBj(obj){

	var className = obj.className;

	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
}

//���רҵ����
function clickZyQt(zypy){
	var divid = "div_zy_"+zypy;
	var qtid = "div_qt_zy_"+zypy;
	var hiid = "hi_"+zypy;
	var sfzxs="";
	var userStatus = $("userStatus").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;
	var searchPath = jQuery("#searchPath").val();
	if(searchPath=="xsxx_xsxxgl_cxfzxs.do"){
		sfzxs="0";
	}
	if(searchPath=="xsxx_xsxxgl_cxzxs.do"){
		sfzxs="1";
	}
	var divHtml ="<div class='search_advanced'><div class='prop-item'  style='border:none !important'>";
		divHtml+="<table width='80%' border='0' class='formlist open01'>";
		divHtml+="<tbody><tr><td colspan='4'>";
		divHtml+="<font color='orange' size='3'>"+zypy+"�ִ�ͷרҵ</font>";
		divHtml+="</td></tr>";
		
		//�����tr����
		var tr_num = "6";
		
		dwr.engine.setAsync(false);
				
		searchUtil.getZyInfoByPy(zypy,userStatus,userName,userDep,sfzxs,function(data){
		
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
							
								var zyid = "a_zy_"+data[n].zydm;
								var xsid = "zy_mc_xs_"+data[n].zydm;
								var ycid = "zy_mc_yc_"+data[n].zydm;
							
								divHtml+="<td width='25%'>";
								if(!$(xsid) && !$(ycid)){
									
									var zymc = data[n].zymc;

									if(zymc.length > 6){
										zymc = zymc.substring(0,6)+"...";
									}
									divHtml+="<li><a href='#' class='bg_none' name='a_zy_mc'id=\""+ycid+"\" style=\"white-space: nowrap;\"";
									divHtml+="title=\""+data[n].zymc+"\"";
									divHtml+="onclick=\"clickZy(this);";
									divHtml+="creatClickedTj('zy','רҵ','"+data[n].zydm+"','"+data[n].zymc+"',this);return false;\"";
									divHtml+=">"+zymc+"</a></li>";
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
			
		divHtml+="</tbody>";
		divHtml+="<tfoot><tr><td colspan='4'><div class='btn'>";
		divHtml+="<button onclick=\"hiddenZyDiv('"+divid+"');return false;\" id='buttonSave'>ȷ��</button>";
		divHtml+="</div></td></tr></tfoot>";
		divHtml+="</table></div></div>";
		
	createOtherDiv("רҵѡ��",divHtml,divid,"600","380");

}

//����༶����
function clickBjQt(bjpy){
	var divid = "div_bj_"+bjpy;
	var qtid = "div_qt_bj_"+bjpy;
	var hiid = "hi_"+bjpy;
	var sfzxs="";
	var nj_click = getClickNj();//��ѡ���꼶
	var xy_click = getClickXy();//��ѡ��ѧԺ
	var zy_click = getClickZy();//��ѡ��רҵ
	
	var userStatus = $("userStatus").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;
	var searchPath = jQuery("#searchPath").val();
	if(searchPath=="xsxx_xsxxgl_cxfzxs.do"){
		sfzxs="0";
	}
	if(searchPath=="xsxx_xsxxgl_cxzxs.do"){
		sfzxs="1";
	}
	var divHtml ="<div class='search_advanced'><div class='prop-item'  style='border:none !important'>";
		divHtml+="<table width='80%' border='0' class='formlist open01'>";
		divHtml+="<tbody><tr><td colspan='4'>";
		divHtml+="<font color='orange' size='3'>"+bjpy+"�ִ�ͷ�༶</font>";
		divHtml+="</td></tr>";
		
		divHtml+="<tr><td colspan='4'>";
		divHtml+="<div style=\"height:260px;overflow-x:hidden;overflow-y:auto;\"><table style=\"width:100%\">";

		//�����tr����
		var tr_num = "6";
		
		dwr.engine.setAsync(false);
				
		searchUtil.getBjInfoByTj(bjpy,nj_click,xy_click,zy_click,userStatus,userName,userDep,sfzxs,function(data){
		
			if(data !=null && data.length >0){
				
				var size = data.length;
				
				//������������ʵ������Ϊ׼
				if((size/2) > tr_num){
					tr_num = parseInt(size/2);
					
					//���һ�з����������
					var sy_num = parseInt(size%2);
					if(sy_num != "0"){
						tr_num =parseInt(tr_num)+1;
					}
				}
				
				var n = size;
				
				for(var i=0;i<tr_num;i++){
					
					divHtml+="<tr style=\"width:100%;height:30px;\">";
					
					for(var j=0;j<2;j++){
					
						if(n <= size && n >= 0){
						
							n--;
							
							if(n!=-1){
							
								var bjid = "a_bj_"+data[n].bjdm;
								var xsid = "bj_mc_xs_"+data[n].bjdm;
								var ycid = "bj_mc_yc_"+data[n].bjdm;
							
								divHtml+="<td style=\"width:50%;\">";
								if(!$(xsid) && !$(ycid)){
									
									var bjmc = data[n].bjmc;

									if(bjmc.length > 20){
										bjmc = bjmc.substring(0,20)+"...";
									}
									divHtml+="<li><a href='#' class='bg_none' name='a_bj_mc'id=\""+ycid+"\" style=\"white-space: nowrap;\"";
									divHtml+="title=\""+data[n].bjmc+"\"";
									divHtml+="onclick=\"clickBj(this);";
									divHtml+="creatClickedTj('bj','�༶','"+data[n].bjdm+"','"+data[n].bjmc+"',this);return false;\"";
									divHtml+=">"+bjmc+"</a></li>";
								}else{
									divHtml+="&nbsp;";
								}
								divHtml+="</td>";
							
							}else{
								divHtml+="<td style=\"width:50%;\">&nbsp;</td>";
							}	
						}else{
							divHtml+="<td style=\"width:50%;\">&nbsp;</td>";
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
		
	createOtherDiv("�༶ѡ��",divHtml,divid,"600","380");
}

/** ===============================����¼� end===============================*/

/** ===============================����================================*/

//�����µ�רҵ
function setNewZy(){
	
	var nj_click = getClickNj();
	var xy_click = getClickXy();

	var noxy = false;

	if(xy_click.length == 0){
		noxy = true;
	}
	
	dwr.engine.setAsync(false);
			
	var divHtml = "<ul id=\"zy_ul\">";

	var userStatus = $("userStatus").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;

	//����ѧԺ����ȡ��רҵ
	searchUtil.getZyInfoByXy(nj_click,xy_click,userStatus,userName,userDep,function(data){
		if(data !=null && data.length >0){
			
			var zy_count = 0;
			var zy_py_num = 0;
			
			//ѭ��ƴ��
			for(var i=0;i<PY_BIG.length;i++){
			
				var	flag = true;
				var over_flag = false;
				var qt_flag = true;
				var qt_num = 0;
				
				//רҵ�����б�
				for(var j=0;j<data.length;j++){
					
					if(PY_BIG[i] == data[j].zypy){
					
						var qi_id = "zy_qt_zy_"+PY_BIG[i];

						zy_py_num++;
						
						if(!noxy){//ѡ��ѧԺ
							if(zy_count < 12){
								
								if(flag){
								
									divHtml += "<li>";
									
									divHtml += "<h5 id=\"zy_py_xs_";
									divHtml += zy_py_num;
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;
									flag = false;
								}
							
								divHtml += " <a href=\"#\" class=\"\" name=\"a_zy_mc\" ";
								divHtml += " id=\"zy_mc_xs_";
								divHtml += data[j].zydm;
								divHtml += "\"";
								divHtml += "onclick=\"clickZy(this);";
								divHtml += "creatClickedTj('zy','רҵ','"+data[j].zydm+"','"+data[j].zymc+"',this);return false;\">";
								divHtml += data[j].zymc;
								divHtml += "</a>";
								
							}else{	
								if(flag){
									divHtml += "<li>";
												
									divHtml += "<h5 style=\"display:none\" id=\"zy_py_yc_";
									divHtml += zy_py_num;
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;
									flag = false;
								}					
								
								divHtml += " <a href=\"#\" class=\"\" name=\"a_zy_mc\" ";
								divHtml += " id=\"zy_mc_yc_";
								divHtml += data[j].zydm;
								divHtml += "\" style=\"display:none;\"";
								divHtml += "onclick=\"clickZy(this);";
								divHtml += "creatClickedTj('zy','רҵ','"+data[j].zydm+"','"+data[j].zymc+"',this);return false;\">";
								divHtml += data[j].zymc;
								divHtml += "</a>";
								
								divHtml += "<input type=\"hidden\" name=\"zy_hidv_yc\"";
								divHtml += "id=\"xy_hidv_yc_";
								divHtml += data[j].zydm;
								divHtml += "\" value=\"";
								divHtml += data[j].zydm;
								divHtml += "\"/>";
							}
						}else{//δѡ��ѧԺ
						
							if(zy_count < 12){
								
								if(flag){
									divHtml += "<li>";
									
									divHtml += "<h5 id=\"zy_py_xs_";
									divHtml += zy_py_num;
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;
									flag = false;
								}
							
								if(qt_flag){
									divHtml += " <a href=\"#\" class=\"\" name=\"a_zy_mc\" ";
									divHtml += " id=\"zy_mc_xs_";
									divHtml += data[j].zydm;
									divHtml += "\"";
									divHtml += "onclick=\"clickZy(this);";
									divHtml += "creatClickedTj('zy','רҵ','"+data[j].zydm+"','"+data[j].zymc+"',this);return false;\">";
									divHtml += data[j].zymc;
									divHtml += "</a>";
																				
									qt_num++;
									
									//����
									if(qt_num == 3){
										
										zy_count++;
										zy_count++;
										
										divHtml += "<a href=\"#\" class=\"moreValue_click\" onclick=\"clickZyQt(\'";
										divHtml += data[j].zypy;
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
									
									divHtml += "<h5 style=\"display:none\" id=\"zy_py_yc_";
									divHtml += zy_py_num;
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;
									flag = false;
								}
							
								if(qt_flag){
									divHtml += " <a href=\"#\" class=\"\" name=\"a_zy_mc\" ";
									divHtml += " id=\"zy_mc_yc_";
									divHtml += data[j].zydm;
									divHtml += "\" style=\"display:none;\"";
									divHtml += "onclick=\"clickZy(this);";
									divHtml += "creatClickedTj('zy','רҵ','"+data[j].zydm+"','"+data[j].zymc+"',this);return false;\">";
									divHtml += data[j].zymc;
									divHtml += "</a>";
										
									divHtml += "<input type=\"hidden\" name=\"zy_hidv_yc\" id=\"zy_hidv_yc_";
									divHtml += data[j].zydm;
									divHtml += "\" value=\"";
									divHtml += data[j].zydm;
									divHtml += "\"/>";
								
									qt_num++;
									
									//����
									if(qt_num == 3){
										
										zy_count++;
										zy_count++;
																
										divHtml += "<a href=\"#\" class=\"moreValue_click\" style=\"display:none;\"onclick=\"clickZyQt(\'";
										divHtml += data[j].zypy;
										divHtml += "\')\"";
										divHtml += "id=\"";
										divHtml += qi_id;
										divHtml += "\">����</a>";
										
										divHtml += "<input type=\"hidden\" name=\"zy_hidv_qt\" id=\"zy_hidv_qt_";
										divHtml += data[j].zydm;
										divHtml += "\" value=\"zy_";
										divHtml += data[j].zypy;
										divHtml += "\"/>";
										
										qt_num = 0;
										
										qt_flag = false;
															
									}
								}
							}
						}
						
						if(qt_flag){
							zy_count++;
						}
						
					}
				}	
				
				if(over_flag){
					divHtml+="</li>";
					over_flag = false;
				}	
			}

			if(zy_count < 12){
				if($("zy_more")){
					$("zy_more").style.display = "none";
				}
			}else{
				$("zy_more").style.display = "";
				$("zy_more").innerHTML = "����";
				//$("zy_more").innerHTML = "չ��";
				$("zy_more").className = "more_down";
			}
		
			divHtml += "<input type=\"hidden\" id=\"zy_py_num\" value=\""+zy_py_num+"\"/>";
	
		}
	});

	divHtml += "</ul>";

	$("zy_ul").outerHTML = divHtml;	

	dwr.engine.setAsync(true);

}

//�����µİ༶
function setNewBj(){

	var nj_click = getClickNj();//ѡ�е��꼶
	var xy_click = getClickXy();//ѡ�е�ѧԺ
	var zy_click = getClickZy();//ѡ�е�רҵ


	var noTj = false;

	//�ж��Ƿ����������������ѡ��
	if(nj_click.length == 0 && xy_click.length == 0 && zy_click.length == 0){
		noTj = true;
	}
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"bj_ul\">";

	var userStatus = $("userStatus").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;
	
	//����ѧԺ����ȡ�ð༶
	searchUtil.getBjInfoByTj("",nj_click,xy_click,zy_click,userStatus,userName,userDep,function(data){
	
		if(data !=null && data.length >0){
				
			var bj_count = 0;
			var bj_py_num = 0;

			//ѭ��ƴ��
			for(var i=0;i<PY_BIG.length;i++){
			
				var	flag = true;
				over_flag = false;
				var qt_flag = true;
				var qt_num = 0;
				
				//�༶�����б�
				for(var j=0;j<data.length;j++){
					
					if(PY_BIG[i] == data[j].bjpy){
					
						var qi_id = "bj_qt_bj_"+PY_BIG[i];

						bj_py_num++;
						
							if(bj_count < 12){
								
								if(flag){
								
									divHtml += "<li>";
									
									divHtml += "<h5 id=\"bj_py_xs_";
									divHtml += bj_py_num;
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;								
									flag = false;
								}
							
								if(qt_flag){
									divHtml += " <a href=\"#\" class=\"\" name=\"a_bj_mc\" ";
									divHtml += " id=\"bj_mc_xs_";
									divHtml += data[j].bjdm;
									divHtml += "\"";
									divHtml += "onclick=\"clickBj(this);";
									divHtml += "creatClickedTj('bj','�༶','"+data[j].bjdm+"','"+data[j].bjmc+"',this);return false;\">";
									divHtml += data[j].bjmc;
									divHtml += "</a>";
																				
									qt_num++;
									
									//����
									if(qt_num == 3){
										
										bj_count++;
										bj_count++;
										
										var bj_num = getQtBjNum(data[j].bjpy);

										if(bj_num >3){
											divHtml += "<a href=\"#\" class=\"moreValue_click\" onclick=\"clickBjQt(\'";
											divHtml += data[j].bjpy;
											divHtml += "\')\"";
											divHtml += "id=\"";
											divHtml += qi_id;
											divHtml += "\">����</a>";
										}
										qt_num = 0;
										
										qt_flag = false;
															
									}
								}														
							}else{
							
								if(flag){
								
									divHtml += "<li>";
									
									divHtml += "<h5 style=\"display:none\" id=\"bj_py_yc_";
									divHtml += bj_py_num;
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;										
									flag = false;
								}
							
								if(qt_flag){
								
									divHtml += " <a href=\"#\" class=\"\" name=\"a_bj_mc\" style=\"display:none;\"";
									divHtml += " id=\"bj_mc_yc_";
									divHtml += data[j].bjdm;
									divHtml += "\"";
									divHtml += "onclick=\"clickBj(this);";
									divHtml += "creatClickedTj('bj','�༶','"+data[j].bjdm+"','"+data[j].bjmc+"',this);return false;\">";
									divHtml += data[j].bjmc;
									divHtml += "</a>";			
										
									divHtml += "<input type=\"hidden\" name=\"bj_hidv_yc\" id=\"bj_hidv_yc_";
									divHtml += data[j].bjdm;
									divHtml += "\" value=\"";
									divHtml += data[j].bjdm;
									divHtml += "\"/>";
								
									qt_num++;
									
									//����
									if(qt_num == 3){
										
										bj_count++;
										bj_count++;
										
										divHtml += "<a href=\"#\" style=\"display:none;\" class=\"moreValue_click\" onclick=\"clickBjQt(\'";
										divHtml += data[j].bjpy;
										divHtml += "\')\"";
										divHtml += "id=\"";
										divHtml += qi_id;
										divHtml += "\">����</a>";														
										
										divHtml += "<input type=\"hidden\" name=\"bj_hidv_qt\" id=\"bj_hidv_qt_";
										divHtml += data[j].bjdm;
										divHtml += "\" value=\"bj_";
										divHtml += data[j].bjpy;
										divHtml += "\"/>";
										
										qt_num = 0;
										
										qt_flag = false;
															
									}
								}
							}
						
						if(qt_flag){
							bj_count++;
						}
						
					}

				}	
				
				if(over_flag){
					divHtml+="</li>";
					over_flag = false;
				}		
			}

			if(bj_count <= 12){
				if($("bj_more")){
					$("bj_more").style.display = "none";
				}
			}else{
				$("bj_more").style.display = "";
				$("bj_more").innerHTML = "����";
				//$("bj_more").innerHTML = "չ��";
				$("bj_more").className = "more_down";
			}
			
			divHtml += "<input type=\"hidden\" id=\"bj_py_num\" value=\""+bj_py_num+"\"/>";
		}
	});
			
	divHtml += "</ul>";
	$("bj_ul").outerHTML = divHtml;	
	
	dwr.engine.setAsync(true);
	
}

//��������༶����
function getQtBjNum(bjpy){
	var divid = "div_bj_"+bjpy;
	var qtid = "div_qt_bj_"+bjpy;
	var hiid = "hi_"+bjpy;
	
	var nj_click = getClickNj();//��ѡ���꼶
	var xy_click = getClickXy();//��ѡ��ѧԺ
	var zy_click = getClickZy();//��ѡ��רҵ
	
	var userStatus = $("userStatus").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;
	
	var num = 0;
	dwr.engine.setAsync(false);
				
	searchUtil.getBjInfoByTj(bjpy,nj_click,xy_click,zy_click,userStatus,userName,userDep,function(data){
		
		if(data !=null && data.length >0){
			num = data.length;
		}
	});
		
	dwr.engine.setAsync(true);
	
	return num;
}
/** ===============================���� end================================*/

/** ===============================��ط���================================*/

//���ɲ�	
function createOtherDiv(title,divHtml,divid,width,height){
	var isbackDiv = true;
	if($(divid)==null){//��ʾ������ 
		var floatDiv = document.createElement('div');
		floatDiv.id = divid;
		floatDiv.style.position = "absolute";
		floatDiv.style.width = width;
		floatDiv.style.height = height;
		floatDiv.style.backgroundColor = "#FFFFFF";
		floatDiv.style.overflow = "hidden";
		floatDiv.style.border = "1px solid rgb(167, 189, 211)";
		
		var d_width = document.body.clientWidth;
		var d_height = document.body.clientHeight;
		var d_left_top = (d_width - width) / 2 +"px";
		var d_top_top =  "100" + "px";
		
		floatDiv.style.top = d_top_top;
		floatDiv.style.left = d_left_top;
		floatDiv.style.zIndex  = 1001;
		
	
		//temp_divHtml=divHtml;
		
		var dd_html="";
		dd_html += "<div id=\"windown-title\" align='left'><h2>"+title+"</h2>";
		dd_html += "<span id=\"windown-close\" onclick=\"hiddenZyDiv('"+divid+"');return false;\">ȷ��</span>";
		dd_html += "</div>";
		dd_html += "<div id=\"open_win\" class=\"open_win01\" style=\"padding-top:5px;padding-bottom:5px;\">";
		floatDiv.innerHTML = dd_html+divHtml+"</div>";
		//document.getElementById(divId).innerHTML = "";
		//document.body.removeAttribute($(divId))
		document.forms[0].appendChild(floatDiv);
	}else{
		$(divid).style.display = "block";
	}
	
	if($('##backDiv##')==null && isbackDiv ==true){//��ʾ����  
	
		var backDiv = document.createElement('div');
		backDiv.id = "##backDiv##";
		backDiv.style.backgroundColor = "Black";
		backDiv.style.filter = "alpha(opacity=60)";
		backDiv.style.MozOpacity = "0.70";
		backDiv.style.position = "absolute";
		backDiv.style.left = "0px";
		backDiv.style.top = "0px";
		backDiv.style.width = Math.max(document.body.scrollWidth, document.body.clientWidth);
		var t_height = Math.max(document.body.scrollHeight, document.body.clientHeight);
		if(t_height <800){
			t_height = 800; 
		}
		backDiv.style.height = t_height+"px";
		document.body.appendChild(backDiv);
		$('##backDiv##').style.xIndex = 1000;
	}else if(isbackDiv ==true){
		$('##backDiv##').style.display = "block";
	}
	
	i = document.getElementsByTagName("select").length;
	for (j = 0; j < i; j++) {
		var obj = document.getElementsByTagName("select")[j];
		var id = obj.id;
		var arr;
		var splitName;
		
		if ($(id)){
			arr = id.split('_');
		}
		
		if (null != arr && arr.length>0){
			splitName=arr[0];
		}
		
		if (splitName!="select"){
			obj.style.display = "none";
		}
		
	}
}

//���רҵ������
function removeZyDiv(){
	//ѭ��ƴ��
	for(var i=0;i<PY_BIG.length;i++){
		var id = "div_zy_"+PY_BIG[i];
		if($(id)){
			//�����ѡ����
			var a_num = $(id).getElementsByTagName('a').length;
			for(var j=0;j<a_num;j++){
				var obj = $(id).getElementsByTagName('a')[j];
				if(obj.name == "a_zy_mc"){
					var a_id = obj.id;
					var zydm = a_id.substring(9,obj.id.length);
					var dd_id = zydm + "_zy_yxtj_dd";
					
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

//��հ༶������
function removeBjDiv(){
	//ѭ��ƴ��
	for(var i=0;i<PY_BIG.length;i++){
		var id = "div_bj_"+PY_BIG[i];
		if($(id)){
			//�����ѡ����
			var a_num = $(id).getElementsByTagName('a').length;
			for(var j=0;j<a_num;j++){
				var obj = $(id).getElementsByTagName('a')[j];
				if(obj.name == "a_bj_mc"){
					var a_id = obj.id;
					var zydm = a_id.substring(9,obj.id.length);
					var dd_id = zydm + "_bj_yxtj_dd";
					
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

//����רҵ��
function hiddenZyDiv(id){

	$(id).style.display="none";
	
	if($('##backDiv##')!=null){ 
		$('##backDiv##').style.display = "none";
	}
	
	i = document.getElementsByTagName("select").length;

	for (j = 0; j < i; j++) {
		document.getElementsByTagName("select")[j].style.visibility = "";
		document.getElementsByTagName("select")[j].style.display = "";
	} 
}
/** ===============================��ط��� end================================*/

//���ѧԺ
function clickXyNew(obj){
		
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}

	//����רҵ����
	if($("zyNew_ul")){
		//����רҵ
		//setNewZy();
		creatBmNewHtml("zyNew");
		//���רҵ����DIV
		removeZyNewDiv();
	}

	//���ڰ༶����
	if($("bjNew_ul")){
		//�����༶
		//setNewBj();
		creatBmNewHtml("bjNew");
		//��հ༶����DIV
		removeBjNewDiv();
	}

	//���רҵ��ѡ����
	removeYxtjByLd("zyNew");
	//��հ༶��ѡ����
	removeYxtjByLd("bjNew");
}


//���רҵ������
function removeZyNewDiv(){
	//ѭ��ƴ��
	for(var i=0;i<PY_BIG.length;i++){
		var id = "div_zyNew_"+PY_BIG[i];
		if($(id)){
			//�����ѡ����
			var a_num = $(id).getElementsByTagName('a').length;
			for(var j=0;j<a_num;j++){
				var obj = $(id).getElementsByTagName('a')[j];
				if(obj.name == "a_zyNew_mc"){
					var a_id = obj.id;
					var zydm = a_id.substring(9,obj.id.length);
					var dd_id = zydm + "_zyNew_yxtj_dd";
					
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

//��հ༶������
function removeBjNewDiv(){
	//ѭ��ƴ��
	for(var i=0;i<PY_BIG.length;i++){
		var id = "div_bjNew_"+PY_BIG[i];
		if($(id)){
			//�����ѡ����
			var a_num = $(id).getElementsByTagName('a').length;
			for(var j=0;j<a_num;j++){
				var obj = $(id).getElementsByTagName('a')[j];
				if(obj.name == "a_bjNew_mc"){
					var a_id = obj.id;
					var zydm = a_id.substring(9,obj.id.length);
					var dd_id = zydm + "_bj_yxtjNew_dd";
					
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
//���רҵ
function clickZyNew(obj){
	
	var className = obj.className;

	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//���ڰ༶����
	if($("bjNew_ul")){
		//�����༶
		//setNewBj();
		creatBmNewHtml("bjNew");
		//��հ༶����DIV
		removeBjDiv();
	}
	
	//��հ༶��ѡ����
	removeYxtjByLd("bjNew");
}

//����༶
function clickBjNew(obj){

	var className = obj.className;

	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
}


//��������
function creatBmNewHtml(bmlx){
	
	var ul_id = bmlx+"_ul";
	
	var nj_click = getClickNjNew();
	var xy_click = getClickXyNew();
	var zy_click = getClickZyNew();
	var v4Path = stylePath;

	//����
 	var parameter = {
 		"njNew":nj_click.join("!!@@!!"),
 		"xyNew":xy_click.join("!!@@!!"),
 		"zyNew":zy_click.join("!!@@!!"),
 		"bmlx":bmlx,
 		"stylePath":v4Path
	};
	var url="seachTjManage.do?method=creatBmNewHtml";

	jQuery.ajaxSetup({async:false});
	
	if($(ul_id)){
		jQuery("#"+ul_id).load(url,parameter,function(){
		
			var bm_num_id = bmlx+"_num";
			var bm_more_id = bmlx+"_more";
			var num = $(bm_num_id).value;
			
			if(num < 12){
				if($(bm_more_id)){
					$(bm_more_id).style.display = "none";
				}
			}else{
				$(bm_more_id).style.display = "";
				$(bm_more_id).innerHTML = "����";
				$(bm_more_id).className = "more_down";
			}
		});
	}
	
	jQuery.ajaxSetup({async:true});	
}

//���ѡ���꼶
function getClickNjNew(){

	//�꼶
	var nj_num = document.getElementsByName("tj_njNew").length;
	var nj_arr = new Array();
	var nj_count = 0;
	
	for(var i=0;i<nj_num;i++){
		var obj = document.getElementsByName("tj_njNew")[i];
		if(obj.className == "selectedValue"){
			var nj_v = obj.id.replace("tj_njNew_","");
			nj_arr[nj_count] = nj_v;
			nj_count++;
		}
	}
	
	return nj_arr;
}
//���ѡ��ѧԺ
function getClickXyNew(){

	//ѧԺ
	var xy_num = document.getElementsByName("a_xyNew_mc").length;
	var xy_arr = new Array();
	var xy_count = 0;

	for(var i=0;i<xy_num;i++){
		var obj = document.getElementsByName("a_xyNew_mc")[i];
		if(obj.className == "selectedValue"){
			var xydm_v = obj.id.substring(12,obj.id.length);
			xy_arr[xy_count] = xydm_v;
			xy_count++;
		}
	}
	return xy_arr;
}
//���ѡ��רҵ
function getClickZyNew(){

	//רҵ
	var zy_num = document.getElementsByName("a_zyNew_mc").length;
	var zy_arr = new Array();
	var zy_count = 0;

	for(var i=0;i<zy_num;i++){
		var obj = document.getElementsByName("a_zyNew_mc")[i];
		if(obj.className == "selectedValue"){
			var zydm_v = obj.id.substring(12,obj.id.length);
			zy_arr[zy_count] = zydm_v;
			zy_count++;
		}
	}
	
	return zy_arr;
}


//���רҵ����
function clickZyNewQt(zypy){
	var divid = "div_zyNew_"+zypy;
	var qtid = "div_qt_zyNew_"+zypy;
	var hiid = "hi_"+zypy;
	var userStatus = "";
	var userName = "";
	var userDep = "";
	var divHtml ="<div class='search_advanced'><div class='prop-item'  style='border:none !important'>";
		divHtml+="<table width='80%' border='0' class='formlist open01'>";
		divHtml+="<tbody><tr><td colspan='4'>";
		divHtml+="<font color='orange' size='3'>"+zypy+"�ִ�ͷרҵ</font>";
		divHtml+="</td></tr>";
		
		//�����tr����
		var tr_num = "6";
		dwr.engine.setAsync(false);
		searchUtil.getZyNewInfoByPy(zypy,userStatus,userName,userDep,function(data){
		
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
							
								var zyid = "a_zyNew_"+data[n].zydm;
								var xsid = "zyNew_mc_xs_"+data[n].zydm;
								var ycid = "zyNew_mc_yc_"+data[n].zydm;
							
								divHtml+="<td width='25%'>";
								if(!$(xsid) && !$(ycid)){
									
									var zymc = data[n].zymc;

									if(zymc.length > 6){
										zymc = zymc.substring(0,6)+"...";
									}
									divHtml+="<li><a href='#' class='bg_none' name='a_zyNew_mc'id=\""+ycid+"\" style=\"white-space: nowrap;\"";
									divHtml+="title=\""+data[n].zymc+"\"";
									divHtml+="onclick=\"clickZyNew(this);";
									divHtml+="creatClickedTj('zyNew','רҵ','"+data[n].zydm+"','"+data[n].zymc+"',this);return false;\"";
									divHtml+=">"+zymc+"</a></li>";
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
			
		divHtml+="</tbody>";
		divHtml+="<tfoot><tr><td colspan='4'><div class='btn'>";
		divHtml+="<button onclick=\"hiddenZyDiv('"+divid+"');return false;\" id='buttonSave'>ȷ��</button>";
		divHtml+="</div></td></tr></tfoot>";
		divHtml+="</table></div></div>";
		
	createOtherDiv("רҵѡ��",divHtml,divid,"600","380");

}

//����༶����
function clickBjNewQt(bjpy){
	var divid = "div_bj_"+bjpy;
	var qtid = "div_qt_bj_"+bjpy;
	var hiid = "hi_"+bjpy;
	
	var nj_click = getClickNjNew();//��ѡ���꼶
	var xy_click = getClickXyNew();//��ѡ��ѧԺ
	var zy_click = getClickZyNew();//��ѡ��רҵ
	
	var userStatus = $("userStatus").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;

	var divHtml ="<div class='search_advanced'><div class='prop-item' style='border:none !important'>";
		divHtml+="<table width='80%' border='0' class='formlist open01'>";
		divHtml+="<tbody><tr><td colspan='4'>";
		divHtml+="<font color='orange' size='3'>"+bjpy+"�ִ�ͷ�༶</font>";
		divHtml+="</td></tr>";
		
		divHtml+="<tr><td colspan='4'>";
		divHtml+="<div style=\"height:260px;overflow-x:hidden;overflow-y:auto;\"><table style=\"width:100%\">";

		//�����tr����
		var tr_num = "6";
		
		dwr.engine.setAsync(false);
				
		searchUtil.getBjNewInfoByTj(bjpy,nj_click,xy_click,zy_click,userStatus,userName,userDep,function(data){
		
			if(data !=null && data.length >0){
				
				var size = data.length;
				
				//������������ʵ������Ϊ׼
				if((size/2) > tr_num){
					tr_num = parseInt(size/2);
					
					//���һ�з����������
					var sy_num = parseInt(size%2);
					if(sy_num != "0"){
						tr_num =parseInt(tr_num)+1;
					}
				}
				
				var n = size;
				
				for(var i=0;i<tr_num;i++){
					
					divHtml+="<tr style=\"width:100%;height:30px;\">";
					
					for(var j=0;j<2;j++){
					
						if(n <= size && n >= 0){
						
							n--;
							
							if(n!=-1){
							
								var bjid = "a_bjNew_"+data[n].bjdm;
								var xsid = "bjNew_mc_xs_"+data[n].bjdm;
								var ycid = "bjNew_mc_yc_"+data[n].bjdm;
							
								divHtml+="<td style=\"width:50%;\">";
								if(!$(xsid) && !$(ycid)){
									
									var bjmc = data[n].bjmc;

									if(bjmc.length > 20){
										bjmc = bjmc.substring(0,20)+"...";
									}
									divHtml+="<li><a href='#' class='bg_none' name='a_bj_mc'id=\""+ycid+"\" style=\"white-space: nowrap;\"";
									divHtml+="title=\""+data[n].bjmc+"\"";
									divHtml+="onclick=\"clickBjNew(this);";
									divHtml+="creatClickedTj('bjNew','�༶','"+data[n].bjdm+"','"+data[n].bjmc+"',this);return false;\"";
									divHtml+=">"+bjmc+"</a></li>";
								}else{
									divHtml+="&nbsp;";
								}
								divHtml+="</td>";
							
							}else{
								divHtml+="<td style=\"width:50%;\">&nbsp;</td>";
							}	
						}else{
							divHtml+="<td style=\"width:50%;\">&nbsp;</td>";
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
		
	createOtherDiv("�༶ѡ��",divHtml,divid,"600","380");
}


//����꼶
function clickNjNew(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//����רҵ����
	if($("zyNew_ul")){
		//����רҵ
		//setNewZy();
		//creatBmHtml("zy");
		//���רҵ����DIV
		//removeZyDiv();
	}
	
	//���ڰ༶����
	if($("bjNew_ul")){
		//�����༶
		//setNewBj();	
		creatBmNewHtml("bjNew");
		//��հ༶����DIV
		removeBjNewDiv();
	}
	
	//���רҵ��ѡ����
	removeYxtjByLd("zyNew");
	//��հ༶��ѡ����
	removeYxtjByLd("bjNew");
}