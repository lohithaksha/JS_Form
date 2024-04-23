document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById('card-container');
    const cardsData = getCardsData();

    function createCard(title, content, definition) {
        const card = document.createElement('div');
        card.className = 'card';

        const elements = [
            { tag: 'h2', textContent: title },
            { tag: 'p', textContent: content },
            { tag: 'p', textContent: definition }
        ];

        elements.forEach(({ tag, textContent }) => {
            const element = document.createElement(tag);
            element.textContent = textContent;
            card.appendChild(element);
        });

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';
        const learnMoreButton = document.createElement('a');
        learnMoreButton.href = 'https://www.geeksforgeeks.org/javascript-interview-questions-and-answers/';
        learnMoreButton.className = 'button';
        learnMoreButton.textContent = 'Learn More';
        buttonContainer.appendChild(learnMoreButton);
        card.appendChild(buttonContainer);

        return card;
    }

    cardsData.forEach(({ title, content, definition }) => {
        const card = createCard(title, content, definition);
        cardContainer.appendChild(card);
    });

    // Integrated code_2 here
    function fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          let userData = 'Users:\n\n';

          data.forEach(user => {
            userData += `Name: ${user.name}\nEmail: ${user.email}\n\n`;
          });

          window.alert(userData);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }

    document.getElementById('fetchButton').addEventListener('click', fetchUsers);
});
