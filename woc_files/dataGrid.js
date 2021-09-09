/*
 * 
 * Ajax ��ҳ��ѯ���
 * @author �����
 * ���ڣ�2013-4-8
 * 
 * �޸ļ�¼��
 * 1��2013-8-6 ���� radioselect ����֧�ֱ��ֻ��ѡ��һ��;
 * 
 * 
 */

(function($) {

	$.dataGrid = $.dataGrid || {};
	var gridConfig = {};
	$.extend($.dataGrid,{
		defaultConfig : {
			className:"dateline",
			width:"100%",
			sortTitle:"�������ϵ����������µ��ǽ���",
			multiselect:true,
			radioselect:false,
			uselastrow:false,
			usercols:null,
			uselastid:"",
			useurl:"",
			selectColor:"#CBE4F8",//ffe7e3 ����ʦ�� ��ɫ  #CBE4F8 ��ɫ
			height:"auto",
			pager:"pager",
			usedefined :false,//�Զ����ͷ����Ҫ��ҳ���Լ�дthead,ע�⣬��ʧȥ�Զ�����Ĺ��ܣ���Ϊû��ֱ��д��ҳ��û�а������¼�����Ҫ���ڸ���ͳ�Ʋ�ѯ
			rowNum:10,
			pageList:[10,20,50,100,200]
		},loadDataGrid : function(setting) {
			//Ĭ������
			var config = $.dataGrid.defaultConfig;
			//������
			var params = $.extend(config, setting || {});
			
			var ajaxParams = {
				"pages.pageSize":config["rowNum"],
				"pages.currentPage":1,
				"pages.sortName":config["sortname"],
				"pages.sortOrder":config["sortorder"]
			};
			
			//dataGrid ���
			var table = $("#"+config["id"]);
			//�����ʽ 
			table.addClass(config["className"]);
			table.attr("width",config["width"]);
			
			//�б�����
			var colList = params["colList"];
			//
			var initThead = function(){

				var thead = $("<thead></thead>");
				var tr = $("<tr class='nowrap'></tr>");
				var cols = 0;
				
				//֧�ֶ�ѡ
				if(config["multiselect"]){
					var checkbox = $("<input type='checkbox' name='grid_selectAll'/>");
					var td = $("<td width='2%'></td>");
					td.append(checkbox);
					tr.append(td);

					var selectAll = function(){
						//[982] �Ų�·
						//ȡ�����в���ѡ�е�checkbox����ɫ
						$("input[name=grid_key]").each(function(){
							var isD=$(this).attr("disabled");
							if(isD){
								$(this).parents("tr").css('background','');
								$(this).parents("tr").attr("bgselect","0");
							}
						});
						
						var checked = $(this).prop("checked");
						if (checked){
							$("input[name=grid_key]:not(:checked)").each(function(){
								//[982] �Ų�·
								//���Ϊ�ǿ�ѡ��checkbox ��������
								var isD=$(this).attr("disabled");
								if(!isD){
									$(this).parent().click();
								}
							});
						} else {
							$("input[name=grid_key]:checked").parent().click();
						/*	$("input[name=grid_key]:not(:checked)").each(function(){
								//��չ֧���������ɫΪѡ������Ϊ�Ѿ�ѡ��
								var bg=$(this).parents("tr").attr("bgselect");
								if(bg=="1"){
									$(this).parent().click();
								}
							});*/
						}
					};
					//ֻ��ѡ��һ��
					if (config["radioselect"]){
						checkbox.attr("disabled",true);
					} else {
						checkbox.bind("click",selectAll);
					}
					
					cols++;
				}

				var sortName = config["sortname"];
				
				$.each(colList,function(i,e){

					var td = $("<th></th>");
					
					if(e["index"] == sortName){
						var sortOrder = config["sortorder"];
						
						var aHtml = $("<a href='javascript:void(0);' name='grid_sort'></a>");
						aHtml.addClass("asc" == sortOrder ? "Sort_up" : "Sort_down");
						aHtml.append(e["label"]);
						aHtml.attr("title",config["sortTitle"]);
						td.append(aHtml);
						td.attr("sortOrder",sortOrder);
					} else {
						td.append(e["label"]);
					}

					td.attr("width",e["width"]);
					td.attr("sortName",e["index"]);
					tr.append(td);

					if(e["hidden"]){
						td.css("display","none");
					} else{
						cols++;
					}

					//��ͷ����
					if (e["noSort"] == null || !e["noSort"]){
						td.bind("click",function(){
							var sortOrder = $(this).attr("sortOrder");
							var sortName = $(this).attr("sortName");
							var sortClass;
							
							if (sortOrder != null && sortOrder != ""){
								sortOrder = sortOrder == "asc" ? "desc" : "asc";
								sortClass = sortOrder == "asc" ? "Sort_up" : "Sort_down";
							} else {
								sortOrder = "asc";
								sortClass = sortOrder == "asc" ? "Sort_up" : "Sort_down";
							}
	
							var sortHtml = $("<a href='javascript:void(0);' name='grid_sort'></a>");
							sortHtml.attr("class",sortClass);
							$('a[name=grid_sort]').parent().html($('a[name=grid_sort]').html());
							$(this).wrapInner(sortHtml);
							$(this).attr("sortOrder",sortOrder);
							ajaxParams["pages.sortOrder"] = sortOrder;
							ajaxParams["pages.sortName"] = sortName;
							initTbody();
						});
					}
				});
				config["cols"] = cols;
				thead.append(tr);
				table.find("thead").remove();
				table.append(thead);
			},initTbody = function(){

				var url = config["url"];
				
				var tbody = $("<tbody></tbody>");
				var ajaxOption = $.extend(ajaxParams, config["params"] || {});
				
				$.ajaxSetup({
					 contentType:"application/x-www-form-urlencoded;charset=utf-8"
				});

				var tips = loading();	
				tips.show(true);
				//$.dialog.tips('���ݼ�����...',600,'loading.gif');
				$.post(url,ajaxOption,function(data){
					var rows = [];
					
					$.each(data,function(i,e){
						var tr = $("<tr></tr>");
						var rowObject = {};
						$.each(colList,function(c,v){
							rowObject[v["name"]] = e[v["name"]];
						});
						if (config["multiselect"]){
							var td = $("<td style='width:12px;'></td>");
							var checkbox = $("<input type='checkbox' name='grid_key'/>");
							//[982] �Ų�·
							//���ò���ѡcheckbox
							//checkboxFormatter������selectFormatter��ʽ����ͬʱʹ��
							//checkboxFormatter���ȼ�����selectFormatter
							var checkboxFormatter=config["checkboxFormatter"];
							if(checkboxFormatter){
								checkboxFormatter = eval(checkboxFormatter);
								var isCanSelect=checkboxFormatter(rowObject);
								if(!isCanSelect){
									checkbox=$("<input type='checkbox' name='grid_key' disabled='disabled'/>");
								}
							}else{
								//[982] �Ų�·
								//���Ӹ�ʽ����ʾcheckbox
								//�����뷵�ؾ���html
								var selectFormatter=config["selectFormatter"];
								if(selectFormatter){
									selectFormatter = eval(selectFormatter);
									var selectHtml=selectFormatter(rowObject);
									checkbox=selectHtml;
								}
							}
							td.append(checkbox);
							tr.append(td);
						}
						$.each(colList,function(c,v){
							var text = e[v["name"]];

							if (v["key"]){
								$('input[name=grid_key]').val(text);
								rowObject["grid_row_key"] = text;
							}

							var td = $("<td style='word-break:break-all;'></td>");
							var formatter = v["formatter"];

							if (formatter != null){
								formatter = eval(formatter);
								var html = formatter(text,rowObject);
								td.append(html);
							} else {
								td.append(text);
							}
							tr.append(td);
							if (v["hidden"]){
								td.css("display","none");
							}
						});
						
						rows.push(rowObject);
						tr.attr("rowindex",i);
						
						if (config["dblclick"] != null && jQuery.isFunction(config["dblclick"])){
							var rowClick = config["dblclick"];
							
							$(tr).bind("dblclick",function(){
								rowClick(rowObject);
							});
						}
						tbody.append(tr);

						if (i == data.length  - 1){
							var total = data[i]["total"];
							var pageNum = (data[0]["rowindex"]-1)/config["rowNum"]+1;
							var temp = data[i]["total"]/config["rowNum"];
							var pageCont;
							if (data[i]["total"]%config["rowNum"] == 0 && temp != 0){
								pageCont = temp;
							} else {
								pageCont = temp == 0 ? temp : parseInt(temp)+1;
							}
							
							
							$('#rowConut').text(total);
							$('#pageNum').val(pageNum);
							$('#pageCount').text(pageCont);
							$('#numList').val(config["rowNum"]);
						}
					});

					$("tbody",table).remove();
					if(data != null && data.length > 0 && config['uselastrow']){
						var dataMap = null;
						jQuery.ajax({
							type:'post',
							url:config["useurl"],
							dataType:'json',
							contentType:"application/x-www-form-urlencoded; charset=UTF-8",
							data:config["params"],
							async: false,
							success:function(result){
							    dataMap = result;
							}
							
						});
						for(var key in dataMap) {  
							jQuery("#"+config['uselastid']).find("td[name='"+key+"']").text(dataMap[key]);
						}  
						tbody.append(jQuery("#"+config['uselastid']).html());
					}
					table.append(tbody);
					
					if (data == null || data.length == 0){
						if(config["usercols"] != null){
							config["cols"] = config["usercols"];
						}
						var td = $("<td style='text-align:center;'></td>");
							td.attr("colspan",config["cols"]);
							td.text("δ�ҵ��κμ�¼��");
						var tr = $("<tr></tr>");
							tr.append(td);
						tbody.append(tr);
						
						$('#rowConut').text(0);
						$('#pageNum').val(0);
						$('#pageCount').text(0);
						
					} else {
						$('tr',tbody).bind("click",function(){
							var selectRow = $(this).attr('selectRow');
							if (selectRow == 'true'){
								$(this).attr('selectRow','false');
								$(this).css('background','');

								if (config["multiselect"]){
									$('input[name=grid_key]',$(this)).attr('checked',false);
								}
							} else {
								if (config["radioselect"]){
									$("tr",tbody).attr("selectRow",false);
									$("tr",tbody).css("background",'');
									$('input:checked',tbody).attr('checked',false);
								}
								//[982] �Ų�·
								//���ʹ����չ���ò�����
								if(config["checkboxFormatter"]){
									var isDis=$('input[name=grid_key]',$(this)).attr("disabled");
									if(!isDis){
										$(this).attr('selectRow','true');
										$('input[name=grid_key]',$(this)).attr('checked',true);
										$(this).css('background',config["selectColor"]);
									}else{
										//��ѡ��ɫ����
										var bgselect=$(this).attr('bgselect');
										if(!bgselect||bgselect=="0"){
											$(this).css('background',config["selectColor"]);
											$(this).attr("bgselect","1");
										}else{
											$(this).css('background','');
											$(this).attr("bgselect","0");
										}
									}
								}else{
									$(this).attr('selectRow','true');
									if (config["multiselect"]){
										$('input[name=grid_key]',$(this)).attr('checked',true);
									}
									$(this).css('background',config["selectColor"]);
								}
							}
						});
					}
					
					gridConfig[config["id"]]["rows"] = rows;
					
					if (config["callBack"]){
						config["callBack"].call();
					}
					try{ // �����쳣��SCRIPT5007: �޷���ȡ���ԡ�style����ֵ: ����Ϊ null ��δ����
					tips.hide();
					}catch(e){
					}
					//lhgdialog.list["Tips"].hide();
				},"json");
				
				
			},initPager = function(){

				var pager = $('#'+config["pager"]);
				
				if (!pager){
					return ;
				}
				
				
				var pagerHtml = "";
					pagerHtml +="<div class=\"pageleft\">";
					pagerHtml +="<p class=\"pagenum\"><span style=''>��";
					pagerHtml +="<input type='text' id='pageNum' value='1' style='text-align:center;width:28px;'/>";
					pagerHtml +="/<span class='red' id='pageCount'></span>ҳ��</span>ÿҳ��ʾ";
					pagerHtml +="<select name='numList' id='numList'>";

					for (var i = 0 ,n = config["pageList"].length; i < n ; i++){
						pagerHtml +="<option value='"+config["pageList"][i]+"'>";
						pagerHtml +=config["pageList"][i];
						pagerHtml +="</option>";
					}
					
					pagerHtml +="</select>";
					pagerHtml +="�� / ��<span class='red' id='rowConut'>0</span>";
					pagerHtml +="����¼ </p>";
					pagerHtml +="</div>";

					pagerHtml +="<div class=\"pageright\">";
					pagerHtml +="<div class=\"paging\"> ";
					pagerHtml +="<a id=\"first\" class=\"first pointer\" title=\"��ҳ\">��&nbsp;ҳ</a>&nbsp;";
					pagerHtml +="<a id=\"back\"  class=\"prev pointer\" title=\"��һҳ\">��һҳ</a>&nbsp;";
					pagerHtml +="<a id=\"next\" class=\"next pointer\" title=\"��һҳ\">��һҳ</a>&nbsp;";
					pagerHtml +="<a id=\"last\" class=\"last pointer\" title=\"ĩҳ\">ĩ&nbsp;ҳ</a>";
					pagerHtml +="</div></div>";

					pager.addClass("pagination");
					pager.html(pagerHtml);

					$('#numList').val(config["rowNum"]);

					$('#numList').bind("change",function(){
						ajaxParams["pages.pageSize"] = $(this).val();
						ajaxParams["pages.currentPage"]=1,
						config["rowNum"] = $(this).val();
						initTbody();	
					});

					var toFirst = function(){

						var currentPage = parseInt($("#pageNum").val());

						if (currentPage != 1){
							ajaxParams["pages.currentPage"] = 1;
							initTbody();
						}
						
					},toNext = function(){
						var pageCount = parseInt($.trim($('#pageCount').text()));
						var currentPage = parseInt($("#pageNum").val());

						if (pageCount != currentPage){
							ajaxParams["pages.currentPage"] = currentPage+1;
							initTbody();
						}
					},toBack = function(){
						var currentPage = parseInt($("#pageNum").val());

						if (currentPage != 1 ){
							ajaxParams["pages.currentPage"] = currentPage - 1;
							initTbody();
						}
					},toLast = function(){
						var pageCount = parseInt($.trim($('#pageCount').text()));
						var currentPage = parseInt($("#pageNum").val());

						if (pageCount != currentPage){
							ajaxParams["pages.currentPage"] = pageCount;
							initTbody();
						}
					},toPage = function(){
						var pageNum = parseInt($(this).val());
						var pageCount = parseInt($.trim($('#pageCount').text()));
						
						if (/[1-9]+[\d]{0,}/.test(pageNum) && pageNum < pageCount+1 ){
							ajaxParams["pages.currentPage"] = pageNum;
							initTbody();
						}
					}

					$('#first').bind("click",toFirst);
					$('#next').bind("click",toNext);
					$('#back').bind("click",toBack);
					$('#last').bind("click",toLast);
					$('#pageNum').bind("change",toPage);
			},init = function(){
				initPager();
				//�Զ����ͷ����Ҫ��ҳ���Լ�дthead,ע�⣬��ʧȥ�Զ�����Ĺ��ܣ���Ϊû��ֱ��д��ҳ��û�а������¼�����Ҫ���ڸ���ͳ�Ʋ�ѯ
				if(!config["usedefined"] || config["usedefined"] == "" || config["usedefined"] == null || config["usedefined"] == "undefined"){
					initThead();
				}
				initTbody(config["params"]);
			},reset = function(){
				initTbody(config["params"]);
			}

			if (config["init"]){
				init();
			} else {
				reset();
			}
		}
	});
	
	$.fn.initGrid = function(setting){
		var id = $(this).attr("id");
		setting["id"] = id;
		gridConfig[id] = setting;
		setting["init"] = true;
		$.dataGrid.loadDataGrid(setting);
	}

	$.fn.reloadGrid = function(params){
		var id = $(this).attr("id");
		var config = gridConfig[id];
		config["params"] = params || config["params"];
		config["rowNum"] = $('#numList').val();
		config["init"] = false;
		//gridConfig[id] = config;
		$.dataGrid.loadDataGrid(config);
	}
	
	$.fn.getSeletRow = function(){
		var rows = [];
		var _self = $(this);
		var selectRow = $("tr[selectRow=true]",_self);
		
		$.each(selectRow,function(i,e){
			rows.push(gridConfig[_self.attr("id")]["rows"][$(e).attr("rowindex")]);
		});
		return rows;
	}
	
	$.fn.getSeletIds = function(){
		var ids = [];
		var _self = $(this);
		var selectRow = $("tr[selectRow=true]",_self);
		
		$.each(selectRow,function(i,e){
			ids.push(gridConfig[_self.attr("id")]["rows"][$(e).attr("rowindex")]["grid_row_key"]);
		});
		return ids;
	}
	/**
	 * ���������
	 * @author �Ų�·[982]
	 */
	$.fn.getSeletAllRow = function(){
		var rows = [];
		var _self = $(this);
		var selectRow = $("tr[rowindex]",_self);
		
		$.each(selectRow,function(i,e){
			rows.push(gridConfig[_self.attr("id")]["rows"][$(e).attr("rowindex")]);
		});
		return rows;
	}
	/**
	 * ���ò���ѡ��disabled��
	 * key:   �ж��ֶ�
	 * value: �ж�ֵ
	 * ��key�ֶ�ֵΪvalueʱ��������Ϊ����ѡ��
	 * @author [982] �Ų�·
	 */
	$.fn.unSelect=function(key,value){
		var selectRow = $(this).getSeletAllRow();
		jQuery.each(selectRow,function(i,e){
			var v=selectRow[i][key];
			if(v==value){
				jQuery(jQuery("tr[rowindex]")[i]).unbind();
				jQuery(jQuery("input[name='grid_key']")[i]).attr("disabled","disabled");
			}
		});
	}
	
	/**
	 *��ȡ��ѯ������
	 * @author [1036] ��С��
	 */
	$.fn.getRowCount=function(){
		
		return $.trim($('#rowConut').text());
		
	}
	
})(jQuery);