var temp;
//�������ݲ���֤�����Ƿ�Ϊ��
function saveUpdate(url,pk){
	url = url.replace("/xgxt/","");
	var key = new Array();
	if(pk!=""){
		key=pk.split("-");
	}

	if(key.length > 0){
		for(var i=0;i<key.length;i++){
			if($(key[i])){
				if($(key[i]).value == ""){
					alertError("��\"*\"��Ŀ����Ϊ�գ���ȷ��");
					return false;
				}
			}
		}
	}
	showTips('���������У���ȴ�......');
	refreshForm(url);
}

//update 2013.06.21 ��������
function showOpenInfoNew(url,doType,w,h){
	if(doType == "update"){
		if(curr_row == null){
			alertInfo('��ѡ��Ҫ�޸ĵ����ݣ�');
			return false;
		}
	}else if(doType == "sh"){
		if(curr_row == null){
			alertInfo('��ѡ����˵����ݣ�');
			return false;
		}
	}else if(doType == "sb"){
		if(curr_row == null){
			alertInfo('��ѡ��Ҫ�걨�����ݣ�');
			return false;
		}
	}else if(doType == "cz"){
		if(curr_row == null){
			alertInfo('��ѡ��Ҫ���������ݣ�');
			return false;
		}
	}else if(doType == "view"){
		if(curr_row == null){
			alertInfo('��ѡ��Ҫ�鿴�����ݣ�');
			return false;
		}
	}
	var pk = curr_row.getElementsByTagName('input')[0].value;
	url+="&doType="+doType;
	url+="&pk="+pk;
	showDialog('',w,h,url);
	//showTopWin(url,w,h);
}
//���´���
function showOpenInfo(url,doType,mklx,w,h){

	var pk = "";
	
	if(doType == "update"){
		if(curr_row == null){
			alertInfo('��ѡ��Ҫ�޸ĵ����ݣ�');
			return false;
		}
	}else if(doType == "sh"){
		if(curr_row == null){
			alertInfo('��ѡ����˵����ݣ�');
			return false;
		}
	}else if(doType == "sb"){
		if(curr_row == null){
			alertInfo('��ѡ��Ҫ�걨�����ݣ�');
			return false;
		}
	}
	
	if(doType != "add"){
		pk = curr_row.getElementsByTagName('input')[0].value;
	}
	
	url+="&doType="+doType;
	url+="&pk="+pk;
	if(mklx != ""){
		url+="&mklx="+mklx;
	}
	
	showOpenWindow(url,w,h);
}
//���´���
function showOpenInfo(url,doType,mklx,w,h){

	var pk = "";
	
	if(doType == "update"){
		if(curr_row == null){
			alertInfo('��ѡ��Ҫ�޸ĵ����ݣ�');
			return false;
		}
	}else if(doType == "sh"){
		if(curr_row == null){
			alertInfo('��ѡ����˵����ݣ�');
			return false;
		}
	}else if(doType == "sb"){
		if(curr_row == null){
			alertInfo('��ѡ��Ҫ�걨�����ݣ�');
			return false;
		}
	}
	
	if(doType != "add"){
		pk = curr_row.getElementsByTagName('input')[0].value;
	}
	
	url+="&doType="+doType;
	url+="&pk="+pk;
	if(mklx != ""){
		url+="&mklx="+mklx;
	}
	
	showOpenWindow(url,w,h);
}

//����ҳ��
function openInfo(url){
	if(curr_row == null){
		alertInfo('��ѡ��Ҫ���������ݣ�');
		return false;
	}
	var pk = curr_row.getElementsByTagName('input')[0].value;
	url+="&pk="+pk;
	window.open(url);
}

//�����ύ
function sumitInfo(url,doType){
	var del_message = "";
	if($("del_message")){
		del_message = $("del_message").value;
	}
	var len=jQuery("input:checkbox[name=primarykey_checkVal]:checked").length;
	if(len > 0){
		if(del_message == ""){
			if(doType=="del"){
				del_message = "ȷ��Ҫɾ������ѡ������?";
			}else if(doType=="sh"){
				del_message = "ȷ������ѡ���ݵ����״̬?";
			}else if(doType=="submit"){
				del_message = "ȷ��Ҫ�ύ����ѡ�ļ�¼����?";
			}
		}
		
		url+="&doType="+doType;
		confirmInfo(del_message,function(tag){
			if(tag=="ok"){
			showTips('���������У���ȴ�......');
			refreshForm(url);
			}
		});
		
	}else{
		alertInfo("�빴ѡҪ���������");
		return false;
	}
}

