---
layout: post
title: "BCM 241 - Sharing Blog 1"
date: 2025-10-26
course: "BCM 241"
---

# Introduction

Raycast vehicle, presenting as my media niche, is one of the major inventions in the game development industry. It is commonly used in arcade racers, stylized driving games, as well as budget indie productions. To thoroughly explain, the functionality of raycast vehicle differs from the traditional physics driven model: Instead of simulating the wheels and springs itself, developers would adapt a technique where "fake wheels" are paired with invisible detection rays that shoot downward to simulate suspension physics mathematically. 

Yet, the same technique appears obscure within the Roblox platform, and relevant discussions/tutorials regarding this topic is rather scarce. Hence, when I initially discovered Dabidar's "First Ever Raycasting Vehicle Physics in Roblox" video on Youtube, I felt compelled to start an ethnographic investigation over this niche topic.

https://www.youtube.com/watch?v=ko3gzy4cocM


**My research initially covers the following interconnected sites:**

Resources & Learning Materials:
- Community Assets (Roblox Studio open-sourced models, Roblox DevForum modules)
- Tutorial Videos (YouTube content creators, including Dabidar)
- Existing Products (Roblox games implementing raycast systems, including Jailbreak)

Social Networks:
- Discord servers: Primary site for player & developer discussion
- Reddit communities: r/robloxgamedev and r/RobloxDevelopers
- Roblox Developer Hub: Official documentation and forums

Key Stakeholders:
- Experienced developers who've implemented raycast systems
- Novice developers seeking accessible vehicle solutions
- Players who experience raycast vehicles

---

# My Personal Bias & The Causes

I identify as a "second-generation" Roblox developer from the late 2010s era, with a primary background in worldbuilding and 3D design. I have only picked up programming after recent AI advancements made the entry gateway easily accessible. I am also drawn to studying sophisticated systems that serves my niche interests. An example involved me researching on Western Pacific meterology, with a sole intent to develop a procedural in-game weather generation system for a fictional open-world setting near Vanuatu region. 

The way I pick up on new skills heavily relies on self-teach and AI assistance. This mode of learning involves a lot of pattern recognition rather than formal education & training. As a result, I may naturally approach problem solving with a tunnel vision. Yet, I believe high reliance on self-motivation to learn may give me higher spontaenity when it comes to discovering things.

My social history also shapes my perspective significantly. From teenage years up until now, my network consists almost entirely of fellow Roblox developers and fans of my own creations. Though not necessarily in worldview, but in specific cases like this current ethnographic study on raycast vehicle, I have an easy access to relevant responses, but also potentially prone to exchanging technical knowledge from an echo chamber. 

---

# Online Persona

My ethnographic work follows the principles as finalized in my "Media Research Ethics Charter" document. I intend to be respectful, transparent, as well as valuing authenticy. This is achieved by ensuring my research targets are participating with genuine interest and consent.

Throughout this investigation, I navigated the complex position of being a researcher, developer, and participant in the community simultaneously. In Discord discussions, I presented myself as a developer investigating raycast vehicles for an academic project that also double as a community project in the long run. When engaging with community members, I openly expressed my research interests and engage in technical conversations when given the opportunity. Regardless of their views, be it positive or negative, I have taken notes from their opinions that reflected their viewpoints while ensuring anonymity and privacy.

---

# Research Data: What I Found (& Didn't Found)

Below is a summary on what information I sourced during the research period:

## Reddit Investigation

I started by ethnographics investigation in subreddits like r/robloxgamedev and r/RobloxDevelopers to look for relevant discussions to participate in. However, over two weeks of searching for raycast vehicle posts using keywords like "raycast", "vehicle physics", and "suspension", I found zero threads addressing this topic. 

Instead, these subreddits are dominated by elementary level posts, such as:
- "GUI looks weird."
- "Script won't work, please fix."
- "Looking for free modeler."

By observation, these posts feature only about 1-2 comments, and the original poster rarely engages with the response. The absence of raycast vehicle discussions marked a shift of research focus to alternate platform, and also became my first major finding.

## Discord Conversations

After finding out Reddit's knowledge vacuum, I shifted focus to Discord servers and group chats where active developers and casual players are available for personal sharing. Through notes documented from the conversations initiated (as a matter of respecting privacy), I identified some critical patterns that would become another major finding:

