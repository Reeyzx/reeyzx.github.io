---
layout: post
title: "BCM 215 - Contextual Report"
date: 2026-03-29
categories: "bcm215"
---

# Assignment 3: Contextual Report

---
![Image of the development roadmap](/assets/images/bcm215_assets/roadmap.png)

# Introduction

Independent game developers often work under severe resource constraints, such as limited time, small teams, and reliance on reusing existing code. One strategy to overcome such limitations is via **genre mainstreaming**, an adaption of additional established genre elements to make a niche game more accessible to a wider audience. This project investigates how this strategy functions in practice, using an autoethnographic approach grounded in the development of a tank prototype, built from a pre‑existing raycast car chassis.

The study draws on three analytical frameworks:
- (1) **Political economy** (Hesmondhalgh 2019) examines how material constraints shape design decisions. 
- (2) **Player motivation** (Scharkow et al. 2015) is used to understand how those decisions appeal to different audience segments. 
- (3) **Autoethnography** (Rapp 2018) provides the methodological foundation. Documented development experiences would serve as primary data, to be analyzed reflexively. 

These three themes would guide the inquiry of the following three aspects:
- *cognitive load* (ease of control),
- *genre identity* (whether the artifact signals its genre), and
- *tactical depth* (meaningful player choices). 

Therefore, the central research question asks how indie developers can utilize genre mainstreaming under constraints, to turn disadvantages into creative advantages.

## Autoethnography Centric Methodology

Autoethnography uses situated experience as primary data, emphasizing reflexivity and systematic observation, rather than objectivity (Rapp 2018). 

In this final report, documentation created during the development report will be utilized and referenced. The data consist of follows:

### Two development logs
Devlog #1: [From Car to Tank](https://reeyzx.github.io/bcm215/2026/02/17/DA-remark-1.html)

> This piece records the technical process of transforming a pre-built car chassis into a tank hull.

Devlog #2: [Crossroad of Tank Tracks](https://reeyzx.github.io/bcm215/2026/03/28/DA-remark-2.html)

> This piece records the evaluation and decision-making process of designing the tank hull's tracks.

###  Digital Artifact
Functional tank prototype in Roblox Studio.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dPsIRm5Bi2E?si=yCUaekjhO4BDtSpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

It is believed that the political economy framework (Hesmondhalgh 2019) is particularly relevant to solo independent development, where the developer must navigate high risk and limited resources without institutional support.

---

# Tank Hull: Trading for Accessibility
> **Supported by devlog #1 (17 Feb 2026)**

### PROCESS SUMMARY

The starting point was a functional raycast car chassis built in December 2025, featuring realistic components: a manual gearbox, engine torque simulation, brake modules, and air resistance. Over one week, three key modules were removed (`EngineModule`, `TransmissionModule`, `BrakeModule`) and replaced with static variables (`TopSpeed`, `LeftTrackForce`, `RightTrackForce`, `Weight`). The intent was to transform a “simulator” into an “arcade” experience, reducing complexity to appeal to action‑oriented players.

![Diagram explaining car vs tank steering](/assets/images/bcm215_assets/car-tank-steering.png)

Steering was the main technical challenge. This was because real tanks use differential steering (varying two independent tracks), but standard keyboard (WASD) input assumes a single steering axis. As a result, an `Offset` variable was introduced. 

- When the player presses forward, both tracks receive equal force; 
- Turning left gives negative force to the left track and positive to the right; 
- Combined inputs use `Offset` **(shown in the diagram above)** to reduce force on the inside track proportionally. 

The result is intuitive WASD control that preserves the underlying logic of tracked movement.

Time spent was approximately one week, with 15% foundational code, 50% debugging and playtesting, and 35% casual play. This last category proved critical, as extended unstructured driving revealed that player satisfaction correlated with **predictability**, rather than simulation fidelity. **A major discovery was knowing exactly how fast the hull would move or turn became more important than simulating gear shifts.**

### ANALYSIS

The decision to remove simulation scripts was shaped by prior experience. During the previous project to develop the car chassis, peers were invited for casual plays, and many struggled with gear shifting and unpredictable acceleration, eventually requiring explanation to properly grasp the mechanics. 

This revealed a concerning premise, as casual players encountering such friction would likely abandon the game or assume it was buggy. This directly undermines player reach. Scharkow et al. (2015) identify an “action‑oriented” player cluster that prioritizes quick mastery and tangible rewards. The simplified hull aligns with this cluster, reducing the learning curve to near zero.

