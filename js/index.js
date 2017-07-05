var number_of_digits = 0;
var prev_value;
var current_value;
var op;
var max = Math.pow(10, 13);
console.log(max);
function clear() {
  number_of_digits = 0;
  op = undefined;
  $("#display").html("");
}

$("button").click(function() {
  if (!isNaN(this.id) && number_of_digits <= 13) {
    var current = $("#display").html();
    current += this.id;
    $("#display").html(current);
    number_of_digits++;
  } else if (this.id === "clear") {
    clear();
  } else if (this.id === "delete") {
    var current = $("#display").html();
    current = current.substring(0, current.length - 1);
    number_of_digits--;
    $("#display").html(current);
  } else if (this.id === "decimal") {
    var current = $("#display").html();
    current += ".";
    $("#display").html(current);
  } else if (this.id === "equal") {
    if (prev_value !== undefined) {
      var result;
      current_value = parseFloat($("#display").html());
      if (op === "plus") {
        result = prev_value + current_value;
      } else if (op === "minus") {
        result = prev_value - current_value;
      } else if (op === "times") {
        result = prev_value * current_value;
      } else if (op === "divide") {
        result = prev_value / current_value;
      }
      clear();
      prev_value = undefined;
      current_value = undefined;
      $("#display").html(result);
    }
  }
});

$(".op").click(function() {
  var result;
  if (prev_value === undefined) {
    prev_value = parseFloat($("#display").html());
  } else {
    current_value = parseFloat($("#display").html());
    if (op === "plus") {
      result = prev_value + current_value;
    } else if (op === "minus") {
      result = prev_value - current_value;
    } else if (op === "times") {
      result = prev_value * current_value;
    } else if (op === "divide") {
      result = prev_value / current_value;
    }
    prev_value = result;
  }
  console.log(result);
  if(result >= max)
    {
      clear();
      prev_value = undefined;
      current_value = undefined;
      $("#display").html("ENORMOUS !!!");
      return;
    }
  clear();
  op = this.id;
});