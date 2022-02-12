$(function () {
	/*
		1、获取时间的年、月、日
		2、修改表格年月日
		3、按日制作表格
			创建一个日期为当年当月1号时间,得到一号星期
			得到当月日期数
			首尾行特殊处理
		4、单日字体改为红颜色
	*/
	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth();
	var day=date.getDate();

	$("#ym").html(year+"年"+(month+1)+"月");
	// 首天星期
	date.setDate(1);
	var wek=date.getDay();/*0-6*/

	var days=[31,28,31,30,31,30,31,31,30,31,30,31];
	if((year%4==0 && year%100!=0)||year%400==0){
		days[1]=29;
	}
	var s=days[month];//天数

	//首行
	var t1=document.createElement("tr");
	var str;
	var num=1;
	for (var i = 0; i<7; i++) {
		if(i<wek){//空格
			str="<td></td>"
		}else{//日期数、日期数加一
			if(num==day){
				str="<td style=\"color:red\">"+(num++)+"</td>";
			}else{
				str="<td>"+(num++)+"</td>";
			}
		}
		t1.innerHTML+=str;
	}
	$("#calendar").append(t1);

	//中间
	var n=parseInt((s-num)/7);
	var t2;
	for(var i=0;i<n;i++){
		var t2=document.createElement("tr");
		for(var j=0;j<7;j++){
			if(num==day){
				t2.innerHTML+="<td style=\"color:red\">"+(num++)+"</td>";
			}else{
				t2.innerHTML+="<td>"+(num++)+"</td>";
			}
		}
		$("#calendar").append(t2);
	}

	//尾
	var t3=document.createElement("tr");
	for (var i = 0; i<7; i++) {
		if(num>s){//空格
			str="<td></td>"
		}else{//日期数、日期数加一
			if(num==day){
				str="<td style=\"color:red\">"+(num++)+"</td>";
			}else{
				str="<td>"+(num++)+"</td>";
			}
		}
		t3.innerHTML+=str;
	}
	$("#calendar").append(t3);
});
