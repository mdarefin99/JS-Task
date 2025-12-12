// Elements
        const textInput = document.getElementById('inputText');
        const analyzeBtn = document.getElementById('analyzeBtn');
        const resultsDiv = document.getElementById('results');

        //Adding Event Listener
        analyzeBtn.addEventListener('click', function() {
            // Get the value from the textarea
            const text = textInput.value;

            /* Handling Empty Input*/
            if (!text.trim()) {
                resultsDiv.style.display = 'block';
                resultsDiv.innerHTML = '<p style="color: red; text-align: center;">Please enter some text to analyze.</p>';
                return;
            }

           

            // Character Count (Length)
            const charCount = text.length;

            /* Word Count We trim whitespace from ends, then split by one or more spaces (regex /\s+/)
             this handles multiple spaces between words correctly.*/
            const wordsArray = text.trim().split(/\s+/);
            const wordCount = wordsArray.length;

            // Reverse Text
            // Split into array of chars -> Reverse array -> Join back to string
            const reversedText = text.split('').reverse().join('');

            // Display results
            resultsDiv.innerHTML = `
                <div class="stat-item"><strong>Total Characters:</strong> ${charCount}</div>
                <div class="stat-item"><strong>Total Words:</strong> ${wordCount}</div>
                <div class="stat-item">
                    <strong>Reversed Text:</strong>
                    <div class="reversed-text-box">${reversedText}</div>
                </div>
            `;

            resultsDiv.style.display = 'block';
        });