With that being said, the chosen control scheme is not without limitations. Players accustomed to analog input (Joystick on a video game console) might prefer dynamic steering, where turn intensity varies with pressure, but a secondary mouse control (providing analog input) was rejected because the turret competes for the same input. 

![Image of turret and hull competing for the same input](/assets/images/bcm215_assets/input-clash.png)

This trade‑off reflects a political economy constraint (Hesmondhalgh 2019): solo development and limited time made a simple, unified control scheme the most feasible path to maintain both accessibility and functionality.

Despite the simplification, the hull successfully signals its genre identity. Feedback from informal showcases consistently identified the vehicle as a tank. It appears that a majority's understanding of “tankness” relies on visual and behavioural cues, such as features like multiple wheels, ability to climb rough terrain, and a large imposing form, rather than accurate differential mechanics. Juul’s (2005) concept of the *half‑real* explains that players accept the game as not real as long as sufficient cues sustain the fictional contract. The hull’s appearance, weighty movement, and track‑based steering logic (even simplified) provide enough signifiers.

What was lost compared to a realistic tank simulator includes advanced maneuvers (such as running one track fully backwards, the other track fully frontwards). However, tank games require the player to act as driver, gunner, and commander simultaneously. Retaining authentic driving mechanics without consideration of cognitive load may risk a dramatic cut in gameplay smoothness when combined with turret operation. By prioritizing predictable, low‑load hull control, the design creates room for the turret to introduce tactical depth later. This aligns with the genre mainstreaming strategy, where reducing complexity in movement broadens accessibility, while potential deeper engagement shifts to combat.

---

# Tank Tracks: The Compromise
> **Supported by devlog #2 (28 Mar 2026)**

### PROCESS SUMMARY

The tank tracks were initially flagged as an unresolved problem in Devlog #1. The original car chassis had four wheels with one raycast each; the tank has ten wheels, and visual tracks would clip on uneven terrain without additional raycasts. Three common approaches were evaluated:

- **Texture scroll:** Simple but incompatible with independent suspension (requires rigid track).

<iframe width="560" height="315" src="https://www.youtube.com/embed/7H43ZZtOQRE?si=_uER8FAC2d37eScU&amp;start=309" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- **Individual segments:** Realistic but resource‑intensive (174 meshes per tank) and potentially requires military modelling accuracy.

