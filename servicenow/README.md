<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Form</title>
  <script>
    function checkCheckbox() {
      document.getElementById("subscribe").checked = true;
    }
  </script>
</head>

<body>
  <form action="#" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">Subscribe to newsletter</label><br><br>
    <a href="https://www.example.com" onclick="checkCheckbox()">Visit Example Website</a><br><br>
    <button type="submit">Submit</button><br><br>
    <label for="cars">Choose a car:</label>
    <select id="cars" name="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
      <option value="audi">Audi</option>
    </select>
  </form>
</body>

</html>