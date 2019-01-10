

window.addEventListener("load", function(){
  //first check if execCommand and contentEditable attribute is supported or not.
  if(document.contentEditable != undefined && document.execCommand != undefined)
 {
     alert("HTML5 Document Editing API Is Not Supported");
  }
  else
  {
      document.execCommand('styleWithCSS', false, true);
  }
}, false);

//underlines the selected text
function underline()
{
  document.execCommand("underline", false, null);
}

function italic() {
  document.execCommand("italic", false, null);
}

function bold() {
  document.execCommand("bold", false, null);
}

function strike() {
  document.execCommand("strikeThrough", false, null);
}

//makes the selected text as hyperlink.
function link()
{
  var url = prompt("Enter the URL");
  document.execCommand("createLink", false, url);
}

//displays HTML of the output
function displayhtml()
{
  //set textContent of pre tag to the innerHTML of editable div. textContent can take any form of text and display it as it is without browser interpreting it. It also preserves white space and new line characters.
  document.getElementsByClassName("htmloutput")[0].textContent = document.getElementsByClassName("editor")[0].innerHTML;
}

btn.addEventListener("click", function() {
  var s = editorContent.innerHTML;
  content.style.display = "block";
  content.textContent = s;
});

getText.addEventListener("click", function() {
  const old = editorContent.textContent;
  content.style.display = "block";
  content.textContent = old;
});

function link() {
  var url = prompt("Enter the URL");
  document.execCommand("createLink", false, url);
}

function copy() {
  document.execCommand("copy", false, "");
}

function changeColor() {
  var color = prompt("Enter your color in hex: ");
  document.execCommand("foreColor", false, color);
}

