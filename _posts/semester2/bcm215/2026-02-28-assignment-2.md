---
layout: post
title: "BCM 215 - Assignment 2 Progress Report"
date: 2026-02-28
categories: "bcm215"
---

# Introduction: Reintroducing The Project

In my original project pitch, I proposed to transform my existing raycast car chassis originally intended for a driving or racing simulator, into an arcade-styled tank chassis suitable for a family-friendly tank combat game. **My primary goal is to explore how indie developers can work with limitations by reframing a game genre, using this as a method to achieve broader appeal.**

Therefore, my Digital Artifact (DA) is defined as a battle tank chassis that prioritizes immediate, satisfying control over realistic complexity. The DA will be completed in Roblox Studio. As documented in **Devlog #1**, I have alreay completed the foundational conversion to create a functional tank hull, by: 

- Stripping away the complex and redundant scripts inside the car chassis, and
- Replacing simulation logic with static values and a hybrid steering solution. 

Looking ahead, my finished DA should consist of the combination of a hull (already completed), and a turret (to be developed throughout March). Under the acknowledgement that the DA is currently ~50% completed, this progress report analyzes the decisions taken to develop the tank hull portion, as a mean to reflect on constraint‑driven design, player motivation, and autoethnographic methodology (the previously 3 established analytical frameworks).

---

# Analytical Frameworks Outline

Each of my three analytical framework draws on a peer‑reviewed source to study different sides of the same project. Below include the details regarding the each of them.

## #1: Political Economy
The political economy framework is inspired by Shaw's (2010) work on cultural production in video games. Rather than comparing games to some assumed standard, Shaw argues that we should pay attention to the specific conditions of game design, content, and play. Therefore, we should understand a game on its own terms within its own production reality. Given my situation as a solo game designer working with an existing open-sourced codebase, with reliance on Artificial Intelligence (AI) assistance (Qwen) to fill programming gaps, my situation function as a study on how the tank chassis can be manifested under existing conditions.

## #2: Player Motivation
Scharkow and colleagues' (2015) research on game genre preferences and player motivations provides my framework in understanding audience appeal. In their large‑scale study, it was identified that there were distinctive player clusters. For example, those drawn to simulation, action, social interaction, and so on. By simplifying my tank's mechanics, I am consciously targeting the "action‑oriented" cluster, who value tangible rewards over authentic complexity.

## #3: Autoethnography
Rapp's (2018) research on autoethnography in game studies shows that a designer's first‑person reflective account can yield legitimate analytical insights, especially when it is combined with systematic observation. In this project, my devlog can effectively serve as both of a diary/journal, and as a data point. As recorded in Devlog #1, the time investment ratio of 15% foundational work, 50% debugging, and 35% casual play demonstrates how unstructured "feeling the prodduct" can be a major part of the research.

---

# Applying the Framework: Steering Design Case Study

Checking out the development progress so far, I would like to use the part where I worked on the steering as a case study, as it involved a complete redesign instead of just simple optimization. The technical details has been covered extensively in Devlog #1, where I described moving from a car's front‑axle steering to a tank's differential track logic.

The problem presented itself as such: Real tanks steer by **varying the speed of two independent, unrelated tracks**. If we translate this to a keyboard, the player will not be controlling the vehicle with "WASD" or the arrow keys as they would normally do with a car. Instead, the player would need "two sets of W & S", or two joysticks. This is simply not feasible.

Therefore, the problem required a hybrid solution. I created an Offset variable that adjusts the force applied to each track when turning. As the devlog explains:

*"Assuming TrackForce = 10,000: When player makes forward input, left and right track will be given a force of +10,000. For left input, left track is given -5,000, right track +5,000. If both inputs are made, Offset calculates how less force is given to one track. If Offset is 0.6, left track gets 6,000 while right gets 10,000."*

Scharkow et al. (2015) help explain why this matters. Their research shows that players who enjoy action games prioritize "quick mastery" and "sensory feedback." Resonating with this idea as players ourselves, we often want to **skip the Tutorial** to jump straight to the "fun". Therefore, to lower the barrier of entry, I made the tank respond immediately to just WASD. 

In this way, the player wouldn't have to learn about gear shifting or track braking. As simple as it is described, one can simply **press W to go forward**, and **press A to turn**. Yet, I have also kept the underlying differential logic (the left & right track), because I intend to preserve a hint of authenticity. To Scharkow et al., this can be hinted as the most basic form of "genre cue" that signals "this is still a tank, not a car."

