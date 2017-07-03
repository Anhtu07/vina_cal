var number_of_digits = 0;
$("button").click(function() {
  if (!isNaN(this.id) && (number_of_digits <= 20)) {
    var current = $("#display").html();
    current += this.id;
    $("#display").html(current);
    number_of_digits++;
  } else if (this.id === "clear") {
    $("#display").html("");
    number_of_digits = 0;
  } else if (this.id === "delete") {
    var current = $("#display").html();
    current = current.substring(0, current.length - 1);
    number_of_digits --;
    $("#display").html(current);
  }
  console.log(number_of_digits);
});