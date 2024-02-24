document.addEventListener("DOMContentLoaded", function() {
    const configs = [
        {
            title: { text: '404', fontSize: '320px', position: { left: '50%', top: '5%', transform: 'translate(-50%, -50%)'  } },
            description: { text: 'Something went wrong...', position: { left: '50%', top: '75%', transform: 'translate(-50%, -50%)'  } },
            imageUrl: '../404/images/cat_05.png',
            imageSize: { width: '533px', height: '400px' },
            imagePosition: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
            buttonGroup: {
                position: { top: '85%', left: '50%', transform: 'translate(-50%, -50%)' },
                buttons: [
                    { text: 'Go Back' },
                    { text: 'Show One More 404 Page' }
                ]
            },
        },
        {
            title: { text: '404', fontSize: '220px', position: { left: '10%', top: '20%', transform: 'translate(-0%, -50%)'  } },
            description: { text: 'Something went wrong...', position: { left: '10%', top: '55%', transform: 'translate(-0%, -50%)'  } },
            imageUrl: '../404/images/cat_02.png',
            imageSize: { width: '592px', height: '592px' },
            imagePosition: { top: '40%', left: '70%', transform: 'translate(-50%, -50%)' },
            buttonGroup: {
                position: { top: '65%', left: '10%', transform: 'translate(-00%, -50%)' },
                buttons: [
                    { text: 'Go Back' },
                    { text: 'Show One More 404 Page' }
                ]
            },
        },
        {
            title: { text: '404', fontSize: '320px', position: { left: '50%', top: '5%', transform: 'translate(-50%, -50%)'  } },
            description: { text: 'Something went wrong...', position: { left: '50%', top: '75%', transform: 'translate(-50%, -50%)'  } },
            imageUrl: '../404/images/cat_01.png',
            imageSize: { width: '656px', height: '456px' },
            imagePosition: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
            buttonGroup: {
                position: { top: '85%', left: '50%', transform: 'translate(-50%, -50%)' },
                buttons: [
                    { text: 'Go Back' },
                    { text: 'Show One More 404 Page' }
                ]
            },
        },
        {
            title: { text: '404', fontSize: '320px', position: { left: '50%', top: '-20%', transform: 'translate(-50%, -0%)'  } },
            description: { text: 'Something went wrong...', position: { left: '50%', top: '70%', transform: 'translate(-50%, -0%)'  } },
            imageUrl: '../404/images/cat_04.png',
            imageSize: { width: '456px', height: '456px' },
            imagePosition: { left: '50%', top: '23%', transform: 'translate(-50%, -0%)' },
            buttonGroup: {
                position: { left: '50%', top: '80%', transform: 'translate(-50%, -0%)' },
                buttons: [
                    { text: 'Go Back' },
                    { text: 'Show One More 404 Page' }
                ]
            },
        },
        {
            title: { text: '404', fontSize: '220px', position: { left: '10%', top: '20%', transform: 'translate(-0%, -50%)'  } },
            description: { text: 'Something went wrong...', position: { left: '10%', top: '55%', transform: 'translate(-0%, -50%)'  } },
            imageUrl: '../404/images/cat_03.png',
            imageSize: { width: '456px', height: '456px' },
            imagePosition: { top: '50%', left: '70%', transform: 'translate(-50%, -50%)' },
            buttonGroup: {
                position: { top: '65%', left: '10%', transform: 'translate(-00%, -50%)' },
                buttons: [
                    { text: 'Go Back' },
                    { text: 'Show One More 404 Page' }
                ]
            },
        },
    ];

    // Select a random configuration
    const config = configs[Math.floor(Math.random() * configs.length)];

    const container = document.getElementById('custom-404');
    container.innerHTML = `
        <h1 class="title-404" style="font-size: ${config.title.fontSize}; position: absolute; top: ${config.title.position.top}; left: ${config.title.position.left}; transform: ${config.title.position.transform};">${config.title.text}</h1>
        <img src="${config.imageUrl}" style="flex: 0 1 auto; width: ${config.imageSize.width}; height: ${config.imageSize.height}; position: absolute; top: ${config.imagePosition.top}; left: ${config.imagePosition.left}; transform: ${config.imagePosition.transform}">
        <p style="position: absolute; top: ${config.description.position.top}; left: ${config.description.position.left}; transform: ${config.title.position.transform};">${config.description.text}</p>

        <div class="button-group-404" style="position: absolute; top: ${config.buttonGroup.position.top}; left: ${config.buttonGroup.position.left}; transform: ${config.buttonGroup.position.transform}; display: flex; gap: 20px;">
        </div>
    `;

    const buttonGroup = container.querySelector('.button-group-404');

    config.buttonGroup.buttons.forEach(buttonConfig => {
        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = "elementor-element elementor-tablet-align-center elementor-mobile-align-center elementor-widget elementor-widget-button";
        buttonWrapper.innerHTML = `
            <div class="elementor-widget-container">
                <div class="button-404-wrapper elementor-button-wrapper">
                    <a class="button-404 elementor-button elementor-button-link elementor-size-sm" href="#">
                        <span class="elementor-button-content-wrapper">
                            <span class="elementor-button-text">${buttonConfig.text}</span>
                        </span>
                    </a>
                </div>
            </div>
        `;

        // Append the button wrapper to the button group
        buttonGroup.appendChild(buttonWrapper);

        // Find the anchor tag within the button wrapper and add an event listener
        const buttonLink = buttonWrapper.querySelector('a.elementor-button-link');
        if(buttonConfig.text === 'Go Back') {
            buttonLink.addEventListener('click', function(event) {
                event.preventDefault();
                window.history.back();
            });
        } else if(buttonConfig.text === 'Show One More 404 Page') {
            buttonLink.href = window.location.href; // To reload the current page
        }
    });
});