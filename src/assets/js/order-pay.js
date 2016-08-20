var confirmCancel = '<div id="confirmCancel" class="confirm-cancel"><div class="title">确认要取消支付？</div><div class="content">竞拍结束后72小时内未完成支付，将关闭订单并扣罚参拍保证金，请尽快完成支付</div><div class="buttons"><a href="javascript:closeCancelPay()" class="button-left">继续支付</a><a href="javascript:cancelPay()" class="button-right">确认取消</a></div></div>';
var confirmOffPay = '<div class="confirm-offline-pay" id="offlinePay">'
	+'<div class="title"><span>线下支付</span><a href="javascript:closeConfirmOffPay()">X</a></div>'
+	'<div class="total">'
+		'￥11,000'
+	'</div>'
+	'<div class="content">'
+	'	<p class="top">'
+			'您选择了线下支付，请于7个工作日内将订单款转入大咖拍卖公司账户：'
+		'</p>'
+		'<div class="bank">'
+			'<p class="bank-name">'
+				'<span class="label">开户名称:</span>'
+				'<span class="value">北京智艺文化艺术有限公司</span>'
+			'</p>'
+			'<p class="bank-type">'
+			'	<span class="label">开户银行:</span><span class="value">中国工商银行股份有限公司北京四元桥支行</span>'
+			'</p>'
+			'<p class="bank-num"><span class="label">银行账号:</span> <span class="value">0200 0805 0900 0258 910</span>'
+			'</p>'
+			'</div>'
+		'	<p class="pay-note">支付成功后及时联系卖家，如需帮助请联系我们：010-64772791（周一至周五 09:30 - 18:00)</p>'
+	'</div>'
+	'<div class="buttons">'
+	'	<a href="javascript:offPay()" >确认线下支付</a>'
+	'</div>'
+'</div>';


var back ='<div id="background-opacity" class="opacity-black-background"></div>';
/***
 * 弹出取消支付框
 */
function confirmCancelPay(){
    var cc = $("#confirmCancel");
    var background = $("#background-opacity");
    if(cc){
        cc.remove();
    }
    if(background){
        background.remove();
    }
    $(document.body).append(back);
    $(document.body).append(confirmCancel);
}
/***
 * 取消支付
 */
function cancelPay(){
    window.history.go(-1);
}

/**
 * 继续支付
 */
function closeCancelPay(){
    var cc = $("#confirmCancel");
    var background = $("#background-opacity");
    if(cc){
        cc.remove();
    }
    if(background){
        background.remove();
    }
}


/***
 * 弹出离线支付框
 */
function openConfirmOffPay(){
    var cc = $("#offlinePay");
    var background = $("#background-opacity");
    if(cc){
        cc.remove();
    }
    if(background){
        background.remove();
    }
    $(document.body).append(back);
    $(document.body).append(confirmOffPay);
}
/***
 * 取消支付
 */
function offPay(){
    alert("已处理");
}

/**
 * 继续支付
 */
function closeConfirmOffPay(){
    var cc = $("#offlinePay");
    var background = $("#background-opacity");
    if(cc){
        cc.remove();
    }
    if(background){
        background.remove();
    }
}