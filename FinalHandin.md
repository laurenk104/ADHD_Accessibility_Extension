# ADHD Accessibility Extension: Final Handin

Group: Taryn, Kalvin, Lauren, and Emmy

## Introduction

**TBD**

We are addressing a significant issue: many existing tools for people with ADHD are expensive or scattered across various platforms. Users often find themselves juggling multiple apps—one for timers, another for text-to-speech, and yet another for text scanning. Our goal is to create a single platform that offers all these helpful tools for free, making them easy to access and use.

This is important for three different reasons: centering user needs, aligning with disability justice, and broader impact. We center user needs guided by first-person accounts and personal experiences. This makes sure that the tools developed are relevant and benefit people with ADHD. It’s common for technology aimed at disabled people to merely be a disability dongle and not actually help. It’s important to center user needs and avoid disability dongles.

From what other people have said about the ADHD app after using it. They can be difficult to use because they are too expensive or have problems. One example is the app Speechify. It makes features like, 
We can align with the principles of disability justice. We aim to apply these by making tools widely accessible, respecting diverse needs and addressing barriers present in online spaces. 
We impact the broader disabled community because these tools are useful to everyone- not just people with ADHD. Time management aids and text to speech tools can benefit other neurodiverse people or disabilities.

## Positive Disability Principals

This project aimed to take existing tools that can be used to support disabled people and make them more accessible by removing paywalls and providing additional features for people with ADHD and learning disabilities.

This project is not ableist, but instead acknowledges our differences and aims to make life easier for people with disabilities. It provides tools for people with ADHD to aid information processing and learning. One thing to keep in mind is that individuals with ADHD are perfectly intelligent and capable of processing information. However, there are also individuals who find these tools help to overcome issues with extended focus and executive dysfunction. Sometimes, having a reading in the background while cleaning, cooking, gaming, etc. can help improve comprehension for students with ADHD.

This can help to further disabled agency and control by empowering them to learn in their own way and at their own pace. It’s common for people with ADHD to suffer academically. ADHD is an executive function disorder and can cause issues planning, initiating tasks, organizing, and memorizing subjects. This can lead to lower engagement levels and decreased motivation. Studies have shown that self-efficacy and relational support can have increased positive outcomes in students with ADHD compared to their non-ADHD peers. We aim to fulfill these needs by giving ADHD students a tool to improve their reading and comprehension skills. This application won’t directly benefit relational support but improved self-efficacy can do so on its own. When students don’t feel like their peers are leaving them behind and instead feel engaged with the class, it’s easier to build connections.

We aimed to include guidance from people with ADHD in the various stages of our design process. Our initial design was driven by a mixture of first hand accounts and first hand experience via some of our group members. As our design progressed, we opted to include and exclude certain features based on the input of our members with ADHD and external sources (i.e. friends, siblings, etc.). This is why we prioritized the text to speech and text scanning features and planned to implement a timer utilizing the pomodoro method. Ultimately, our project aims to center the perspective of people with ADHD and to give them the tools to learn.

## Methodology and Results

We designed an ADHD accessibility extension which would have a text-to-speech tool, a text scanning tool, remove distractions (like advertisements), and other tools that can help focus and executive function. We wanted to implement a scoreboard and pomodoro timer to improve focus and motivation but were unable to do so in the scope of this project. The removal of distractions was also cut from the final product.
The extension was built using HTML, CSS, and JavaScript, leveraging the standard technologies for browser extension development. Our team used existing APIs such as Amazon Polly for text-to-speech functionality and Amazon Textract for extracting text from documents or images. Both tools offer free usage tiers suitable for our project’s limited scope.

We had difficulty during the initial design process coordinating different roles and responsibilities. Ultimately, our developers pulled together a relatively simple interface for the main piece of the application. This includes a green pop up that highlights text in the page and reads it aloud. The forward/backward buttons allow the user to skip paragraphs. You would be able to click on the logo to see a more detailed popup including settings, where you could select the voice and speed. We would like to add the ability to change the language here in the future. You can skip to a certain section in the page by highlighting it and selecting ‘Read aloud’. 

