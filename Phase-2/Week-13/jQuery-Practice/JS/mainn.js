
  // 1.1 
//   let element = $("#sample1");

  // 1.2 
//   console.log("The element is:", element);

  // 1.3 
//   console.log("The text content is:", element.text());




//Q2

// 2.1
  let techList = $("#techCompanies");
  console.log("tech companies List:", techList);

  // 2.2 Count how many <li> items are inside the list
  let totalCompanies = techList.children("li").length;
  console.log("total tech companies:", totalCompanies);

  // 2.3 select all elements with class "red" and display them
  let redClass = $(".red");
  console.log("red class companies:", redClass);

  // 2.4 create a new list element with content "Facebook"
  let newCompany = $("<li>Facebook</li>");
  console.log("New element:", newCompany);

  // 2.5 give the new element a class of blue
  newCompany.addClass("blue");

  // 2.6 append the new element next to the Sony list
  $("#techCompanies li:contains('Sony')").after(newCompany);

  // 2.7 count how many companies are labeled blue
  let blueClassCompany = $("#techCompanies li.blue").length;
  $("#blueCompanies").append("<p>Number of blue companies: " + blueClassCompany + "</p>");
  console.log(`the number of blue class companies are ${blueClassCompany}`);





// Q3
$("#btn").on("click", function(e){
  e.preventDefault()

  const v1 = $("#in1").val().trim();
  const v2 = $("#in2").val().trim();

  // to remove or clear the old results
  $("#davg").text("")
  $("#dsum").text("")
  $(".err").text("").css("color","")

  const num1 = parseInt(v1);
  const num2 = parseInt(v2);

  // check if th einput field contains only numbers
  if(!isNaN(num1) && !isNaN(num2)){
    const sum = num1 + num2;
    const avg = sum / 2;

    console.log(`the sum is: ${sum}`)
    console.log(`the average is: ${avg}`)

    $("h4:contains('result of average is')").show()
    $("h4:contains('result of sum is')").show()
    $("#davg").text(avg)
    $("#dsum").text(sum)

    $("#in1, #in2").val("")
  }
  else{
    $("h4:contains('result of average is')").hide()
    $("h4:contains('result of sum is')").hide()
    $("#davg").text("")
    $("#dsum").text("")

    $(".err").text("please enter numerical values only").css("color","red")

  }
})




// Q4
  const fields = [
    { id: "#forF", label: "First Name" },
    { id: "#forL", label: "Last Name" },
    { id: "#email", label: "Email" }
  ];

  $("form").last().submit(function (e) {
    e.preventDefault();
    $("input").css("background-color", ""); // reset background color
    $(".err").remove(); // remove all  error messages that were added previously

    let hasError = false;

    fields.forEach(f => {
      const value = $(f.id).val().trim();
      if (!value) {
        if ($(f.id).prev("label").prev(".err").length === 0) {
          $(f.id).prev("label").before(`<span class="err" style="color:red; display:block; margin-bottom:2px;">${f.label} is required!</span>`);
        }
        $(f.id).css("background-color", "#f8d7da");
        hasError = true;
      }
    });

    if (hasError) return;

    $(this).hide();
    $(".result").html(fields.map(f => `<p><strong>${f.label}:</strong> ${$(f.id).val()}</p>`).join(""));
  });

  $("input").on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).css("background-color", "");
      $(this).prev("label").prev(".err").remove();
    }
  });