[Demontration: An open sourced model](https://devforum.roblox.com/t/open-sourced-simple-tank-track-system/3531568)

- **Mesh deformation:** Balances realism and performance but requires external 3D modelling (Blender), reducing modularity.

<blockquote class="reddit-embed-bq" style="height:500px" data-embed-height="521">
<a href="https://www.reddit.com/r/roblox/comments/n85we1/made_tank_tracks_using_mesh_deformation/">Made tank tracks using mesh deformation!</a><br> by
<a href=""></a> in
<a href="https://www.reddit.com/r/roblox/">roblox</a>
</blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>

None of these were adopted. Instead, a custom solution was developed: a script that scans the hull's wheels at runtime, then generates tracks using native Roblox cuboid parts. To minimise instance count, single parts are used between wheels, while only the sections wrapping around wheels are subdivided. The visual result, as noted in the devlog, resembles a "thick rubber band" rather than realistic tank tracks.

<video width="808" height="226" controls>
  <source src="{{ '/assets/images/bcm215_assets/track-in-motion.mp4' | relative_url }}" type="video/mp4">
  A video demonstration of the track in motion
</video>


Time totalled approximately five days spread over a month: 50% research, 40% failed implementation attempts, and 10% successful execution in a single sitting. Failed attempts involved earlier iterations that either introduced game‑breaking bugs or produced visually unacceptable results.

### ANALYSIS

The tracks compromise reflects a classic indie trade‑off. While the final solution is more resource‑intensive than mesh deformation, it is **modular**. If the wheel configuration changes, the track adapts without manual re‑modelling. Under solo development with limited time, prioritizing flexibility and long‑term stability was the most feasible path (Hesmondhalgh 2019).

The trade‑off between realism and feasibility was guided by a principle recorded in Devlog #2, stating that "the solution should aim to convince; perfection comes second." In practice, "convince" means providing enough visual and behavioural cues for players to accept the vehicle as a tank. Personal observations during playtesting indicate that initial focus is on appearance (multiple wheels, a large hull, perceived ability to traverse rough terrain). However, once upon entry, the attention quickly shifts to the feel of powerful movement and the satisfaction of control. This reveals a critical finding that **genre signifiers matter primarily for the initial hook; retention depends on the gameplay experience itself.**

This insight led to a broader realization about genre mainstreaming. The "thick rubber band" look, a departure from military realism, actually opens up opportunity for alternative theming. A tank game could be re‑skinned as science fiction, magical fantasy, or remote‑controlled (RC) vehicles without losing mechanical coherence. Just as Rocket League combined cars and football to attract players who were neither car enthusiasts nor football fans, a tank chassis with simplified tracks can appeal to audiences beyond military simulation enthusiasts.

---

# The Turret: Note on Scope

Unfortunately, at the time of writing, the turret remained under development. The analysis focuses on the completed hull and tracks.

---

# Cognitive Load, Genre Identity & Tactical Depth

### Cognitive Load

Cognitive load was managed differently across the hull and tracks. 
- **The hull** was deliberately simplified: simulation scripts were removed, static values replaced complex physics, and the Offset steering variable allowed intuitive WASD control. The result is a vehicle that requires near-zero learning time.
- **The tracks** on the other hand, being purely visual, add no additional mental effort for the player. What matters for cognitive load is not the realism of execution but the presence of expected genre signifiers. A tank without visible tracks risks being mistaken for an Armoured Personnel Carrier (APC).
Thus, the bare minimum requirement for an indie game to retain genre identity is to ensure the prominent signifier is present at all, not how realistically they are rendered. For example, a football in a football game, or a construction site in a city builder.

### Genre Identity

Genre identity emerged as a negotiated outcome of visual and behavioural cues. The hull's "weighty" movement, multiple wheels, and ability to climb rough terrain signal "tank" to most players, who lack detailed knowledge of tank mechanics. The tracks, even in their simplified "thick rubber band" form, complete this identity by providing the expected visual signifier. Interestingly, the compromise away from military realism opened up an unexpected advantage, which is a near-infinite room for flexibility. 

As a result, the artefact can be re‑skinned as science fiction, fantasy, or remote‑controlled vehicles without losing mechanical coherence. This aligns with the observation that initial hook relies on appearance, but long‑term engagement depends on gameplay feel rather than strict authenticity.

### Tactical Depth

Tactical depth did not end up as the primary goal of this tank project. The completed components eventually steered to prioritize predictable and satisfying movement, over strategic complexity. The satisfaction derived from driving, which included actions like "brute forcing" ramps and hills, suggests a different form of engagement. 

Research on online game motivations identifies achievement and escapism as key drivers of player stickiness, with dominance influencing emotional arousal and pleasure (Chang et al. 2025). The prototype's appeal may therefore lie less in tactical decision, but more in providing a space for dominance, control, and sensory satisfaction.

---

# Conclusion

When there are technical constraints, it forces unorthodox thinking. Subsequently, as indie developers comes up with compromising creative solutions, players from multiple niches may be attracted.

As a conclusion, to answer the research question from the start:
> How much quirks achieves ideal results? When does it become counter-intuitive?

- Quirks can successfully broaden appeal and achieve ideal results as long as the developers preserve the minimal genre signifiers that let players recognise the game as a specific "something" (e.g., a tank must look like a tank at least, regardless of twists).
- They become counter‑intuitive when the most foundational signifiers were erased entirely, resulting in genre confusion, potentially risking "poorly crafted" claims (e.g., a tank without tracks might be ridiculed for looking like an APC).

---

## References

- Chang, HH, Lin, YH, Lu, YY & Lee, CL 2025, ‘Exploring user motivations to proactive stickiness through pleasure-arousal-dominance model towards online games’, *Information Technology and Management*, vol. 26, no. 4, pp. 483–507.
- Costikyan, G 2013, *Uncertainty in Games*, MIT Press, Cambridge.
- Hesmondhalgh, D 2019, *The Cultural Industries*, 4th edn, SAGE, London.
- Juul, J 2005, *Half‑Real: Video Games Between Real Rules and Fictional Worlds*, MIT Press, Cambridge.
- Lazzaro, N 2004, ‘Why We Play Games: Four Keys to More Emotion Without Story’, paper presented at the Game Developers Conference, San Jose.
- Rapp, A 2018, 'Autoethnography in Human-Computer Interaction: Theory and Practice', in S Filimowicz & V Tzankova (eds), *New Directions in Third Wave Human-Computer Interaction: Volume 2 - Methodologies*, Springer, Cham, pp. 25–42.
- Scharkow, M, Festl, R, Vogelgesang, J & Quandt, T 2015, ‘Beyond the “Core‑Gamer”: Genre Preferences and Gratifications in Computer Games’, *Computers in Human Behavior*, vol. 44, pp. 293–298.
