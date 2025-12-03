// Selecting the necessary DOM elements
        const addBtn = document.getElementById('addBtn');
        const tableBody = document.querySelector('#studentTable tbody');
        
       
        const nameInput = document.getElementById('nameInput');
        const rollInput = document.getElementById('rollInput');
        const deptInput = document.getElementById('deptInput');

        //Adding Event Listener to Add Button
        addBtn.addEventListener('click', function() {
            
            const name = nameInput.value;
            const roll = rollInput.value;
            const dept = deptInput.value;

            //validation check for empty fields
            if (name === '' || roll === '' || dept === '') {
                alert("Please fill in all fields before adding.");
                return;
            }

            const newRow = document.createElement('tr');

            //Insert Data Cells (td)
            const nameCell = document.createElement('td');
            nameCell.textContent = name;
            newRow.appendChild(nameCell);

            const rollCell = document.createElement('td');
            rollCell.textContent = roll;
            newRow.appendChild(rollCell);

            const deptCell = document.createElement('td');
            deptCell.textContent = dept;
            newRow.appendChild(deptCell);

            //Button
            const actionCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('deleteBtn');
            
            deleteBtn.onclick = function() {
                // Removes the specific row (tr) that this button belongs to
                newRow.remove();
            };

            actionCell.appendChild(deleteBtn);
            newRow.appendChild(actionCell);

            tableBody.appendChild(newRow);

            // Clear input fields for next entry
            nameInput.value = '';
            rollInput.value = '';
            deptInput.value = '';
        });