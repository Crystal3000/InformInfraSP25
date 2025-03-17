console.log("Delivery");

const deliveryRef = document.querySelector("#delivery");

let decisionOne = null

function startDelivery(){
    deliveryRef.innerHTML = "<p>*Beep Beep Beep* The ringing of your phone interrupts the serene atmoshphere of your breakfast table, making you drop your spoon in surprise. Looking down at your phone, you see the name of the caller. It's your buddy Kyle. Will you answer the phone or ignore it?</p>"

     decisionOne = [
        {name: "Answer Phone",
            img: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/phone-circle-green-512.png",
        },
        {name: "Ignore Phone",
            img: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/55-1024.png",
        },
    ];

    function answerPhone(){
        deliveryRef.innerHTML = "<p>You sigh shortly before picking up your phone and clicking the green answer button. 'Hi, Kyle,' you say. 'Hey bro, whatsup? Listen, I know this is super last minute, but can you take over my shift </p>"
    }

    for (let i = 0; i < decisionOne.length; i++) {
        const decision = decisionOne[i];
        const newSection = document.createElement("section");

        newSection.innerHTML += "<img height='100' src='" + decision.img + "' alt='" + decision.name + "' />";

        newSection.innerHTML += "<h4>" + decision.name + "</h4>";

        newSection.dataset.decisionName = decision.name;
        newSection.dataset.decisionImg = decision.img;
        newSection.onclick = chooseDecision;

        deliveryRef.appendChild(newSection);
        
    }
        

}

function chooseDecision(e) {
    console.log(e.currentTarget);
    const decisionName = e.currentTarget.dataset.decisionName;
    const decisionImg = e.currentTarget.dataset.decisionImage; 

    const confirmChoice = confirm("You chose " + decisionName);
    
    if (confirmChoice) {
        deliveryRef.innerHTML +=
        "You chose to " + decisionName;

        decisionOne = { name: decisionName, img: decisionImg };
    }
}

if (decisionOne == true) "<p>You sigh shortly before picking up your phone and clicking the green answer button. 'Hi, Kyle,' you say. 'Hey bro, whatsup? Listen, I know this is super last minute, but can you take over my shift </p>"
    
