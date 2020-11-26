$(document).ready(function(){
    var divArray=[];

var dashboard = $("#Dashboard");
var addCustomer = $("#AddCustomer");
var addItem = $("#AddItem");
var allCustomer = $("#AllCustomer");
var allItem = $("#AllItem");
var customerDetail = $("#CustomerDetail");
var invoice = $("#Invoice");
var itemDetail = $("#ItemDetail");
var userSetting = $("#User");

divArray.push(dashboard,addCustomer,addItem,allCustomer,allItem,customerDetail,invoice,itemDetail,userSetting);

console.log(divArray);

var btnDashboard = $("#btnDashboard");
var btnAllCustomer = $("#btnAllCustomer");
var btnCustomerDetail = $("#btnCustomerDetail");
var btnAddCustomer = $("#btnAddCustomer");
var btnAllItem = $("#btnAllItem");
var btnItemDetail = $("#btnItemDetail");
var btnAddItem = $("#btnAddItem");
var btnPlaceOrder = $("#btnPlaceOrder");
var btnSearchOrder = $("#btnSearchOrder");
var btnUserSetting = $("#btnUserSetting");

divArray.forEach(function(div){
    div.hide();
});
dashboard.show();

btnDashboard.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
    dashboard.show();
});

btnAllCustomer.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
    allCustomer.show();
});

btnCustomerDetail.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
    customerDetail.show();
});

btnAddCustomer.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
    addCustomer.show();
});

btnAllItem.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
    allItem.show();
});

btnItemDetail.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
    itemDetail.show();
});

btnAddItem.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
    addItem.show();
});

btnPlaceOrder.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
});

btnSearchOrder.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
});

btnUserSetting.on('click',function(){
    divArray.forEach(function(div){
        div.hide();
    });
    userSetting.show();
});
});
