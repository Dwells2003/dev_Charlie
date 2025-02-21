$(document).ready(function () {
  console.log("dont drag the seal");
 });

  $("#Funny-seal").draggable(); 

// Help from JqueryUI.com and w3Schools
$(document).on("mouseup", (event) => {
  if (event.target.id === "Funny-seal") {
    const position = $("#Funny-seal").position();
    console.log("Hello mr teacher man");
  }
});