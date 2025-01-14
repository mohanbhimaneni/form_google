# form_google
```html
    <!-- This following block is the form window. -->
    <!-- Call openForm() function at the trigger site -->
    <!-- Better to use the following:
        <a href="#" onclick="openForm()">click here</a>
    -->
    <link rel="stylesheet" href="close.css">
    <link rel="stylesheet" href="form.css">
    <div id="floating_window" class="display_none div_to_toggle">
        <form class="form">
            <div class="headers_in_form">
                <h2>Please fill this form!!</h2>
                <div class="close_icon" onclick="closeForm()"></div>
            </div>
            <label for="Name">Name : </label>
            <input name="Name" type="text" placeholder="Enter your Name" required autofocus>
            <br>
            <label for="Email">Email : </label>
            <input name="Email" type="email" placeholder="Enter your email" required>
            <br>
            <label for="Phone">Contact Number : </label>
            <input name="Phone" type="number" placeholder="Enter your contact number" required>
            <br>
            <label for="Alternate_Phone">Alternate number : </label>
            <input name="Alternate_Phone" type="number" placeholder="Enter an alternate contact number">
            <br>
            <label for="Event">Event : </label>
            <select name="Event" id="Event" required>
                <option disabled selected value="">-- select an event --</option>
            </select>
            <br>
            <div class="buttons_in_form">
                <button class="submit" type="submit">Submit</button>
                <button class="reset" type="reset">Reset</button>
                <button onclick="closeForm()" class="close" type="reset">Close</button>
            </div>
        </form>
    </div>
    <script src="form.js"></script>
    <!-- End of form section -->
```
