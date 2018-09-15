
function make_html_input() {
  var curScriptElement = document.currentScript;
    
    var array = ["Volvo","Saab","Mercades","Audi"];

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";
//myDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
  
    //option.setAttribute('disabled', 'disabled');
    //option.setAttribute('selected', 'selected');
  
}
    curScriptElement.parentNode.appendChild(selectList);
  
  
  // grab html for using in document.write
  
  
  var el = document.createElement("div");
      // need clone It and Its childrent
      el.appendChild(selectList.cloneNode(true));
      
      document.write(el.innerHTML);
  // free memory
      //el = null;
      delete el;
  // end
  
    }
// run this in your html
// <script>make_html_input()</script>

// static $count = 0;
// $count++; => add this to your script <script id="input_id_{$count}">make_html(input_id_{$id_count})</script>
