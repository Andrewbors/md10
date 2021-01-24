const products1 = document.getElementById("product1");
const products2 = document.getElementById("product2");
const products3 = document.getElementById("product3");

const t_shirts = document.getElementById("t-shirts2");
const sportsuits = document.getElementById("sportsuits2");
const caps = document.getElementById("caps2");

product1.addEventListener('click', function(){
    document.getElementById("products__container").style.display = "none";
    document.getElementById("products__container2").style.display = "flex";
    document.getElementById("hrblue1").style.display = "flex";
    document.getElementById("hrblue2").style.display = "none";
    document.getElementById("hrblue3").style.display = "none";
    t_shirts.style.color = "#000000";
    sportsuits.style.color = "#bfbfbf";
    caps2.style.color = "#bfbfbf";
    document.getElementById("t-shirts").classList.remove("products__passivepr");
    document.getElementById("t-shirts").classList.add("products__activepr");
    document.getElementById("sport-suits").classList.remove("products__activepr");
    document.getElementById("sport-suits").classList.add("products__passivepr");
    document.getElementById("caps").classList.remove("products__activepr");
    document.getElementById("caps").classList.add("products__passivepr");
});

t_shirts.addEventListener('click', function(){
    document.getElementById("hrblue1").style.display = "flex";
    document.getElementById("hrblue2").style.display = "none";
    document.getElementById("hrblue3").style.display = "none";
    t_shirts.style.color = "#000000";
    sportsuits.style.color = "#bfbfbf";
    caps.style.color = "#bfbfbf";
    document.getElementById("t-shirts").classList.remove("products__passivepr");
    document.getElementById("t-shirts").classList.add("products__activepr");
    document.getElementById("sport-suits").classList.remove("products__activepr");
    document.getElementById("sport-suits").classList.add("products__passivepr");
    document.getElementById("caps").classList.remove("products__activepr");
    document.getElementById("caps").classList.add("products__passivepr");
});

product2.addEventListener('click', function(){
    document.getElementById("products__container").style.display = "none";
    document.getElementById("products__container2").style.display = "flex";
    document.getElementById("hrblue2").style.display = "flex";
    document.getElementById("hrblue1").style.display = "none";
    document.getElementById("hrblue3").style.display = "none";
    sportsuits.style.color = "#000000";
    t_shirts.style.color = "#bfbfbf";
    caps.style.color = "#bfbfbf";
    document.getElementById("sport-suits").classList.remove("products__passivepr");
    document.getElementById("sport-suits").classList.add("products__activepr");
    document.getElementById("t-shirts").classList.remove("products__activepr");
    document.getElementById("t-shirts").classList.add("products__passivepr");
    document.getElementById("caps").classList.remove("products__activepr");
    document.getElementById("caps").classList.add("products__passivepr");
});

sportsuits.addEventListener('click', function(){
    document.getElementById("hrblue2").style.display = "flex";
    document.getElementById("hrblue1").style.display = "none";
    document.getElementById("hrblue3").style.display = "none";
    sportsuits.style.color = "#000000";
    t_shirts.style.color = "#bfbfbf";
    caps.style.color = "#bfbfbf";
    document.getElementById("sport-suits").classList.remove("products__passivepr");
    document.getElementById("sport-suits").classList.add("products__activepr");
    document.getElementById("t-shirts").classList.remove("products__activepr");
    document.getElementById("t-shirts").classList.add("products__passivepr");
    document.getElementById("caps").classList.remove("products__activepr");
    document.getElementById("caps").classList.add("products__passivepr");
});

product3.addEventListener('click', function(){
    document.getElementById("products__container").style.display = "none";
    document.getElementById("products__container2").style.display = "flex";
    document.getElementById("hrblue3").style.display = "flex";
    document.getElementById("hrblue1").style.display = "none";
    document.getElementById("hrblue2").style.display = "none";
    caps.style.color = "#000000";
    t_shirts.style.color = "#bfbfbf";
    sportsuits.style.color = "#bfbfbf";
    document.getElementById("caps").classList.remove("products__passivepr");
    document.getElementById("caps").classList.add("products__activepr");
    document.getElementById("t-shirts").classList.remove("products__activepr");
    document.getElementById("t-shirts").classList.add("products__passivepr");
    document.getElementById("sport-suits").classList.remove("products__activepr");
    document.getElementById("sport-suits").classList.add("products__passivepr");
});

caps.addEventListener('click', function(){
    document.getElementById("hrblue3").style.display = "flex";
    document.getElementById("hrblue1").style.display = "none";
    document.getElementById("hrblue2").style.display = "none";
    caps.style.color = "#000000";
    t_shirts.style.color = "#bfbfbf";
    sportsuits.style.color = "#bfbfbf";
    document.getElementById("caps").classList.remove("products__passivepr");
    document.getElementById("caps").classList.add("products__activepr");
    document.getElementById("t-shirts").classList.remove("products__activepr");
    document.getElementById("t-shirts").classList.add("products__passivepr");
    document.getElementById("sport-suits").classList.remove("products__activepr");
    document.getElementById("sport-suits").classList.add("products__passivepr");
});

const products__back = document.getElementById("products__back");

products__back.addEventListener('click', function(){
    document.getElementById("products__container").style.display = "flex";
    document.getElementById("products__container2").style.display = "none";
});