//��������
function showGdtj(trId){

	var key = new Array();

	if(trId!=""){
		key=trId.split("-");
	}

	if(key.length > 0){
		for(var i=0;i<key.length;i++){
			var id = "tr"+key[i];
			if($(id)){
				if($("gdtj").checked){
					$(id).style.display="";
				}else{
					$(id).style.display="none";
				}
			}
		}
	}
}

//�س��¼�
function pressEnter(evt){
	evt=evt?evt:(window.event?window.event:null);
	var key = evt.keyCode;
	//�س�
	if(key == "13"){
		return true;
	}else{
		return false;
	}		
}

//�̶�����
function setFocus(id){
	if($(id)){
		$(id).focus();
	}
}

// ����Ƿ�Ψһ
function checkUnique(tab,obj,id){
	var pkValue = obj.value;
	
	if(pkValue != ""){
		basicOperaDwr.checkExists(tab, pkValue, function(data) {
			if (data) {
				displayMsgDiv(id);
				$('buttonSave').disabled = "disabled";
			} else {
				hideMsgDiv(id);
				$('buttonSave').disabled = "";
			}
		});
	}
}

//��ʾ��ʾ���
function displayMsgDiv(id){
	if($(id)){
		var msgdiv = $(id);
			msgdiv.className = "msg_prompt";
	}
}
		
//������ʾ���
function hideMsgDiv(id){
	if($(id)){
		var msgdiv = $(id);
			msgdiv.className = "hide";
	} 
}

//������ҳ
function returnHomPage(lx){
	
	var userType = $("userType").value;
	var url = "";
		
	if("stu" == userType){
		url = "/xgxt/stuPage.jsp";	
	}else{
		url = "/xgxt/teaPage.jsp";
	}
	
	if(lx == "ben"){//��ҳ��
		refreshForm(url);
	}else{
		parent.document.location = url;
	}
}

//�߼���ѯ
function showSearchTj(){
	var url = "/xgxt/seachTjManage.do?method=SeachTj";
	if($("path")){
		url+="&path="+$("path").value;
	}
	showTopWin(url,"600","480");
}

//�޸���ʾ��Ŀ
function updatePageSize() 
{
	var pageNo = parseInt($("pageNo").value);
	var maxPage = parseInt($("maxPage").value);
	var currentPage=parseInt($("currentPage").value);
	var pageSize = $("showNum").value.replace(/[^(\d)]/g,'');
	
	if (pageNo > maxPage) {
		return;
	}else{
		$("currentPage").value =pageNo;
	}
	
	if(pageSize !=""){
		$("pageRsSize").value = pageSize;
		$("editPageSize").value = "yes";
	}
	
	clickLeftMenu();
}

//��һҳ
function prePage(){

	var currentPage=parseInt($("currentPage").value);
	var maxPage = parseInt($("maxPage").value);

	if (currentPage == 1 || currentPage==0) {
		return;
	}else {
		var newPage = parseInt(currentPage - 1);
		$("currentPage").value = newPage;
		$("pageNum").value = newPage;
	}
	
	clickLeftMenu();
}

//��һҳ
function nextPage(){
	var currentPage=parseInt($("currentPage").value);
	var maxPage = parseInt($("maxPage").value);
	
	if (maxPage == currentPage) {
		return;
	}else {
		var newPage = parseInt(currentPage + 1);
		$("currentPage").value = newPage;
		$("pageNum").value = newPage;
	}
	
	clickLeftMenu();
}

//��ҳ
function firstPage() {
	var currentPage=parseInt($("currentPage").value);
	if (currentPage == 1 || currentPage == 0) {
		return;
	}
	$("currentPage").value = "1";
	$("pageNum").value = "1";
	
    clickLeftMenu();
}

//ĩҳ
function lastPage() {
	var currentPage=parseInt($("currentPage").value);
	var maxPage = parseInt($("maxPage").value);
	if (currentPage == maxPage) {
		return;
	} else {
		$("currentPage").value = maxPage;
		$("pageNum").value = maxPage;
	}
	
	clickLeftMenu();
}


/** ����ģ�� */
function hiddenMk(id){
	document.getElementById(id).style.display=(document.getElementById(id).style.display=='none')? '':'none'
}

/**
	�����㶨��idΪJD��
*/
function jd(){
	if($("jd")){
		$("jd").focus();
	}
}