As a supplement, my feedback in Devlog #1 also narrates something similar: *"Action‑oriented players who chase 'kills', 'coins', and 'XP' may find it cumbersome to learn about gear shifting... Therefore, I'll deal with this problem here by making the vehicle easy to understand."*

Rapp's (2018) autoethnographic approach became crucial when I started tuning the Offset value. My time breakdown shows 35% of development spent on "casual play session & experiential observation." In total, it took up approximately 12 hours over one week of simply driving the tank around the test place. Rapp argues that such subjective experience, when rigorously documented, yields insights that external playtesting might miss.

In my case, I discovered that satisfaction correlated with predictability instead of simulation accuracy when the focus has shifted from **"look at the suspension here"** to **"how to navigate to point A quickly"**. Therefore, to the player, seeing a stat that states "this hull moves at 30km/h" may be more helpful and comforting than "the HP is 1200", which dramatically increases cognitive load.

---

# Literature Review: Expanding the Research Base
Beyond my three core sources, I have sourced additional peer‑reviewed work to provide further insight in developing an engaging DA.

Concerning the finished hull, **Juul (2005), Half‑Real: Video Games Between Real Rules and Fictional Worlds** helped me frame the tension between simulation (real‑world tank behaviour) and fiction (the player's immersed experience). My decision to prioritize predictable controls over authentic differential logic reflects the stance that games operate in a space where rules and fiction coexist. The player knows this is not a "real" tank, but the fictional contract requires enough cues to sustain belief.

As for the upcoming turret: **Lazzaro (2004), "Why We Play Games: Four Keys to More Emotion Without Story"** offers a complementary lens to Scharkow. Lazzaro's concept, **"Hard Fun" (challenge, strategy)** and **"Easy Fun" (exploration, fantasy)** reveals that "fun" alone can come in different ways, and I can seek to balance that. The tank's simple controls invite Easy Fun, while future combat may introduce Hard Fun.

**Costikyan (2013), Uncertainty in Games,** provides discussion regarding tactical depth. Although my tank hull currently lacks uncertainty (due consideration that features like engine breakdown and speed deviation may cause frustrations), the text mention that *too little* uncertainty can bore players out. This serves as a critical design painpoint that I should pay attention to. Hull development emphasized dumbing down a sophisticated system to ensure user-friendliness, but should I really do the same for the turret?

---

# Next Steps and Timeline

With the fundamentals of the tank hull now being completed, my immediate focus would be to address the tank track issue raised in Devlog #1. While it "will not interfere with core gameplay," it is a feature enhancement worth considering before final submission. Concrete plans include:

- Research optimal raycast counts for performance.
- Experimenting with an open‑source tank track module.
- Document whether players actually notice clipping, or if I am overthinking visual polish (potential autoethnography blind spot).

By mid‑March, I will add a turret and basic firing mechanic, then test how these additions affect cognitive load and tactical depth. The final contextual report (Assignment 3) will synthesize all findings and provide a closure to the central question: How indie developers achieve genre mainstreaming by working with constraints, and to what degree of twists does it constitute an optimal strategy.

---

# References

Costikyan, G 2013, Uncertainty in Games, MIT Press, Cambridge.
Juul, J 2005, Half‑Real: Video Games Between Real Rules and Fictional Worlds, MIT Press, Cambridge.

Lazzaro, N 2004, 'Why We Play Games: Four Keys to More Emotion Without Story', paper presented at the Game Developers Conference, San Jose.

Juul, J 2005, Half‑Real: Video Games Between Real Rules and Fictional Worlds, MIT Press, Cambridge.

Rapp, A 2018, 'Autoethnography in the Study of Game‑Based Interactions', in Games and Culture, vol. 13, no. 5, pp. 451–472.

Scharkow, M, Festl, R, Vogelgesang, J & Quandt, T 2015, 'Beyond the "Core‑Gamer": Genre Preferences and Gratifications in Computer Games', Computers in Human Behavior, vol. 44, pp. 293–298.

Shaw, A 2010, 'What Is Video Game Culture? Cultural Studies and Game Studies', Games and Culture, vol. 5, no. 4, pp. 403–424.