$(".search-icon").click(function(){
    var text = document.getElementById('txtSearch').value;
    if(text == ''){
        $('.search').addClass("border-red");
        // $('[data-toggle="tooltip"]').tooltip();
    }else{
        $('.search').removeClass("border-red");
    }
});
$(".icon-add").click(function(){
    
});