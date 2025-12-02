 // Select the button and the body element
        const toggleButton = document.getElementById('theme-toggle');
        const body = document.body;

        /*Variable to store the current mode
         false = Light Mode (default), true = Dark Mode */
        let isDarkMode = false;

        //Event Listener for Click
        toggleButton.addEventListener('click', function() {
            
            isDarkMode = !isDarkMode;

            /* Switch themes by toggling the CSS class on the body
            This instantly updates all children elements that use CSS variables*/
            if (isDarkMode) {
                body.classList.add('dark-mode');
                toggleButton.textContent = "Switch to Light Mode";
            } else {
                body.classList.remove('dark-mode');
                toggleButton.textContent = "Switch to Dark Mode";
            }

          
            console.log("Current Mode: " + (isDarkMode ? "Dark" : "Light"));
        });