//���ò�ѯ��ʾ��λ��
function setSearchMsgWz(left,top){
	
	if($("input_mhcx_msg")){
		$("input_mhcx_msg").style.left=left;
		$("input_mhcx_msg").style.top=top;
	}
}

//��������
function setLiClick(num){
	
	var li_num = document.getElementsByTagName('li').length;
	

	for(var i=0;i<li_num;i++){
	
		var obj = document.getElementsByTagName('li')[i];
		
		if(obj.className = "Child"){
			var id = "li_"+i;
			if($(id)){
				$(id).style.background="";

			}
		}
	}
	
	var id = "li_"+num;
	
	if($(id)){
		$(id).style.background="#dce8f8";
		var xmdm = $(id.replace("li_","xmdm_")).value;
	
		if($("shxm")){
			$("shxm").value = xmdm;
		}
	}
}

String.prototype.replaceAll = function(s1,s2) { 
	  return this.replace(new RegExp(s1,"gm"),s2); 
}

//��ʾ��������
function showHiddenNr(id){
	if($(id)){
		if($(id).style.display == "none"){
			$(id).style.display = "";
		}else{
			$(id).style.display = "none";
		}
	}
}

//���ɲ�	
function showWaitingDiv(time){

	document.getElementById("divWaiting").style.display="";
	document.getElementById("divDisable").style.display="";

	setTimeout("hiddenWaitingDiv()",time);
}

//������ʾ��Ϣ
function hiddenWaitingDiv(){
	document.getElementById("divWaiting").style.display="none";
	document.getElementById("divDisable").style.display="none";
}

//��ѯ�����(������)
function searchRsByAjaxP(url,otherValue,params){
	
	var currentPage = "1";
	if($("currentPage")){
		currentPage = $("currentPage").value;
	}

	var editPageSize = "";
	if($("editPageSize")){
		editPageSize = $("editPageSize").value;	
	}
		
	var pagesize = "";
	if($("pagesize")){
		pagesize = $("pagesize").value;
	}

	//ģ����ѯ
	var input_mhcx = "";
	if($("input_mhcx")){
		input_mhcx = $("input_mhcx").value;
	}
	
	var mhcx_lx = "";
	if($("mhcx_lx")){
		mhcx_lx = $("mhcx_lx").value;
	}
	//�����ѯ
	var searchLx = new Array();
	var searchTj = new Array();
	var searchTjz = new Array();
	
	var n=0;
	var m=3;
	
	searchLx[0]="xy";
	searchLx[1]="zy";
	searchLx[2]="bj";
    var path = jQuery("#searchPath").val();
    jytj = new Array();
    //��ȡ�ò�ѯҳ��ĸ߼���ѯ����
    jQuery.ajaxSettings.async = false;
    jQuery.post("seachTjManage.do?method=getSuperSearchTj", {
        path : path
    }, function(data) {
        jytj = data;
    }, 'json');
    jQuery.ajaxSettings.async = false;
	for(var i=0;i<jytj.length;i++){
		searchLx[m]=jytj[i];
		m++;
	}

	var tj_num = $("searchTjDiv").getElementsByTagName('input').length;
		
	for(var j=0;j<tj_num;j++){
		var obj = $("searchTjDiv").getElementsByTagName('input')[j];
		searchTj[n]=obj.name;
		searchTjz[n]=escape(obj.value);
		n++;
	}
	
	//����
	var arrange = "";
	if($("arrange")){
		arrange = jQuery("#arrange").val();
	}
	
	var fashion = "";
	if($("fashion")){
		fashion = jQuery("#fashion").val();
	}
	
	//��������
 	var parameter = {
		"currentPage":currentPage,
		"editPageSize":editPageSize,
		"pagesize":pagesize,
		"input_mhcx":escape(input_mhcx),
		"mhcx_lx":mhcx_lx,
		"searchTj":searchTj.join("!!@@!!"),
		"searchTjz":searchTjz.join("!!@@!!"),
		"searchLx":searchLx.join("!!@@!!"),
		"arrange":arrange,
		"fashion":fashion,
		"otherValue":otherValue.join("!!@@!!")
	};
  
 	parameter = jQuery.extend(parameter, params || {});
 	
 	$("divWaiting").style.display="";
	$("divDisable").style.display="";
		
	jQuery("#div_rs").load(url,parameter,function(){
		setTimeout("setPageInfo()",500);
		$("divWaiting").style.display="none";
		$("divDisable").style.display="none";
	});

}

