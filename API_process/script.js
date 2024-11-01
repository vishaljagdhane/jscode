const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    renderTable(data);
}

function renderTable(data) {
    dataTable.innerHTML = ''; // Clear existing data
    data.forEach(item => {
        const row = dataTable.insertRow();
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
            <td>
                <button onclick="editPost(${item.id})">Edit</button>
                <button onclick="deletePost(${item.id})">Delete</button>
            </td>
        `;
    });
}

async function addPost() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    // Simulate adding the post
    const newPost = { id: Date.now(), title, body };
    
    // Instead of saving to a server, we'll just display it in the table for this example
    renderTable([...await getData(), newPost]);
    
    // Clear inputs
    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
}

function editPost(id) {
    const row = Array.from(dataTable.rows).find(r => r.cells[0].textContent == id);
    const title = row.cells[1].textContent;
    const body = row.cells[2].textContent;

    // Populate the input fields
    document.getElementById('title').value = title;
    document.getElementById('body').value = body;

    // Remove the row from the table for simplicity
    deletePost(id);
}

function deletePost(id) {
    const data = Array.from(dataTable.rows).filter(r => r.cells[0].textContent != id).map(row => ({
        id: row.cells[0].textContent,
        title: row.cells[1].textContent,
        body: row.cells[2].textContent
    }));
    renderTable(data);
}

// Fetch data when the page loads
window.onload = fetchData;
