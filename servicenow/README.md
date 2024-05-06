
**Create html form with input box, check box, link, button  and dropdown. check box should be checked after clicking link.**
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Form</title>
  <script>
    //checked when clicked on a href
    function toggleCheckbox() {
      // Get the checkbox element
      var checkbox = document.getElementById("subscribe");

      // Toggle the checked state of the checkbox
      checkbox.checked = !checkbox.checked;
    }

    // Selected dropdown value
    function getSelected(event) {
      var dropdown = document.getElementById("cars");
      var selectedValue = dropdown.value;

      // Do something with the selected value (e.g., display it)
      console.log("Selected value: " + selectedValue);
    }

    // Input text value 
    function getInputValue() {
      var inputVal = document.getElementById('name');
      console.log(inputVal.value)
    }
  </script>
</head>

<body>
  <form action="#" method="post" onsubmit="getInputValue()">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    <input type="checkbox" id="subscribe" name="subscribe">

    <label for="subscribe">Subscribe to newsletter</label><br><br>
    <a href="javascript:void(0);" onclick="checkCheckbox()">Visit Example Website</a><br><br>
    <button type="submit">Submit</button><br><br>

    <label for="cars">Choose a car:</label>
    <select id="cars" name="cars" onchange="getSelected(event)">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
      <option value="audi">Audi</option>
    </select>
  </form>

  <p id="myParagraph">This is a paragraph.</p>

  <script>
    function updateStyles(element, styles) {
      // Get the DOM element
      var domElement = document.getElementById(element);

      // Apply styles to the DOM element
      for (var property in styles) {
        domElement.style[property] = styles[property];
      }
    }

    // Example usage:
    updateStyles("myParagraph", {backgroundColor: "lightblue", color: "red"});
  </script>
</body>

</html>
```

**Convert 12 hours format to 24 hours**
```
function convertTo24HourFormat(time12) {
      const [time, modifier] = time12.split(' ');
      let [hours, minutes] = time.split(':');

      if (hours === '12') {
        hours = '00';
      }

      if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
      }

      return `${hours}:${minutes}`;
    }

    // Example usage
    const time12 = '9:30 PM';
    const time24 = convertTo24HourFormat(time12);
    console.log(time24); // Output: "13:30"
```