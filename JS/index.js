
//menu


//News 詳情
function showdiv(){
  document.getElementById('news').style.display = 'block';
  document.getElementById('strhref').innerHTML="-";
  document.getElementById('strhref').href="javascript:hidediv()";
}
function hidediv(){
  document.getElementById('news').style.display = 'none';
  document.getElementById('strhref').innerHTML="+";
  document.getElementById('strhref').href="javascript:showdiv()";

}