var number_of_digits = 0;
var prev_value;
var current_value;
var op;
var max = Math.pow(10, 10);
console.log(max);
function clear() {
  number_of_digits = 0;
  op = undefined;
  $("#input").html("");
}

$("button").click(function() {
  if (!isNaN(this.id) && number_of_digits <= 10) {
    var current = $("#input").html();
    current += this.id;
    $("#input").html(current);
    number_of_digits++;
  } else if (this.id === "clear") {
    $("#current_op").html("none");
    clear();
  } else if (this.id === "delete") {
    var current = $("#input").html();
    current = current.substring(0, current.length - 1);
    number_of_digits--;
    $("#input").html(current);
  } else if (this.id === "decimal") {
    var current = $("#input").html();
    current += ".";
    $("#input").html(current);
  } else if (this.id === "equal") {
    $("#current_op").html("result");
    if (prev_value !== undefined) {
      var result;
      current_value = parseFloat($("#input").html());
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
      if (result >= max) {
        clear();
        prev_value = undefined;
        current_value = undefined;
        $("#input").html("ENORMOUS !!!");
        return;
      }
      result = result.toFixed(2);
      $("#input").html(result);
    }
  }
});

$(".op").click(function() {
  var result;
  if (prev_value === undefined) {
    prev_value = parseFloat($("#input").html());
  } else {
    current_value = parseFloat($("#input").html());
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
  $("#current_op").html(this.id);
  if (result >= max) {
    clear();
    prev_value = undefined;
    current_value = undefined;
    $("#input").html("ENORMOUS !!!");
    return;
  }
  clear();
  op = this.id;
});