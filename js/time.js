function showTime() { 
	var currentDate = new Date(); 
	
	var startDate = new Date(2010, 7, 19);
	var date3 = currentDate-startDate;
	//计算出相差天数
	var days=Math.floor(date3/(24*3600*1000));
	 
	//计算出小时数
	var leave1=date3%(24*3600*1000);     //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	 
	//计算相差分钟数
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	
	//计算相差秒数
	var leave3=leave2%(60*1000);          //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000);
	// 
	//格式化输出 
	// 
	if (minutes < 10) 
	minutes = "0" + minutes; 
	if (seconds < 10) 
	seconds = "0" + seconds; 
	var currentTimeString = "Dear Nicole:<br>"
		+"我们已经相恋: "+days+"天 "+hours+"小时 "+minutes+"分钟 "+seconds+"秒<br>"
		+"未来还有更长的路,我相信我们能够继续走下去.<br>"
		+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
				"----Mike<br>"
		+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
				"----2013-5-15"; 
	
	document.getElementById("show").innerHTML=currentTimeString;  //改这地方
	
	window.setTimeout("showTime()", 1000); 
} 