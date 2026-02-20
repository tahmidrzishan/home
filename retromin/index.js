fetch('https://trzishan.github.io/static/projects.json')
    .then(response => response.json())
    .then(data => {
        const boxesDiv = document.getElementById('boxes');

        data.forEach(item => {
            const anchor = document.createElement('div');
            anchor.setAttribute("class", "box")
            anchor.innerHTML = `
                <a href="${item.link}" target="_blank">
                    <div class="image" style="background-image: url('https://trzishan.github.io/${item.image}'); background-size: cover;"></div>
                    <div class="title">${item.title}</div>
                </a>
            `;
            boxesDiv.appendChild(anchor);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));