//��ѯ�����
function searchRsByAjax(url,otherValue){
	
	var currentPage = "1";
	if($("currentPage")){
		currentPage = $("currentPage").value;
	}

	var editPageSize = "";
	if($("editPageSize")){
		editPageSize = $("editPageSize").value;	
	}
		
	var pagesize = "";
	if($("pagesize")){
		pagesize = $("pagesize").value;
	}

	//ģ����ѯ
	var input_mhcx = "";
	if($("input_mhcx")){
		input_mhcx = $("input_mhcx").value;
	}
	
	var mhcx_lx = "";
	if($("mhcx_lx")){
		mhcx_lx = $("mhcx_lx").value;
	}
	//�����ѯ
	var searchLx = new Array();
	var searchTj = new Array();
	var searchTjz = new Array();
	
	var n=0;
	var m=3;
	
	searchLx[0]="xy";
	searchLx[1]="zy";
	searchLx[2]="bj";
    var path = jQuery("#searchPath").val();
    jytj = new Array();
    //��ȡ�ò�ѯҳ��ĸ߼���ѯ����
    jQuery.ajaxSettings.async = false;
    jQuery.post("seachTjManage.do?method=getSuperSearchTj", {
        path : path
    }, function(data) {
        jytj = data;
    }, 'json');
    jQuery.ajaxSettings.async = false;
	for(var i=0;i<jytj.length;i++){
		searchLx[m]=jytj[i];
		m++;
	}

	var tj_num = $("searchTjDiv").getElementsByTagName('input').length;
		
	for(var j=0;j<tj_num;j++){
		var obj = $("searchTjDiv").getElementsByTagName('input')[j];
		searchTj[n]=obj.name;
		searchTjz[n]=escape(obj.value);
		n++;
	}
	
	//����
	var arrange = "";
	if($("arrange")){
		arrange = jQuery("#arrange").val();
	}
	
	var fashion = "";
	if($("fashion")){
		fashion = jQuery("#fashion").val();
	}
	
	//��������
 	var parameter = {
		"currentPage":currentPage,
		"editPageSize":editPageSize,
		"pagesize":pagesize,
		"input_mhcx":escape(input_mhcx),
		"mhcx_lx":mhcx_lx,
		"searchTj":searchTj.join("!!@@!!"),
		"searchTjz":searchTjz.join("!!@@!!"),
		"searchLx":searchLx.join("!!@@!!"),
		"arrange":arrange,
		"fashion":fashion,
		"otherValue":otherValue.join("!!@@!!")
	};
  
 	$("divWaiting").style.display="";
	$("divDisable").style.display="";
		
	jQuery("#div_rs").load(url,parameter,function(){
		setTimeout("setPageInfo()",500);
		$("divWaiting").style.display="none";
		$("divDisable").style.display="none";
	});

}


function getSuperSearch(){
	
	//ģ����ѯ
	var input_mhcx ,mhcx_lx ,fashion,plcx_xh,plcx_xm;
	if(jQuery("#plcx_xh")){
		plcx_xh = jQuery("#plcx_xh").val();
	}
	if(jQuery("#plcx_xm")){
		plcx_xm = jQuery("#plcx_xm").val();
	}
	if(jQuery("#input_mhcx")){
		input_mhcx = jQuery("#input_mhcx").val();
	}
	
	if(jQuery("#mhcx_lx")){
		mhcx_lx = jQuery("#mhcx_lx").val();
	}

	//�����ѯ
	var searchLx = new Array();
	var searchTj = new Array();
	var searchTjz = new Array();
	
	searchLx[0]="xy";
	searchLx[1]="zy";
	searchLx[2]="bj";
	var path = jQuery("#searchPath").val();
	jytj = new Array();
	//��ȡ�ò�ѯҳ��ĸ߼���ѯ����
    jQuery.ajaxSettings.async = false;
    jQuery.post("seachTjManage.do?method=getSuperSearchTj", {
        path : path
    }, function(data) {
		jytj = data;
    }, 'json');
    jQuery.ajaxSettings.async = false;

	for(var i=0;i<jytj.length;i++){
		searchLx.push(jytj[i]);
		
	}

	var tj_num = jQuery("#searchTjDiv input").length;
	for(var j=0;j<tj_num;j++){
		var obj = jQuery("#searchTjDiv input").eq(j);
		searchTj.push(obj.attr("name"));
		searchTjz.push(obj.val());
	}
	var sears = searchLx.join("!!@@!!");
	
	if(sears.indexOf('kssj') < 0){
		sears+='!!@@!!kssj';
	}
	if(sears.indexOf('jssj') < 0){
		sears+='!!@@!!jssj';
	}
	
 	var map = {
 		"plcx_xh":plcx_xh,
 		"plcx_xm":plcx_xm,
		"input_mhcx":input_mhcx,
		"mhcx_lx":mhcx_lx,
		"searchTj":searchTj.join("!!@@!!"),
		"searchTjz":searchTjz.join("!!@@!!"),
		"searchLx":sears,
		"path":jQuery("#path").val()
	};
	return map;
}

