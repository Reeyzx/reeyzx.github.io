---
layout: post
title: "BCM 302 - Project Release"
date: 2026-07-27
categories: "bcm302"
---

![Bear Witness Logo](/assets/images/bcm302_assets/bear-witness-logo.jpeg)
[The Final DA can be accessed here](https://mega.nz/folder/vGIHXbTB#rWFoJLaA00wdMXsNJXf1kw)

# BCM302 Final Contextual Essay

## Part 1: The Project’s Trajectory

### Introduction: Theme of Overconsumption
Today, the act of purchasing commodities is only a finger’s distance away. In pursuit of revenue gains, markets increasingly engineer **artificial scarcity** and use the psychological manipulation of **“fear of missing out” (FOMO)**. This is clearly visible in the explosive popularity of blind-box ecosystems, such as PopMart’s Labubu, where trend cycles and limited releases drive consumers to purchase far beyond their original intent **(Wang & Hancock, 2024; The Standard, 2026)**.

While overconsumption is often framed as a lack of self-discipline or an individual problem, it is in fact a documented **psychological phenomenon** that spans society as a whole. Recent industry analysis indicates that Gen Z and millennials are disproportionately prone to **“doom spending,”** which refers to using retail therapy as a coping mechanism for economic anxiety despite having lower relative wealth **(McKinsey & Company, 2024)**. Academically, this aligns with findings that compulsive buying frequently functions as a strategy to relieve stress and reduce fear during times of crisis **(Lins et al., 2021)**. The visible impact of this phenomenon can be seen across global markets, ranging from fast fashion to collectible merchandise, such as the scalping crises surrounding limited-edition Pokémon cards **(IGN, 2024)**.

As we recognize overconsumption as a highly visible social issue, our group identified a clear opportunity for a digital artefact with genuine **social utility**. We aim to help young adults recognize these manipulation tactics without feeling shamed for their interests.

### Conceptualizing the Deliverable: Bear Witness
Our target demographic (18–25) actively rejects top-down, preachy messaging about their consumption habits **(Francis & Hoefel, 2018)**. It is acknowledged that this reality dictated two foundational design decisions for *Bear Witness*:

First, the deliverable needed to be **hands-on rather than lecture-like**. To tailor this demand, we chose the visual novel format (built in Ren’Py) and incorporated interactive mechanics, like a gacha simulation. This provides tactile feedback that mirrors the nature of impulsive spending, grounding the project in direct experience and aligning with established principles of **intuitive user design (Norman, 2013)**.

Second, we had to manage the player’s psychological identification. If we cast the player as a consumer or corporate boss, they would immediately trigger defensiveness, prompting them to dismiss the character as "flawed" and avoid self-reflection. To bypass this, the player assumes the role of a discarded teddy bear. This removes implicit blame from the player, forcing them to observe the cycle of consumer waste from the perspective of a commodity.

The visual novel also specifically deployed **memetic framing** within the dialogue to validate the satire through shared cultural knowledge **(Hart, 2023)**. For example, the narrative references the viral "$600 Furina incident," a well-known gacha community meme about an engagement being called off after a partner was caught stealing credit card funds to upgrade a game character. Additionally, *Bear Witness*’s logo is indirectly influenced by a recent viral meme where internet personality IShowSpeed tries not to laugh by holding a grin with his eyes closed, signaling the lighthearted nature of the story. By embedding community-specific jokes, we utilize the audience’s own casual knowledge to critique a social problem without ever sounding like a lecture.

![Furina](/assets/images/bcm302_assets/600.png)

### Peer Review I: First Feedback Loop
Following our Week 4 project pitch, we engaged in our first **consultative feedback loop** with our peers. The response to the core concept was highly positive. Reviewers consistently praised the originality of the "unwanted teddy bear" perspective, noting that the darkly humorous tone made the heavy subject of overconsumption digestible and engaging for the target age group.

However, the peer reviews also revealed a **critical methodological paradox**: by introducing a "gacha simulation" mechanic, the story risked contradicting the project’s anti-overconsumption message. The mechanic might inadvertently feel like a fun, rewarding gameplay loop rather than a critique. Furthermore, peers advised us to establish a more concrete, documented feedback strategy with actual playtesters to ensure the educational message was not lost in the gameplay. These two pieces of feedback served as the pivot for our primary development iterations.

### Project Beta: Scope Tightening & Preview
Guided by the **FIST (Fast, Inexpensive, Simple, Tiny) design principles**, we identified the following realities:
*   **Fast:** The character sprites are hand-drawn rather than AI-generated. Human labor requires time. *(To be addressed)*
*   **Inexpensive:** Ren’Py is a free, open-source visual novel engine. All character art sprites are created by our team who do not bargain for pay. Total development budget is $0 (excluding electricity). *(Feasible)*
*   **Simple:** It is a traditional visual novel, and the moral of the story can be explained in one sentence. *(Feasible)*
*   **Tiny:** The exact branching and progression of the visual novel was initially unclear, posing a **scope creep risk**. *(To be addressed)*

Informed by the **OODA Loop (Observe, Orient, Decide, Act) (Boyd, 1987)**, we made a swift decision to apply two major iterations for our Project Beta, addressing both the peer review observations and the FIST principles.

To handle the scope creep concern, we first drew a hard narrative boundary. Originally, we planned to introduce major narrative route splits early in the prologue. However, after recognizing the workload demands and the need for a stable, testable build, we pivoted to a lighter **"attribute system."** Players now make initial choices (e.g., scrambling through the bin, calling for help) that reflect traits like curiosity or impulsiveness. These choices do not immediately fracture the narrative into drastic deviations, but they help curate the bear’s identity, with variables designed to influence consequences in later, unreleased chapters. This decision maintained player agency while adhering to FIST principles, preventing the prologue from becoming bloated and adhering to the **"simplicity cycle" of removing unnecessary complexity (Ward, 2015)**.

We then directly addressed the "gacha paradox" identified in Peer Review I. To curb the risk of the gacha scene being interpreted as encouraging, we added the context of an arguing couple into the scene. This reframed the expectation of potential wins into harm prevention, resulting in a high-stakes, critical atmosphere.

### Peer Review II and Final Output
During the Week 9 Peer Review II, these iterations were validated. Reviewers explicitly praised the scope tightening as a **"smart, pragmatic call"** that maintained narrative cohesion without overcomplicating development. The revised gacha scene was highlighted as a success, with peers noting that the uncomfortable tone effectively shipped the critical message we wanted to convey.

However, reviewers also noted that the static nature of the placeholder art in the Beta made it difficult to emotionally resonate with the characters. In response, our final iterations focused on **visual and micro-interaction polish**. We unified the sizing of all character art sprites to ensure long-term visual consistency. To bridge the emotional gap, we created multiple expressive sprite variations for key scenarios, allowing the characters' reactions to dynamically reflect the player’s attribute choices. Certain scenes were also tweaked to involve subtle micro-interactions, such as the gacha machine violently shaking upon a failed pull, to enhance the tactile, stressful feedback loop we aimed to create.

![multiple sprites](/assets/images/bcm302_assets/character-sprite.png)

This concludes the complete timeline of *Bear Witness*’s development trajectory throughout the semester, which thoroughly represents the group’s collective output. However, this broader timeline only captures the project’s observable macro-result. To address this, the following section details specific **key learning moments** from my account behind the scenes, discussing my rationale and how it shaped the individual methodologies that executed the project.

---

## Part 2: Key Learning Moments Throughout Development Process

### The Art of Assigning Roles
Prior to this semester, I had participated in plenty of academic and personal group projects. However, in most of my previous experiences, my peers had skill sets that were identical or comparable to mine. In those scenarios, the **cognitive load** was lower because we could view a coherent project as a piece of pie and divide it into manageable portions. 

The nature of the project in BCM302 is different because the final deliverable is not just the "game" alone, but a task spanning multiple fields. For example, making a game for players is entirely different from making a presentation video for stakeholders; the former is conducted in VSCode, while the latter may be conducted in Adobe Premiere Pro. Yet, it is a necessity for our group to master both aspects. If either product comes across to our audience as "sloppy," their impression of our group immediately falters, and lost confidence is not easily recovered. This is inspired by **John Gottman’s "Magic Ratio,"** which established that it takes 5 positive interactions to offset 1 negative interaction to maintain stability in team dynamics **(Gottman & Levenson, 2000)**. This principle directly applies to building the bridge of trust between our group and our audience.

Therefore, I concluded that the project workload should not be distributed evenly, but rather by assigning tasks to whoever can meaningfully execute them to their highest capability. The streamer should naturally handle voice-covering, while the artist should draw character sprites. Assigning the wrong person to the wrong task would stall the quality of the project. While this inevitably implies that some members will work considerably more than others (as workload across different aspects is inherently uneven), I learned that this is not a meaningful metric to gauge who "deserves" more or less, because the collective output dictates a singular impression of the group.

While this may seem like a "no-brainer" tactic, it is not something every group is willing to accept, because humans naturally value the concept of **"fairness"** and exhibit strong **inequity aversion (Fehr & Schmidt, 1999)**. I learned that cooperation is easier said than done, and it is a valuable asset when it presents itself, because any member could derail group harmony when they perceive a sense of injustice. Hence, I am thankful for the cooperation of my groupmates. After I conveyed my intention regarding role distribution, everyone agreed to take up the portion that belonged to their natural talent or expertise, and no clashes occurred.

### What My Role Did
Our group split work between "frontend" (development of the presentation) and "backend" (development of the visual novel). I was in charge of the backend, specifically constructing the visual novel via the game engine after receiving character sprites from the artist (Riber). My role was straightforward: the artist provided the assets I needed to use (and could only use, due to copyright considerations), so the iteration process was largely mechanical.

A worthy lesson was less about how I strategized inputting code correctly, and more about **how I timed my work to coordinate with others**. I interpret our group dynamic as a **supply chain**:
1. Artist draws assets.
2. Developer inputs character sprites (my duty).
3. Video editor creates a documentary video.
4. Voice actor provides commentary for the video.

In reality, there was only one week of flexible time for development, despite having a time gap of roughly one month between the Pitch and Beta, as well as Beta and Release. To ensure I had sufficient time for the video editor and voice actor to complete their parts, we agreed on **rigid deadlines**. If one person failed to completely deliver their work on time, we would trim it out and adjust the game or the presentation accordingly. 

### Conclusion
Ultimately, developing *Bear Witness* taught me that backend development is less about mechanical execution and more about **supply chain management**. While theoretical frameworks like FIST and the OODA Loop provided a roadmap, the *de facto* reality of development required enforcing rigid deadlines and protecting the team's collective output from the natural friction of unequal workloads. I learned that a digital artefact’s social utility is only as strong as the team's ability to pragmatically navigate these constraints. By aligning tasks with individual expertise rather than forcing artificial equality, we transformed a high-risk, multi-disciplinary project into a cohesive final product. This experience solidified my understanding that successful project development relies not just on conceptual brilliance, but on the disciplined, behind-the-scenes orchestration of human and technical resources.

---

## Part 3: Citations

Boyd, J. (1987). *A discourse on winning and losing*. Unpublished briefing, Air University Library, Maxwell Air Force Base, Alabama.

Fehr, E., & Schmidt, K. M. (1999). A theory of fairness, competition, and cooperation. *The Quarterly Journal of Economics, 114*(3), 817–868. https://doi.org/10.1162/003355399556151

Francis, T., & Hoefel, F. (2018, November 13). 'True Gen': Generation Z and its implications for companies. *McKinsey & Company*. https://www.mckinsey.com/industries/consumer-packaged-goods/our-insights/true-gen-generation-z-and-its-implications-for-companies

Gottman, J. M., & Levenson, R. W. (2000). The timing of divorce: Predicting when a couple will divorce over a 14-year period. *Journal of Marriage and Family, 62*(3), 737–745. https://doi.org/10.1111/j.1741-3737.2000.00737.x

Hart, C. (2023). Frames, framing and framing effects in cognitive CDA. *Discourse Studies, 25*(2), 247–258. https://doi.org/10.1177/14614456231155071

IGN Staff. (2024). Nintendo president asked to address Pokémon card shortages and scalping that are leaving young fans unable to play. *IGN*. https://www.ign.com/articles/nintendo-president-says-the-pokemon-company-will-take-measures-to-respond-to-widespread-card-scalping-issues

Lins, S., Koch, R., Aquino, S., Costa, I. M., & Melo, C. F. (2021). Mental health: Would excessive buying be a crisis coping strategy? *Psychiatry Research, 303*, 114113. https://doi.org/10.1016/j.psychres.2021.114113

McKinsey & Company. (2024, December 17). Urge to splurge: Why is Gen Z ‘doom spending’? *McKinsey & Company*. https://www.mckinsey.com/~/media/mckinsey/email/genz/2024/12/2024-12-17b.html

Norman, D. A. (2013). *The design of everyday things* (Revised and expanded edition). Basic Books.

The Standard. (2026). Pop Mart’s stock price rises six percent on World Cup edition LABUBU launch. *The Standard*. https://www.thestandard.com.hk/property/article/337435/Pop-Marts-stock-price-rises-six-percent-on-World-Cup-edition-LABUBU-launch

Wang, F., & Hancock, A. (2024, June 6). Adorable or just weird? How Labubu dolls conquered the world. *BBC News*. https://www.bbc.com/news/articles/cy4ydxlm9n9o

Ward, D. (2015). *The simplicity cycle: A field guide to making things better without making them worse*. HarperBusiness.