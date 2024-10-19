function btnclick(x){
    document.getElementById("inputbox").value =  document.getElementById("inputbox").value + x
}
function clearing(){
    document.getElementById("inputbox").value = ""
}
function ans(){
   let x = document.getElementById("inputbox").value 
   let ans = eval(x)
   document.getElementById("inputbox").value = ans
}