//���ø߼���ѯ����������������ʹ��
function addSuperSearchParams(url){
	var map = getSuperSearch();
	
	if(url.indexOf("?") > -1){
		url += "&";
	}else{
		url += "?";
	}
	url += "path=" + map.path + "&mhcx_lx=" + map.mhcx_lx;
	jQuery("input[name=searchLx],input[name=searchTj],input[name=searchTjz],input[name=input_mhcx]").remove();
	
	var html = "<input type = 'hidden' name='searchLx' value='"+map.searchLx+"'>";
	html += "<input type = 'hidden' name='searchTj' value='"+map.searchTj+"'>";
	html += "<input type = 'hidden' name='searchTjz' value='"+map.searchTjz+"'>";
	if (map.input_mhcx){
		html += "<input type = 'hidden' name='input_mhcx' value='"+map.input_mhcx+"'>";
	}
	jQuery("form").eq(0).append(html);
	return url;
}

//����
function arrangeRs(obj){
	var id = obj.id;
	var arrange = jQuery("#arrange").val();
	var fashion = jQuery("#fashion").val();
	
	if(id == arrange){
		if(fashion == "asc"){
			jQuery("#fashion").val("desc");
		}else{
			jQuery("#fashion").val("asc");
		}
	}else{
		jQuery("#arrange").val(id);
		jQuery("#fashion").val("asc")
	}
	
	searchRs();
}

function setPageInfo(){
	var max_record = jQuery("#ajax_max_record").val();
	var max_page = jQuery("#ajax_max_page").val();
	var max_current = jQuery("#ajax_max_current").val();
	var page_size = jQuery("#ajax_page_size").val();
	var page_maxpage = jQuery("#ajax_page_maxpage").val();
	
	if($("max_record")){
		jQuery("#max_record").html(max_record);
	}
	
	if($("max_page")){
		jQuery("#max_page").html(max_page);
	}
	
	if($("pageno")){
		jQuery("#pageno").val(max_current);
	}
	
	if($("page_Size")){
		jQuery("#page_Size").val(page_size);
	}
	
	if($("pagesize")){
		jQuery("#pagesize").val(page_size);
	}
	
	if($("maxPage")){
		jQuery("#maxPage").val(page_maxpage);
	}
}

//��ʾ��������Ϣ
//ָ��ʱ��800�������ʾ
function showHelpDiv(){
	if($("div_help")){
		jQuery(".help").bind("mousedown",function(){
			jQuery('#div_help').show();
		});	
		/**
		jQuery(".help").bind("mouseout",function(){
			jQuery("#div_help").hide();
			window.clearTimeout(temp);
		});
		**/
	}
	return false;
}

//ѡ���ļ�����·��
function browseFolder(id) {
    try {
        var Message = "\u8bf7\u9009\u62e9\u6587\u4ef6\u5939"; //ѡ�����ʾ��Ϣ
        var Shell = new ActiveXObject("Shell.Application");
        var Folder = Shell.BrowseForFolder(0, Message, 64, 17);//��ʼĿ¼Ϊ���ҵĵ���
		//var Folder = Shell.BrowseForFolder(0,Message,0); //��ʼĿ¼Ϊ������
        if (Folder != null) {
            Folder = Folder.items(); // ���� FolderItems ����
            Folder = Folder.item(); // ���� Folderitem ����
            Folder = Folder.Path;   // ����·��
            if (Folder.charAt(Folder.length - 1) != "\\") {
                Folder = Folder + "\\";
            }
            $(id).value = Folder;
            return Folder;
        }
    }
    catch (e) {
        alertInfo(e.message);
    }
}

