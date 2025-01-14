# form_google
Submit data to google form
    This following block is the form window.
    Call openForm() function at the trigger site
    Better to use the following:
        "<a href="#" onclick="openForm()">click here</a>"
    ## Code
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
                <option disabled value="">The following events are from Bandipur House, IIT Madras BS</option>
                <option value="Wisdom_Unplugged">Wisdom Unplugged</option>
                <option value="Mind_Benders">Mind Benders</option>
                <option value="Bytes_of_Brilliance">Bytes of Brilliance</option>
                <option value="Eco-Hackathon">Eco - Hackathon</option>
                <option value="The_Respawn_Cup">The Respawn Cup</option>
                <option value="Cyrptic_Hunt">Cryptic Hunt</option>
                <option value="Crack_The_Code_2.0">Crack The Code 2.0</option>
                <option value="Invisible_Logic">Invisible Logic</option>
                <option value="The_Julia_Workshop">The Julia Workshop</option>
                <option value="The_Spotlight_Saga">The Spotlight Saga</option>
                <option value="Beyond_The_Beats">Beyond The Beats</option>
                <option value="Voices_of_the_Spectrum">Voices of the Spectrum</option>
                <option value="Mic&Mischief">Mic & Mischief</option>
                <option disabled value="">The following events are from Vivekananda School of Engineering & Technology</option>
                <option value="Tech_Talk">Tech Talk</option>
                <option value="Science_Quiz">Science Quiz</option>
                <option value="Ideathon">Ideathon</option>
                <option value="Drone_Racing">Drone Racing</option>
                <option value="Gaming_Competition">Gaming Competition</option>
                <option value="Zunk_Yard_Competition">Zunk Yard Competition</option>
                <option value="Robo_Competition">Robo Competition</option>
                <option value="Dance_Competition">Dance Competition</option>
                <option value="Singing_Competition">Singing Competition</option>
                <option value="Rangoli_Competition">Rangoli Competition</option>
                <option value="Painting_Competition">Painting Competition</option>
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
