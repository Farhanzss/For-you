       const yesButton = document.getElementById('yesButton');
        const noButton = document.getElementById('noButton');
        const responseMessage = document.getElementById('responseMessage');

        yesButton.addEventListener('click', function () {
            responseMessage.innerHTML = `Congratulations! You've made me the happiest person in the world. I love you, [Your Girlfriend's Name]! 💍❤️`;
        });

        noButton.addEventListener('click', function () {
            responseMessage.innerHTML = `That's okay. I understand. I'll always cherish our moments together, [Your Girlfriend's Name]. ❤️`;
        });