//��ʼ�������б�
function defaultBmOption(){
	//�����꼶
	jQuery(function(){	
		var nj = jQuery('#nj');
		
		var url = "xsxx_ajax.do?method=setBmOption";
			url+="&bmjb=nj";
			
		nj.combobox({
			valueField:'dm',
			textField:'mc',
			url:url,
			data:{url:url},
			panelHeight:"auto",
			onChange:function(){
				setTimeout("setBmList('zydm')",500);
				setTimeout("setBmList('bjdm')",1000);
			}
		});
	});
	
	//����ѧԺ
	jQuery(function(){	
		var xy = jQuery('#xydm');
		
		var url = "xsxx_ajax.do?method=setBmOption";
			url+="&bmjb=xydm";
			
		xy.combobox({
			valueField:'dm',
			textField:'mc',
			url:url,
			data:{url:url},
			panelHeight:"auto",
			onChange:function(){
				setTimeout("setBmList('zydm')",500);
				setTimeout("setBmList('bjdm')",1000);
			}
		});
	});
	
	//����רҵ
	jQuery(function(){	
		var zy = jQuery('#zydm');
		
		var url = "xsxx_ajax.do?method=setBmOption";
			url+="&bmjb=zydm";
			
		zy.combobox({
			valueField:'dm',
			textField:'mc',
			url:url,
			data:{url:url},
			panelHeight:"auto",
			onChange:function(){
				setTimeout("setBmList('bjdm')",500);
			}
		});
	});
	
	//���ذ༶
	jQuery(function(){	
		var bj = jQuery('#bjdm');
		
		var url = "xsxx_ajax.do?method=setBmOption";
			url+="&bmjb=bjdm";
			
		bj.combobox({
			valueField:'dm',
			textField:'mc',
			url:url,
			data:{url:url},
			panelHeight:"auto"
		});
	});
}

//����
function setBmList(bmjb){
	var nj = jQuery('#nj').combobox('getValue');
	var xy = jQuery('#xydm').combobox('getValue');
	var zy = jQuery('#zydm').combobox('getValue');
	var bj = jQuery('#bjdm').combobox('getValue');
	
	var url = "xsxx_ajax.do?method=setBmOption";
		url+= "&nj="+nj;
		url+= "&xydm="+xy;
		if(bmjb != "zydm"){
			url+= "&zydm="+zy;
		}
		if(bmjb != "bjdm"){
			url+= "&bjdm="+bj;
		}
		url+= "&bmjb="+bmjb;
		
	jQuery(function(){
		var obj = jQuery('#'+bmjb);
			obj.combobox({
			valueField:'dm',
			textField:'mc',
			url:url,
			data:{url:url},
			panelHeight:"auto"
		});
	});
}

//��ʾ������Ϣ
function showErrMessage(result,id){
	if(result != ""){
		if($("em_"+id)){
			$("em_"+id).innerHTML = result;
		}
		if($("sp_"+id)){
			$("sp_"+id).style.display = "";
		}
	}else{
		if($("em_"+id)){
			$("em_"+id).innerHTML = "";
		}
		if($("sp_"+id)){
			$("sp_"+id).style.display = "none";
		}
	}
}

//ǰ������ģ��
function goOtherGnmk(url){

	showWaitingDiv("30000");
	
	refreshForm(url);
}

//ִ�гɹ�֮��
function doSuccess(result){
	$("divWaiting").style.display="none";
	$("divDisable").style.display="none";
	alertInfo(result);
}

//�����Ƿ��޸�
function setEditValue(){
	if($("had_edit")){
		$("had_edit").value = "yes";
	}
}

function setDivHeight(){
	if($("table_rs")){
		jQuery("#div_rs").height(jQuery("#table_rs").height()+50);	
	}
}

//�������ֵ�Ƿ����
function checkInputIsExisting(table_name,column_name,column_value,query){
	
	var flag = false;
	
	jQuery.ajaxSetup({async:false});
	
	var url = "commUtil.do?method=checkInputIsExisting";
	
	// ����
 	var parameter = {
 		"table_name":table_name,
 		"column_name":column_name,
 		"column_value":escape(column_value),
 		"query":query
	};
	
	jQuery.post(url,
		parameter,
		function(result){
			if(result){
				flag = result;
			}
		}
	);
	
	jQuery.ajaxSetup({async:true});	
	
	return flag;
}

//�����Ƿ����
function checkTableIsExisting(table_name){
	
	var flag = false;
	
	jQuery.ajaxSetup({async:false});
	
	var url = "commUtil.do?method=checkTableIsExisting";
	
	// ����
	var parameter = {
		"table_name":table_name
	};
	
	jQuery.post(url,
		parameter,
		function(result){
			if(result){
				flag = result;
			}
		}
	);
	
	jQuery.ajaxSetup({async:true});	
	
	return flag;
}