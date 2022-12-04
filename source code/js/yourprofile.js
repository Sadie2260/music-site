function myFunction(){
    document.getElementById("mydropdown").classList.contains('show');
}
window.onclick=function(event){
    if(!event.target.matches(".btn-dp")){
        var dropdowns=document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0;i<dropdowns.length; i++){
            var opendropdowns= dropdowns[i];
            if(opendropdowns.classList.contains("show")){
                opendropdowns.classList.remove("show");
            }
        }
    }
}
function show_list() {
    var courses = document.getElementById("content1");

    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.bar')) {
        document.getElementById('content1')
            .style.display = "none";
    }
}    
