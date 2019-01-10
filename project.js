var btn = document.querySelector(".sai");
var getText = document.querySelector(".getText");
var content = document.querySelector(".getcontent");
var editorContent = document.querySelector(".editor");

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


function getImage() {
  var file = document.querySelector("input[type=file]").files[0];

  var reader = new FileReader();

  let dataURI;

  reader.addEventListener(
    "load",
    function() {
      dataURI = reader.result;

      const img = document.createElement("img");
      img.src = dataURI;
      editorContent.appendChild(img);
    },
    false
  );

  if (file) {
    console.log("s");
    reader.readAsDataURL(file);
  }
}

function printMe() {
  if (confirm("Double check your content")) {
    const body = document.body;
    let s = body.innerHTML;
    body.textContent = editorContent.innerHTML;
    body.style.whiteSpace = "pre";
    my_window = window.open("about:blank", "mywindow1");
    my_window.document.write(body);
    
  }
}