![A screenshot of the webpage and syllabus for CSE493e (accessibility). In the upper right corner is a bright green popup with a reverse, play, and fast forward symbol. Above that, in the extensions bar, is a small green logo of a brain. On the main page, the text "Why take this class?" is highlighted.](ADHD.jpg)
*Alt Text: A screenshot of the webpage and syllabus for CSE493e (accessibility). In the upper right corner is a bright green popup with a reverse, play, and fast forward symbol. Above that, in the extensions bar, is a small green logo of a brain. On the main page, the text "Why take this class?" is highlighted.*

We did an initial implementation for text scanning of pdf documents. Our goal was to have this feature be able to process both text based pdfs and images of text but it was not completely implemented. Ultimately, this feature would have been very helpful. Oftentimes, teachers will provide pdfs of readings or articles that aren’t publicly available, which is helpful, but isn’t accessible via screen readers or text to speech.

We also made some initial design plans for an optional timer page, scoreboard, and ad-removal. The timer would have been based on the pomodoro method. This is a time management method that breaks down work into focused intervals. You work for 25 min, take a 5 min break, repeat 3-4 times, then take a 15-30 minute break. Our member with ADHD has found this to be useful when they are struggling with starting and staying focused on tasks. Optimally, this timer could be hidden or shown and the specific intervals would be available for adjustment. 

This project ended up being more focused on the design and ideation process of development rather than the implementation aspect. This is due to multiple members of our team lacking experience with development and the overall short project timeline. Ultimately, it was a good exercise for thinking about the experiences involved with reading and learning for students with ADHD and about how accessibility tools can benefit the wider community.

## Disability Justice Analysis

### Leadership of the Most Impacted

Sins Invalid’s second principle believes that we should uplift the voices and highlight the experiences of those who are most impacted by the systems that need change. In this case the system is the hostile and inaccessible nature of the internet (as well as the ableist decisions made by the people that create it). Our technology aims to address this principal by improving the experience for users with ADHD. This uplifts some of the voices most impacted, but it is still a small portion of those who face accessibility needs online. Additionally, our technology will not address the core root of this problem: people design websites without accessibility in mind. Rather our solution, being an extension, is a bandaid for the real problem. We could better embody this principle by accommodating for more disabilities or doing research with people with ADHD to better understand what is needed, but those are both out of scope for this project. We believe that making a large impact on a relatively smaller portion of people will be more beneficial than a project that is spread too thin.

### Commitment to Cross-Disability Solidarity

The seventh principle challenges the divide between how disabilities are categorized (physical, invisible, mental illness, etc) and assures that we all experience ableism and have valuable insights. Our technology breaks down this divide by being something that can help those with other disabilities. While the intended audience is those with ADHD, executive dysfunction and time blindness are features that people with various types of disabilities manage with, and our product could be beneficial to those people as well. Our technology fails to embody this principle in regard to encouraging participation from other community members. As mentioned in the second principle, we are trying to prioritize perspectives of those with ADHD, but we recognize that this leaves out insight that could improve our technology and benefit more people. We could better embody this principle by blurring the line between ADHD and other neurodiversities, but, again, we think a narrow scope would be best for this project.

### Collective Access

The ninth principle demonstrates that we all require different access needs for different situations and there is nothing shameful about that. Specifically, this principle emphasizes that people should be able request access needs and the act of doing so while being respected uplifts all of us. Our technology embodies this principle by being free. Though products similar to ours exist, they are paid services which makes the service inaccessible to those who cannot afford it. By being an extension it is also very simple to request this access need. We have yet to implement it, but browser support could be a complication that would result in failing to embody this principle. Whether it is for privacy, comfort, or preference, we cannot expect users to change browsers in order to access our technology; that requires too many compromises on the part of the user. We can best ensure we embody this principle by making our tool as easy to access for anyone who might find it useful.

## Learnings and future work 

**TBD**