**Player perspectives revealed:**

- Players cannot distinguish raycast from physics-based vehicles during gameplay. Surprisingly, they have clear and striking memory of the "feel" and responsiveness of the vehicles in each Roblox car games that they have played, and is able to judge them.

- Preferences cluster around "arcade fun with realistic details". Cravings that signals technical sophistication but low entry barrier.

**Developer discussions exposed:**

- Experienced programmer (5+ years) struggled to articulate why raycast vehicles offer advantages aside from vague statements like "raycast is more efficient, I've tested"

- Other developers gave remarks like "what works, works". This suggested a mentality that they do not bother with the approach used to code the car, as long as the audience (in this case the players) provides positive feedback. 

---

# Key Epiphanies

## Epiphany #1: Reddit's Knowledge Vacuum

**What I expected:**
Based on my experience with Roblox development and previous occasional encounters with mainstream game dev forums dropped into my feed, I assumed r/robloxgamedev and r/RobloxDevelopers would host active communities of productive spaces where developers engage in knowledge exchange, mentoring newcomers, and share or refine techniques in a collective way.

**What I discovered:**
These subreddits are almost entirely populated by novice developers posting basic level help requests, and it's also unfortunate that most of these posts fail to receive any helpful answers. The absence of raycast vehicle posts wasn't exceptional, I also failed to notice any intermidate to higher level topics for discussion. Experienced developers aren't present to facilitate learning, and the community remains perpetually at beginner level, which greatly challenged my assumptions.

**Why this challenged my assumptions:**
I projected my expectations from my personal networks onto public platforms. The reason being that my social circle includes developers who actively engage with complex problems, which caused me to assume this represented broader community patterns, instead of recognizing it as the exception. Admittedly, the discovery made me acknowledge my limited network exposure.

**Academic Discoveries:**
Kitto et al. (2025) identified three essential elements for functioning communities of practice: mutual engagement, joint enterprise, and collection of shared knowledge. Alas, it appears that Reddit's Roblox communities lack all three. Without what Kitto et al. called "innovation recipients" (the term describing experienced members taking up mentorship roles), these spaces struggles to progress beyond basic level help-seeking, let alone diving into the topic of raycast vehicle.

## Epiphany #2: Experienced Developers Lack Raycast Vehicle Understanding

**What I expected:**
I assumed developers (especially programmers) who successfully implement advanced systems like player data compression and in-game building mechanics, must be able to weigh the pros and cons regarding raycast vehicle versus physical vehicle, and give me valuable guidance based on their existing knowledge on program optimization.

**What I discovered:**
Even developers with years of experience struggled to explain why raycast vehicles differ from physics-based approaches or what specific advantages they provide. Implementations succeeded through trial-and-error and by reusing modules, rather than proper understanding. They know how to make systems work without necessarily knowing why they work, or when to apply them appropriately.

Ironically, this discovery felt oddly relatable, because I recognized the same pattern in my own AI-assisted programming work. I have built sophisticated procedural weather simulation system while lacking theoretical foundations. This research revealed that even the "experts" recognized by the community may be operating with procedural knowledge in certain fields.

**Academic Discoveries:**
Sheahan et al. (2021) explain that **tacit knowledge** refers to understanding gained via personal experience, instead of traditionally taught knowledge. The research suggested that tacit knowledge exists beyond things that can be readily communicated. Building on top of Polanyi's (1966) concept that "we know more than we can tell," Sheahan et al. revealed that people often develop competence through repeated encounters with situations, rather than theoretical study. This appear to explain my observation where experienced developers have acquired relevant skills to talk about the suface of raycast vehicle, yet not enough to freely express sophisticated concepts over said topic.



---

# Reference List

Kitto, S., Fantaye, A. W., Ghidinelli, M., Clarkin, C., Cheung, W. J., Dath, D., & Chan, T. (2025). Barriers and facilitators to the cultivation of communities of practice for faculty development in medical education: A scoping review. Medical Teacher, 47(10), 1464-1477. https://doi.org/10.1080/0142159X.2025.2495628

Sheahan, J., Davies, H., & Hjorth, L. (2021). The art of tacit learning in serious location-based games. Frontiers in Education, 6, Article 686633. https://doi.org/10.3389/feduc.2021.686633

