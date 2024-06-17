var p11 = document.querySelector(".p11");
var imgg1 = document.querySelector(".imgg1");
var p22 = document.querySelector(".p22");
var imgg2 = document.querySelector(".imgg2");
var p33 = document.querySelector(".p33");
var imgg3 = document.querySelector(".imgg3");
var p44 = document.querySelector(".p44");
var imgg4 = document.querySelector(".imgg4");
var p55 = document.querySelector(".p55");
var imgg5 = document.querySelector(".imgg5");
var p66 = document.querySelector(".p66");
var imgg6 = document.querySelector(".imgg6");
p11.addEventListener("mousemove", function(){
    imgg1.classList.remove("hidden");
});
p11.addEventListener("mouseout", function(){
    imgg1.classList.add("hidden");
});
p22.addEventListener("mousemove", function(){
    imgg2.classList.remove("hidden");
});
p22.addEventListener("mouseout", function(){
    imgg2.classList.add("hidden");
});
p33.addEventListener("mousemove", function(){
    imgg3.classList.remove("hidden");
});
p33.addEventListener("mouseout", function(){
    imgg3.classList.add("hidden");
});
p44.addEventListener("mousemove", function(){
    imgg4.classList.remove("hidden");
});
p44.addEventListener("mouseout", function(){
    imgg4.classList.add("hidden");
});
p55.addEventListener("mousemove", function(){
    imgg5.classList.remove("hidden");
});
p55.addEventListener("mouseout", function(){
    imgg5.classList.add("hidden");
});
p66.addEventListener("mousemove", function(){
    imgg6.classList.remove("hidden");
});
p66.addEventListener("mouseout", function(){
    imgg6.classList.add("hidden");
});