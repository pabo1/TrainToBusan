const storyData = [
            {
                text: "What will you do?",
                choices: [
                    { text: "Help the conductor", next: 1 },
                    { text: "Running away with daughter", next: 2 },
                    { text: "Hide and watch", next: 3 }
                ]
            },
            {
                text: "You hand Su-an over to one of the passengers and rush to the conductor. Together with the guide, you try to hold off the attacker. He starts twitching convulsively — and suddenly bites into your hand, but does not bite through.",
                choices: [
                    { text: "The next scene", next: 4 }
                ]
            },
            {
                text: "You react instantly — pick up Su-An and break through the passengers to the door. Some try to follow you. You slap the button on the automatic door, and it doesn't work immediately.",
                choices: [
                    { text: "The next scene", next: 5 }
                ]
            },
            {
                text: "You squeeze your daughter's hand, watching what is happening. Don't move, don't interfere. People are screaming. Someone tries to help, but the infected one bites them. The situation is getting out of control.",
                choices: [
                    { text: "The next scene", next: 6 }
                ]
            },
            {
                text: "My fingers are shaking. The blood is still on your hands — not yours. The conductor is silent, clutching his wounded arm to his chest. The rest of the passengers leave in a panic. Several people remained motionless, either out of fear or because it was getting late. <br> A rattle is heard from behind. Someone is already getting up. And not humanly. We need to leave. The door clicks open and you step inside, closing it tightly behind you. Su-an is hiding behind your back. All eyes in the carriage are on you.",
                choices: [
                    { text: "Join a group", next:  7},
                    { text: "Stay away", next:  8},
                    { text: "Take the lead", next:  9}
                    
                ]
            },
            {
                text: "You slammed the door behind you, and it immediately locked automatically. There are blood prints on the glass. Screams, blows, and wheezing can be heard behind. But you're alive. Sonmi is nearby. That's the main thing. <br> You don't look back. You don't think. You just walk forward, hugging your daughter to you. You're breathing raggedly. There's fear and shame in my chest. The door clicks open and you step inside, closing it tightly behind you. Su-an is hiding behind your back. All eyes in the carriage are on you.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "You were standing. And now you can't take your eyes off what happened. <br> Blood. Screams. One of the passengers remained lying on the floor with his throat torn out. The others scattered. Some escaped, some did not. But you're still alive. <br> Su-An is snuggling up to you. He sobs softly. You pat her on the head, not knowing how to explain to her why you didn't intervene. Maybe you don't have to. <br> You go into the next carriage. The passengers turn around warily. Someone is already holding an improvised weapon in their hands. For now, you're just another survivor for them. Only for now. The door clicks open and you step inside, closing it tightly behind you. Su-an is hiding behind your back. All eyes in the carriage are on you.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "You take a step forward, not letting go of your daughter's hand.<br>You:<br>— We are with you. I... don't know how to get through all this. But I helped when it started. I'll help you further.<br>The conductor:<br>— This man... he saved me. If it wasn't for him, I'd already be... like them.<br>One of the passengers, a big, muscular one, says: <br>— Okay. As long as you're useful, stay.<br>Su-An presses into your leg, and for the first time since the beginning of the nightmare, you feel a feeling: You're among your own people. Maybe not for long, but it's important right now.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "You don't say anything. You just walk inside, sit in an empty chair, and seat Su-An next to it. Her hands are shaking, but you're calm.<br>The conductor glances at you, grateful but surprised.: You were a hero... why are you silent now?<br>The conversations around us continue. The group is discussing what to do next. You hear everything, and you understand.: I'll have to choose again soon.<br>And you're silent. There is anxiety inside. But for now, all you need is silence and your daughter's breathing next to you.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "You step forward. People turn around. The guide, barely standing on her feet, nods at you. You speak clearly, without hesitation.<br>You:<br>— We can't just wait. We need to move in an organized manner. The army base in Pyeongdek is our last chance.<br>A big, muscular man stepped forward and asked:<br>— And who are you to command?<br>You, being completely calm, replied:<br>— I'm not commanding. I suggest. We have time until they break through. It is better to spend it usefully.<br>An athletic girl looks up from her tablet and says:<br>— And if he has a plan, maybe it's worth listening to?<br>Silence. Someone nods. From the crowd comes a voice:<br>— Let's give him a chance. Now everyone who is willing to think is worth their weight in gold.<br>You can feel the air thickening. The burden of responsibility is in your hands. You've taken a step forward. There's no turning back.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            }
        ];

        let currentIndex = 0;

        function typeText(element, text, callback) {
            let index = 0;

            function type() {
                if (text[index] === "<") {
                    const closingIndex = text.indexOf(">", index);
                    if (closingIndex !== -1) {
                        element.innerHTML += text.slice(index, closingIndex + 1);
                        index = closingIndex + 1;
                    }
                } else {
                    element.innerHTML += text[index];
                    index++;
                }

                if (index < text.length) {
                    setTimeout(type, 20);
                } else if (callback) {
                    callback();
                }
            }

            type();
        }

        function displayStory(index) {
            const story = storyData[index];
            const storyContainer = document.getElementById("story-container");
            const choicesContainer = document.getElementById("choices");

            choicesContainer.style.display = "none";

            const newParagraph = document.createElement("p");
            storyContainer.insertBefore(newParagraph, choicesContainer);

            typeText(newParagraph, story.text, () => {
                choicesContainer.style.display = "block";
                choicesContainer.innerHTML = "";

                story.choices.forEach(choice => {
                    const button = document.createElement("button");
                    button.textContent = choice.text;
                    button.onclick = () => {
                        const choiceText = document.createElement("p");
                        choiceText.className = "chosen-text";
                        choiceText.textContent = `You have chosen: ${choice.text}`;
                        storyContainer.insertBefore(choiceText, choicesContainer);

                        displayStory(choice.next);
                    };
                    choicesContainer.appendChild(button);
                });
            });
        }

        displayStory(currentIndex);