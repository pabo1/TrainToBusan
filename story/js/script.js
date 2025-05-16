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
                text: "Your fingers are shaking. The blood is still on your hands — not yours. The conductor is silent, clutching his wounded arm to his chest. The rest of the passengers leave in a panic. Several people remained motionless, either out of fear or because it was getting late. <br> A rattle is heard from behind. Someone is already getting up. And not humanly. We need to leave. The door clicks open and you step inside, closing it tightly behind you. Su-an is hiding behind your back. All eyes in the carriage are on you.",
                choices: [
                    { text: "Join a group", next: 7 },
                    { text: "Stay away", next: 8 },
                    { text: "Take the lead", next: 9 }
                ]
            },
            {
                text: "You slammed the door behind you, and it immediately locked automatically. There are blood prints on the glass. Screams, blows, and wheezing can be heard behind. But you're alive. Su-An is nearby. That's the main thing. <br> You don't look back. You don't think. You just walk forward, hugging your daughter to you. You're breathing raggedly. There's fear and shame in my chest. The door clicks open and you step inside, closing it tightly behind you. Su-an is hiding behind your back. All eyes in the carriage are on you.",
                choices: [
                    { text: "Join a group", next: 10 },
                    { text: "Stay away", next: 11 },
                    { text: "Take the lead", next: 12 }
                ]
            },
            {
                text: "You were standing. And now you can't take your eyes off what happened. <br> Blood. Screams. One of the passengers remained lying on the floor with his throat torn out. The others scattered. Some escaped, some did not. But you're still alive. <br> Su-An is snuggling up to you. He sobs softly. You pat her on the head, not knowing how to explain to her why you didn't intervene. Maybe you don't have to. <br> You go into the next carriage. The passengers turn around warily. Someone is already holding an improvised weapon in their hands. For now, you're just another survivor for them. Only for now. The door clicks open and you step inside, closing it tightly behind you. Su-an is hiding behind your back. All eyes in the carriage are on you.",
                choices: [
                    { text: "Join a group", next: 13 },
                    { text: "Stay away", next: 14 },
                    { text: "Take the lead", next: 15 }
                ]
            },
            {
                text: "You take a step forward, not letting go of your daughter's hand.<br>You:<br>— We are with you. I... don't know how to get through all this. But I helped when it started. I'll help you further.<br>The conductor:<br>— This man... he saved me. If it wasn't for him, I'd already be... like them.<br>One of the passengers, a big, muscular one, says: <br>— Okay. As long as you're useful, stay.<br>Su-An presses into your leg, and for the first time since the beginning of the nightmare, you feel a feeling: You're among your own people. Maybe not for long, but it's important right now.",
                choices: [
                    { text: "The next scene", next: 16 }
                ]
            },
            {
                text: "You don't say anything. You just walk inside, sit in an empty chair, and seat Su-An next to it. Her hands are shaking, but you're calm.<br>The conductor glances at you, grateful but surprised: 'You were a hero... why are you silent now?'<br>The conversations around us continue. The group is discussing what to do next. You hear everything, and you understand: 'I'll have to choose again soon.'<br>And you're silent. There is anxiety inside. But for now, all you need is silence and your daughter's breathing next to you.",
                choices: [
                    { text: "The next scene", next: 17 }
                ]
            },
            {
                text: "You step forward. People turn around. The conductor, barely standing on her feet, nods at you. You speak clearly, without hesitation.<br>You:<br>— We can't just wait. We need to move in an organized manner. The army base in Pyeongdek is our last chance.<br>A big, muscular man stepped forward and asked:<br>— And who are you to command?<br>You, being completely calm, replied:<br>— I'm not commanding. I suggest. We have time until they break through. It is better to spend it usefully.<br>A girl looks up from her tablet and says:<br>— And if he has a plan, maybe it's worth listening to?<br>Silence. Someone nods. From the crowd comes a voice:<br>— Let's give him a chance. Now everyone who is willing to think is worth their weight in gold.<br>You can feel the air thickening. The burden of responsibility is in your hands. You've taken a step forward. There's no turning back.",
                choices: [
                    { text: "The next scene", next: 18 }
                ]
            },
            {
                text: "You get closer to the center of the carriage. People are tensing up. Several people involuntarily step back. You can feel it right away, the distrust in the air.<br>You (calmly):<br>— I understand what it looks... bad. I'm not a hero. I was just trying to save my daughter. But if you need help, I'm ready.<br>One of the women in the crowd says indignantly but understandingly:<br>— Once he runs, he'll run again. But now any vote in favor is better than panic.<br>The doubt remains, but you are given a chance. Not as friend. Not as savior. As a necessary number in the survival equation.",
                choices: [
                    { text: "The next scene", next: 22 } // 10
                ]
            },
            {
                text: "You sit on the empty seat by the window. Nearby is Su-An. She's buried in your shoulder, but you don't feel at peace. People are whispering around. They periodically cast glances — prickly, cold.<br>Someone looks at you as a person who, at the moment of choosing, put himself above everyone else.<br>Do you hear the whispers:<br>— He didn't even look back. He just ran away.<br>But you don't react. Now you're in the shadows. And it's not known how long you'll last there.<br>Su-an whispers:<br>— Dad, are we good?<br>The question remains unanswered.",
                choices: [
                    { text: "The next scene", next: 23 }
                ]
            },
            {
                text: "You step out into the center of the carriage, raise your palm:<br>— We can't just sit. If we don't act, we'll die. We need to move to the front of the train. Maybe there's a connection, or the military.<br>Silence. People exchange glances. A big, muscular man stands up, approaching you step by step. There is no rage in his gaze. Much worse: contempt.<br>— Weren't you the one who ran away first, when that woman was screaming? First you run, then you command?<br>You don't have time to answer. Teenagers are standing in a corner with their eyes downcast. They ran too, and they'll recognize themselves in you. Only you decided to speak for everyone.<br>You're not getting kicked out. But after those words, no one listens to you. And maybe it's even worse.",
                choices: [
                    { text: "The next scene", next: 24 }
                ]
            },
            {
                text: "You're taking a step forward. People fall silent. Your posture is straight, but some people already have doubts in their eyes. They remember: You just stood there. Watched. Without action.<br>You:<br>— I want to help. It doesn't matter now what it was before. I didn't know what to do… But now I want to be useful.<br>An awkward pause. An elderly woman shakes her head and says:<br>— A living person died there. And you were there. I saw. And he didn't do anything.<br>A big, muscular man objected:<br>— We're not in court. And we don't need a hero, but a man we can rely on. Are you like that?<br>You nod. Uncertainly. People don't argue, but they don't accept either. You enter the circle, but you feel outside of it.",
                choices: [
                    { text: "The next scene", next: 28 }
                ]
            },
            {
                text: "You stay put. Group discussions go on in the background, as if you are in a glass capsule. People don't touch you. And you're theirs, too.<br>Su-an is sitting next to you, gripping your hand tightly. But you notice that the other kids are playing separately. Other adults are nearby, but not with you.<br>It's like you're a ghost in this carriage: neither an enemy nor a friend. Just a passenger who accidentally got into someone else's tragedy.<br>Su-an (softly):<br>— Why are we always alone?<br>You're at a loss for words. Maybe because one day, when you had to make a choice, you chose inaction. And now it's chosen you.",
                choices: [
                    { text: "The next scene", next: 29 }
                ]
            },
            {
                text: "You're getting up. People fall silent, not out of respect, but out of surprise. Your voice sounds firm.<br>You:<br>— We need to act. Staying here is suicide. There is a chance to break through, to overtake the source of infection…<br>A big muscular man said:<br>— Who are you to talk? You didn't even blink when the woman's blood was gushing onto the floor.<br>A young pregnant woman added:<br>— Not everyone knows how to save. But whoever hasn't even tried... has no right to lead.<br>Silence. People don't argue — they've already turned away. You're standing in the middle of the train like a general without an army.<br>Su-an pulls on your sleeve:<br>— Dad... let's just sit.<br>And you walk away, under the dull noise of conversation. It's not about you. You're here, but you're gone.",
                choices: [
                    { text: "The next scene", next: 30 }
                ]
            },
            {
                text: "You get to know the others. The man who initially seemed big and angry, Sang-Hwa, turned out to be the caring and loving husband of a pregnant Song-Kyung. A teenager from the baseball team, Yeon-Guk and his girlfriend Jin-Hee. That's probably all I remember.",
                choices: [
                    { text: "The next scene", next: 19 }
                ]
            },
            {
                text: "You and your daughter stayed away. There was a group nearby who were discussing their future course of action. It's not loud, but you can hear them clearly. From their conversation, it was clear that the biggest, and by all accounts, the most vicious, was Sang-hwa. He has a pregnant wife, Song-kyung. I also found out the name of a young teenage baseball player, Yong-guk. I guess these are all the names I need.",
                choices: [
                    { text: "The next scene", next: 20 }
                ]
            },
            {
                text: "You took over the leadership of the group. Therefore, you need to remember everyone who enters it so that no one gets left behind or gets lost. It's hard because it's never been easy for you to remember faces and names in a short time, but you're kind of doing it.<br>Sang-hwa is spiteful and cynical on the surface, but in reality he is a kind, caring husband and cares about the safety of the group more than anyone else.<br>Song-kyung is his pregnant wife. Volunteered to keep an eye on your daughter while you work for the benefit of the group.<br>Yeon-guk is a young, promising guy from the baseball team. Provided us with bits. At least now we have something to defend ourselves with.<br>Jin-hee is the cheerleader of Yong-guk's team and his girlfriend. They seem to have started dating recently, but they are ready and will help and protect each other.<br>In-gil and Jong-gil are two elderly sisters. Were accepted even before I joined and became a leader. There are no key skills. Apparently, they were accepted by Sang-hwa out of pity.",
                choices: [
                    { text: "The next scene", next: 21 }
                ]
            },
            {
                text: "Sang-hwa passes you the bat without looking you in the eye:<br>— We're ahead. You and me.  Don't be stupid, or we'll all be eaten. Understood?<br>You nod. Nearby are Song-Kyung and Yeon-Guk. Everyone has fear in their eyes, but no one says no. You're one of them. Not favorite. But among their own people.<br>The guide is behind, holding Su-an in her arms. You're asking her to hold on tight.<br>You:<br>— Five minutes. We will break through.<br>You enter the infected carriage. The shadows are moving. My breathing stops.<br>Someone says from behind:<br>— If it wasn't for him, I wouldn't have climbed.<br>You grip the bat tighter. They trust you. It remains to prove that it is not in vain.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "The group discusses the plan. You listen without interfering. The bits are distributed to the others. No one is offering you.<br>Yong-Guk (in a whisper):<br>— He helped at the very beginning…<br>Sang-Hwa:<br>— And then he hid. Helped once, and thought that would be enough?<br>You're coming up:<br>— Give me the bat. I'm coming with you.<br>Song-kyung looks at you for a long time. Then he nods, more to himself than to you. He holds out a baseball bat.<br>Song-kyung:<br>— One chance. Don't let us down.<br>You're the last one in. If you stumble, no one will save you.",
                choices: [
                    // { text: "The next scene", next:  } // 20
                ]
            },
            {
                text: "You're standing at the door of an infected train car, drawing a plan on the floor with a marker. People are silent — they are listening. Even Sang-hwa doesn't interrupt.<br>You:<br>— They react to sound. We'll split up into pairs. We're moving to the count of three. Without improvisation. If someone gets lost, the rest move on. We are not heroes. We are a team.<br>Sang-hwa nods:<br>— Said lead the way. I hope you have the guts.<br>You open the door first. Dark. A rustle. The screams are behind us. But everyone is coming for you.<br>Yeon-guk whispers:<br>— I don't know who he is... but I'm with him.<br>You led the way. Now you're either going to save everyone or you're going to ruin them.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "You get to know the others. The man who initially seemed big and angry, Sang-Hwa, turned out to be the caring and loving husband of a pregnant Song-Kyung. A teenager from the baseball team, Yeon-Guk and his girlfriend Jin-Hee. That's probably all I remember.",
                choices: [
                    { text: "The next scene", next: 24 }
                ]
            },
            {
                text: "You and your daughter stayed away. There was a group nearby who were discussing their future course of action. It's not loud, but you can hear them clearly. From their conversation, it was clear that the biggest, and by all accounts, the most vicious, was Sang-hwa. He has a pregnant wife, Song-kyung. I also found out the name of a young teenage baseball player, Yong-guk. I guess these are all the names I need.",
                choices: [
                    { text: "The next scene", next: 25 }
                ]
            },
            {
                text: "You don't know any names or anything. The only thing left for you is to hope for the sympathy of the team. You look at Su-an and realize you need to protect her in every way. And you make one last attempt to suggest a further course of action.",
                choices: [
                    { text: "The next scene", next: 26 }
                ]
            },
            {
                text: "Sang-Hwa holds the bat, checking Sung-kyung's gaze. You're standing a little to the side. The atmosphere is heavy, but you are no longer a stranger. More is a dubious ally.<br>You:<br>— I'm with you. I'm not asking for forgiveness. But now it's either together or nobody.<br>No one answers. But Sang-hwa throws you a roll of duct tape.<br>Sang-Hwa:<br>— Wrap your hands. And not a step sideways without a command.<br>You're getting closer. Su-an is with you, but you gave her to Jong-gil. She takes the girl cautiously.<br>In-Gil:— If you leave her, I'll leave you.<br>You're silent. You know they're right. Now is the time to prove that you didn't just survive. You've changed.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "The group is arguing about the plan. You're silent. You don't even make eye contact. When Sang-hwa is about to walk forward, you stand up.<br>You:<br>— I... I'll go too.<br>The whole group freezes. Sang-hwa slowly turns around.<br>Sang-Hwa:<br>— Yeah. And then you'll run away again?<br>Song-kyung shakes his head:<br>— He doesn't ask you to go first. Let it be the last one. If there's an extra zombie, let him go for it.<br>You understand: you're not in the group. You're an insurance bag. If things go badly, you'll be the first to be dumped. And that's fair.<br>Su-an snuggles up to you.:<br>— We'll get through. I know.<br>You exhaled. And stepped into the darkness.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "You step forward, showing the diagram on the phone screen. You explain the plan, the emphasis on action, distraction, and distribution.<br>The group is watching. He doesn't interrupt. But he doesn't listen either.<br>The elderly woman (mockingly):<br>— Oh, the commander is back in business.<br>A young guy in a bomber jacket from a popular university:<br>— Maybe he has a plan after all? Better than just climbing blindly.<br>A large man interrupts:<br>- No. He has already chosen to save himself. And now he's suddenly become a captain? Let him go first. If he survives, we'll consider whether it's worth listening.<br>You understand: your voice doesn't weigh anything. But they're using you. And you go first.<br>A pregnant woman, apparently the wife of that bully, the only one who looks you in the eye, whispers:<br>— Just breathe evenly. We're close. Even if they don't talk.<br>You get on the train. There's a rustle of steel and indifference behind you. Only a step forward can change everything.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "You get to know the others. The man who initially seemed big and angry, Sang-Hwa, turned out to be the caring and loving husband of a pregnant Song-Kyung. A teenager from the baseball team, Yeon-Guk and his girlfriend Jin-Hee. That's probably all I remember.",
                choices: [
                    { text: "The next scene", next: 31 }
                ]
            },
            {
                text: "You and your daughter stayed away. There was a group nearby who were discussing their future course of action. It's not loud, but you can hear them clearly. From their conversation, it was clear that the biggest, and by all accounts, the most vicious, was Sang-hwa. He has a pregnant wife, Song-kyung. I also found out the name of a young teenage baseball player, Yong-guk. I guess these are all the names I need.",
                choices: [
                    { text: "The next scene", next: 32 }
                ]
            },
            {
                text: "You don't know any names or anything. The only thing left for you is to hope for the sympathy of the team. You look at Su-an and realize you need to protect her in every way. And you make one last attempt to suggest a further course of action.",
                choices: [
                    { text: "The next scene", next: 33 } // 30
                ]
            },
            {
                text: "You follow the group. They don't give you a bat. But Sang-hwa, checking the inventory, throws over his shoulder:<br>Sang-Hwa:<br>— You will shine a flashlight. Don't shake. And don't slow down.<br>You silently pick up the phone. Su-An holds on to you tightly, with a trust that no one else gives you yet.<br>Song-Kyung whispers:<br>— If you take even one step back, you will stay there. We're already risking more with you than you are with us.<br>You nod. In front of you are the doors of an infected carriage. Dark. It smells like blood.<br>You know you won't get a second chance.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "When the question is raised: Who is coming, no one is looking in your direction. Even Su-an. She hugs her knees and is silent.<br>You get up slowly:<br>— I'll go. Give me something, please.<br>Sang-Hwa snorts<br>— Look who is barking<br>The elderly woman (tiredly):<br>— Give him the bag. He will carry spare clothes. If anything, we'll drop it — they'll be distracted by it.<br>You take the bag. You're silent. Su-an reaches out to you, but they take her to Song-kyung.<br>Song-kyung:<br>— We don't risk a child for a bad father.<br>You go last. Not because they decided to. Because you know that trust is at zero. You're just a shadow. And a chance to prove that you are more than an empty place.",
                choices: [
                    // { text: "The next scene", next:  }
                ]
            },
            {
                text: "You're back in the center. You talk about strategy, about sound, about distractions. People are listening because there is no better plan.<br>But as soon as you finish, the big man says<br>— Okay. The plan is normal. Only you will be the first to follow it.<br>You nod. You want it to be an act of force. But it's a test for everyone.<br>An elderly woman (quietly, sharply):<br>— One corpse means fewer mouths.<br>You take the bat. For the first time. It's heavy. And it's not even about the metal.<br>Su-An whispers to you:<br>— You can handle it. I know.<br>And suddenly it gets a little easier. Someone believes in you. Even if no one is listening.",
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