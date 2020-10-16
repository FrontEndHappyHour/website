// Episode 77 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of front end happy hour podcast, We are often asked what makes a senior software engineer and really it's not an easy thing to answer. There are a lot of interesting thoughts and responses. I actually recently tweeted this and really realize that there's not one clear answer. So I thought, hey, why, why not talk about this on an episode? So in this episode, we are joined by Lauren Tan to help us discuss our thoughts and make sure we kind of trying to find what a senior software engineer is, but we'll see what happens. Lauren, do you want to give us a brief introduction of who you are, what you do and what your favorite happy hour beverages?

</p>
<p><strong>Lauren Tan</strong><br />
Hi, my name is Lauren. I am an engineering manager at Netflix and I was previously on another episode of front end happy hour about type systems. I'd have to say my favorite beverage for happy hour is ciders. I'm a big fan of all sorts of different ciders. But my favorite is kopparberg.

</p>
<p><strong>Ryan Burgess</strong><br />
Right? Is anybody? Yes. I mean, I know. And I feel like this is a missed because you told us this last time, and I did not have one here for you today. So I okay, that just means you have to come back to another episode.

</p>
<p><strong>Lauren Tan</strong><br />
I'm pretty happy.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. Thanks for having a good. Let's go around and give introduction of today's panelists. Jem, you want to start it off? Jem young senior software engineer at Netflix, Ryan anklam Software Engineer over here at Netflix. And I'm Ryan Burgess. I'm a software engineering manager at Netflix. And Jem actually, you have a buddy with you today, too.

</p>
<p><strong>Lauren Tan</strong><br />
I do this actually Lauren's dog, so I'll let her introduce her. My dog's name is Zelda. She's a three year old Chihuahua and Pomeranian and cheese very happily sitting on Jem's lap right now.

</p>
<p><strong>Jem Young</strong><br />
I'm so happy right now.

</p>
<p><strong>Ryan Burgess</strong><br />
You made jumps. 

</p>
<p><strong>Lauren Tan</strong><br />
Do you have a perfect t shirt?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, you were wearing a dog T. shirt. Yeah. All right, and each episode the front end happier podcast. We like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is learn? All right. If any of us say learn or learning, we will all take a drink. Right? Let's like jump right in, in your opinion, because like, honestly, I don't think anyone can define this. What do you think it means to be a senior engineer? What's what do you stand out as being a senior software engineer versus just being an IT software engineer? I think the point I want to make first about being a senior software engineer I think it has nothing to do with tenure and how long you've been an engineer. I think there's a lot of other qualities that make up a software senior software engineer. And just how long you've been programming is not one of them. I think that's so true. I think we should touch on that as I do not believe years of experience, define it. I think it's too hard because at what point is someone hitting that senior software engineer? Is it at five years? Or is it a couple years? The only thing that I could maybe define is, I think, maybe years of experience, like maybe there's not a true number, but someone with no experience, probably not going to be a senior software engineer.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, I kind of agree. I think latching on to the years of experience or tenure is a very slippery slope, because then who gets to decide, like, you know, isn't exactly five years before you're a senior engineer. But I think my perspective and I realized there are so many different perspectives on what marks a senior engineer. But if I were to like summarize it into one value, I would for me be like leadership. And I say leadership. Firstly, to highlight the difference between the leader and a manager. Like a manager is a role but a leader is like a skill or about like an intrinsic value that you see in someone and you don't have To be a manager to be a leader. But you know, if I hire a senior engineer on my team, I expect them to be a leader in some regard, right? Like, you know, it's was really about that kind of influence extends beyond just their own code, but also in terms of like, how do you level up everybody else on the team?

</p>
<p><strong>Jem Young</strong><br />
That's a great quote, Lauren, there's a difference between manager and leader. I think in every industry, especially software that's lost on people. They're like, Oh, you're a manager. So you like manage people. But that's not the same as like leading a project organizing it like writing documentation, things like that. Like that's leadership. Yeah. And there's a difference. That's an excellent quote, yeah. stealing it. As far as tenure, that's, I think that's something new that came around with web development, or we'll say like the late 90s. So like the rise of the Internet, Rise of non static languages, things like that, which are a bit easier to pick up, I would say, just my opinion, because I've talked to people with the like, and the ACM, the associate for Computing Machinery, like These are like the old school group that's been around since forever that we're, if you're a software engineer, you're probably part of ACM at some point. That's since fallen off. A lot of people don't even know what it is anymore. But I've talked to them before. And they're like, Oh, yeah, senior engineers, about 15 years, like you can't call yourself senior into the 15 years. And that's obviously not true anymore, especially in the modern fast paced development. And the follow up on tenure, like why it's not a good measure, because if someone spent 10 years at one job, they're probably very good at that job. However, they don't have the experience and like, well, randomness and seeing all the things that someone has been at, say three jobs in 10 years or something like that. So you say like, who's more senior in that in that case? So just purely counting years is not a good measurement for being senior? Not?

</p>
<p><strong>Ryan Burgess</strong><br />
No, I completely agree. And I think the word that just kind of came up in all of those descriptions is experience. And I think that to me, is a way of thinking about it's not tenure, it's more experience. What are you bringing to the table. And it's those experiences working at maybe multiple companies or having different experiences and you're bringing different, you're shedding different lights and viewpoints on how to solve or approach a problem. So I think experience is a way of thinking about that versus tenure.

</p>
<p><strong>Jem Young</strong><br />
That's a great, there's a big difference between experience and tenure. There are two very different things.

</p>
<p><strong>Ryan Burgess</strong><br />
I think another one for me that I think always what I even look for when we're hiring is communication, I think is very important. I think being able to speak to communicate with other engineers, as well as stakeholders. But also like I think Jamie had mentioned documentation. So documentation, very important written communication, just really being able to explain what you're doing and like what the approach is bringing other people along for the ride or at least, communicating like what we're doing and how we're approaching it. I think that to me is very, very important. I've often look for communication when I'm interviewing

</p>
<p><strong>Ryan Anklam</strong><br />
And along the lines of communication to I think a senior engineer is really good at articulating really complex concepts in easy ways. And not really getting lost into a lot of the details. They can just spit out, you know, a really tough concept for a room of different engineers of all different experiences, and everyone can understand what they're talking about.

</p>
<p><strong>Jem Young</strong><br />
Totally. That's, I've not called people out, but I see it at conferences, sometimes when there'll be someone giving a talk, and I'll go up later, and I'll overhear them talking to someone a bit less experienced. And they'll be like, Oh, how does this particular technology work? The person's like, oh, blah, blah, blah, and then it just like works and they didn't give a really, if you can't, they didn't give a good explanation. And I always say like, if you can't explain things simply then you don't understand it. Like you can't break it down to explain someone who's not in tech at all. Like explain it to Zelda here. Like if you can't do that, then you don't know you're talking about that's kind of my baseline.

</p>
<p><strong>Lauren Tan</strong><br />
So we I think we talked a lot about like, you know, leadership, communication and like teaching or learning Cheers, time.

took a while. I'm really curious what you all think about. And I know this question is definitely gonna come up is like, what do you think in terms of like technical skill is important for a senior engineer if at all?

</p>
<p><strong>Ryan Burgess</strong><br />
That's a great question, I think, yeah, obviously, we're kind of talking about some of the the skills of communication, like you said, but yeah, there's obviously technical depth. I think that to me, I don't know how you describe technical depth or define that, in a way that to me, for a senior engineers, I want them to have a strong understanding of the technology they're working on, but also bring other maybe other technologies to the table as well. I think sometimes, and we're guilty of this, like, we get stuck on like, say a framework, and we're like I am this is a great framework. And we want to work in that framework, and that's all we want to do. Well, that's not always the best approach for the problem and I think of a senior engineer is they have an understand Of what technology use at the right time is a little bit of that technical depth.

</p>
<p><strong>Ryan Anklam</strong><br />
And I think a good senior engineer also has a larger impact. Meaning, you know, they're not just solving a bug, they're solving the cause of the bug. And the higher level issue is that you know, what led up to what that bug was, or when they're implementing a framework. They're thinking, I'm not employing a framework, but they're implementing, you know, some code or a solution. They're not just thinking, how does it only work for the solution? They're kind of thinking, how can this work for other things that are similar to this solution?

</p>
<p><strong>Lauren Tan</strong><br />
It's almost kind of like that saying, like, you know, if you have a hammer, then everything looks like a nail. So when you say like a senior engineer has not just a hammer, like many tools in their toolbox,

</p>
<p><strong>Ryan Burgess</strong><br />
like that. That's a good way to put it

</p>
<p><strong>Ryan Anklam</strong><br />
really good. It's actually funny. I'm kind of go off on a tangent here. But I've been dealing with Redux sagas lately. And I feel like I have a hammer every problem that I'm thinking about now I'm like, Oh, that's a Redux saga. So maybe I'm not in that senior. Anywhere, maybe I've taken a step back because I feel like I have this hammer now and I want to solve every problem.

</p>
<p><strong>Ryan Burgess</strong><br />
That's a sledge hammer at this point.

</p>
<p><strong>Jem Young</strong><br />
Could we say that being senior as far as tactical depth goes, You should have mastery of like at least one programming language. Would that be fair to say?

</p>
<p><strong>Ryan Burgess</strong><br />
No.

Oh, I mean, yes, I I do agree a little bit. But can you really say that you mastered JavaScript?

</p>
<p><strong>Jem Young</strong><br />
No, like, I will never be a master of JavaScript. There's always something I don't know some edge case. Like I'm always I could go to any interview and it's 5050 if I pass it's not because I'm not talented because like there might be something I just don't know. I've never had the experience to to learn that thing. Cheers. Cheers. However, I would say that it's hard to call yourself senior if you don't have at least one language you understand, like the nuances at least Am I like the best JavaScript person in the world now probably not in this room. However, like I'm pretty good. I can say that. At least JavaScripts feel comfortable in Language and know the ins and outs.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, you're not even in the even then JavaScript community I think about it is like, you're not reliant on a framework.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I, I know at the core of like, how JavaScript works and like things that are happening, like at a much lower level than just simple libraries or frameworks or things like that, which I think is where most people stop, they usually stop at like, I understand how react Angular view, whatever, understand how it works, and they stop there rather than like, okay, what's really going on? I think that's something that separates senior engineers from people just like good coders, and there's nothing wrong with that, too.

</p>
<p><strong>Lauren Tan</strong><br />
And I like this thing. I don't recall who said this before, by I've heard this saying that, you know, you're not a react developer. You're not an Angular developer. You are a JavaScript developer, right? And hopefully, the skills that you're learning cheers, cheers years in those respective frameworks are transferable to different frameworks. Like, you know, on my team, we actually have a lot of people from different backgrounds like Angular, React, Ember, and they've all you know, I managed to learn different aspects of each framework. And that has made them much stronger developers.

</p>
<p><strong>Jem Young</strong><br />
And a throwback to an earlier episode when we did on the value of conferences. That's what conferences are good, it's good. So that like, I can go to react rally and have Lauren explaining types to me, I'm not going to understand them at a deep level like she does. However, as a senior engineer, I have like a good overview of like, Okay, this is a case where maybe we should look at the types. It doesn't mean I'm an expert at them, but it means I have awareness of general the technology in my current language or field, and know that maybe we should investigate this more, this might actually be a solution for what we've been having problems with, or I think that's a really valid point.

</p>
<p><strong>Ryan Anklam</strong><br />
You actually, when I was thinking about this episode, one of the things that kind of popped into my mind was, as I've grown as an engineer, the way I've been more open to new ideas and open to feedback has really changed. You know, I used to get much more defensive or much more siloed in why like this framework and every other framework sucks. And now that I've got a little bit more experience and learned a lot more, cheers, cheers. I'm much more open to new approaches and new things that I don't take feedback personally at all anymore. Unless someone you know, just call me a jerk on pull requests. I think

</p>
<p><strong>Jem Young</strong><br />
I do regularly. I like to people humble here. So I think we said something like this before, but I think it's one of the things we say or Netflix, like, have opinions but not be opinionated. And like, that's, if I sum you up correctly. That that's something I would say like, as a mark of a good scene engineer, like, you understand what you know, you sort of know what you don't know. But like, you're like, Oh, yeah, I think it's this because of this and I've had this experience however, I could be wrong and you're willing to let that go rather than Redux saga is the way to go for everything. And this is the only way and there's no other true way.

</p>
<p><strong>Lauren Tan</strong><br />
I like that point. And but it's kind of like vulnerability, or I think the ability to be wrong or be open to being wrong or are different ideas. I think that's really important. Yeah, especially in the field of Front End development. That's as we know, it's changing very rapidly. So what is the best practice today could become an anti pattern tomorrow,

</p>
<p><strong>Ryan Burgess</strong><br />
you all touched on some things here too, that kind of stood out for me understanding that you don't know everything, or that you can be wrong. But I think also the senior engineer also looks to other engineers to gather those opinions. So you might be biased that Redux saga is is the way to go. But like going to other engineers to share your thoughts and ideas on AI, I think this is the right approach. Here's where it may fall apart. What do you think I think a lot of that is really important to is it's it's not just taking that Redux saga and saying that this is the best solution. I'm so biased towards it, and you can be biased but looking for others who may disagree, and really coming at it to understand other people's perspectives. I think that can be very, very useful.

</p>
<p><strong>Jem Young</strong><br />
Yeah. And that's, that's really tough. And Lauren, you said it earlier, like humility is something that's really important, and I think it's a mark of a good senior engineer, too. Understand what you don't know. And understand. We're like, Hey, I'm not as strong in this area. Hey, Ryan, how long could you could you to help me out in this? Because you know, a little bit more than I do. I think it's important. And I think with the the bro culture that we've had in software engineering for a while, like that has been less common. It's coming back now. But a lot of times people were like, Oh, they didn't want to say, I don't know, like, do you look bad, but I think a good senior engineers, like they're aware of their capabilities that were the shortcomings. And that's you build a team around you of people that can like balance you out?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And I think at the end of the day, doesn't matter how senior you are. You are learning all the time and learning from each other and seeing different approaches. Cheers,

</p>
<p><strong>Lauren Tan</strong><br />
right. Ryan, you you posted this tweet and one of the replies from Rob Oh, Sal, sorry, if I got you're not pronouncing it right. Let me just read out the tweet and see what you all think. So Rob says In my opinion, the junior to mid journey as a gain and knowledge, you learn rules Tech how to the mid to senior journey is again in wisdom. You learn how to ask why when to break rules smartly and how to deliver results even if the solution isn't as fancy. Wow, that got 62 likes seven return. All right,

</p>
<p><strong>Ryan Burgess</strong><br />
cuz that's a pretty damn good description of it well done.

</p>
<p><strong>Ryan Anklam</strong><br />
All right, can we just end the episode now?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, like we just saw that. And well done alarm for pulling that one out of there.

</p>
<p><strong>Jem Young</strong><br />
I think Ryan I swear you said this before on Oji right? You're on a different episode but it's like, the more senior you get the The more you look to remove code actually. Because like the more code there is, the more bugs there are and the more indirection and like essentially, it's like how to do as little as possible and how to be as lazy as possible, and not just solve the immediate problem today think about like, well, this works today but it's gonna be a pain in the butt tomorrow or next week or something like that. That's a good differentiator of senior from junior.

</p>
<p><strong>Ryan Anklam</strong><br />
I don't think I can take credit for saying that. I don't think I've said that on episode but you know,

</p>
<p><strong>Jem Young</strong><br />
You're voting.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I've seen Jem say on stage that you write less code.

</p>
<p><strong>Jem Young</strong><br />
Yeah, hopefully, that's kind of the goal. The end of the day. Ideally, I would delete more code than I did add, while still maintaining functionality like that would be my end goal,

</p>
<p><strong>Lauren Tan</strong><br />
like cold golf, basically.

</p>
<p><strong>Jem Young</strong><br />
No. So while avoiding clever code, I think that someone mentioned that in the in this thread, which is really good. There's a lot of replies to it. If anyone's check it out. That's

</p>
<p><strong>Lauren Tan</strong><br />
a good point, actually, about clever code.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that's actually very likely going on the technical skills, because you're trying to define like, and you know, I said technical depth, but that's a very good way as well is avoiding writing clever code, and thinking strategically, how are you going to read this code six months from now, but how are your colleagues going to read this and thinking about, it could just come down to commenting and being a good citizen of your code base?

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, it kind of reminds me like very early on my career. I definitely remember being very overly excited about things like oh design patterns, like Gang of Four design patterns. I now have to Everything in adaptive. And I like now looking in hindsight, it definitely, I forget got into that territory of like clever code, trying to make the code we to dry way to reusable, even at a point where there was no need for that. Right? And I look at that and I see like, that's like, I've come far from that, but it's still a good reflection. You know, like, I think we've all done that in our house.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, absolutely. Like, right when you said, like, yep, I've done that and probably still make that mistake, even though I'm like, I won't do that. I probably still made that mistake.

</p>
<p><strong>Jem Young</strong><br />
It's funny you mentioned that because, like, I think a good differentiator is like you said maintainability and not not being clever thinking about the next six months the next year, the next two years, and not necessarily jumping on the latest bandwagon. I think a good junior engineer can differentiate hype in substance or hopefully, unfortunately, in front end development, especially there's a ton of hype like a ton of hype and people jump on the bandwagon with Think about the invitation. So they use it. If someone asked me like, hey, Jem, you're gonna use a new react hooks API? And I'd be like, Oh, you mean that one? That's an alpha. That is not released yet? No, I'm not gonna build production code on that. You

</p>
<p><strong>Ryan Burgess</strong><br />
mean, you're not doing that yet.

</p>
<p><strong>Lauren Tan</strong><br />
But I'm going to convert an app to do that.

</p>
<p><strong>Jem Young</strong><br />
I'll try to think of something funny. Like what's a mashup of TypeScript and flow? Wave scripts or something? I'd say senior engineers know the value of testing and where and when to apply it. There's the like TDD, test everything. And that's one design style. If you go that way. I'm not a huge fan of that one, but like, teach their own. But I've also seen people that write tests for everything when I say like, okay, is this is this test actually doing anything? Like, yeah, you added some code, but is it necessary at all? versus there's people that write no tests and don't see the value in that and I think a senior engineer understands when to write test one two like this, we can actually get away with it. That's something we probably don't talk about, too. Often in terms of differentiators, but the best engineers I know, like, know when and where to apply tests, always think of it as like, when to cut corners and when to not cut corners.

</p>
<p><strong>Ryan Burgess</strong><br />
Like, it's okay to cut some corners, but knowing when to invest the time because like, you could spend all day every day making the perfect function. And it's like, Who cares? Like, just get it out the door, like what what value did that add, but then there's times when you want to make sure that it's scaling properly and thinking holistically. I think knowing when to spend the effort and when not to. And that same goes for the test is like, you can write every single line of code as a test. Sure, that's maybe the right thing to do in certain scenarios, but it may not be always the right thing to do.

</p>
<p><strong>Lauren Tan</strong><br />
Hearing gem talk, I sadly was I suddenly recalled this quote from Star Wars like only the sift, sift deal in absolutes, and then I feel like that's so

</p>
<p><strong>Ryan Burgess</strong><br />
my God. So

</p>
<p><strong>Lauren Tan</strong><br />
that's true. Right? It's I think it goes back to that same example, we use the body Like if every, if all you have is a hammer, then everything is a nail. Like, it's what what I'm hearing is, you know, there's a lot of nuance to being a senior engineer. And, you know, it's that understanding that not everything is black and white. Not it's not taking things to the extreme, like, I have to write tests for everything. But knowing like when you shouldn't and when you should do it.

</p>
<p><strong>Ryan Burgess</strong><br />
Something that hasn't come up too much is does a senior engineer have to be a mentor to other engineers? Is that a requirement to being a senior engineer? I don't

</p>
<p><strong>Ryan Anklam</strong><br />
think so. Because at Netflix, we're all considered senior engineers, right? And we don't do a whole lot of mentoring here. So I don't know if we would all any of us would fit that. That bill. I mean, we do help each other out and collaborate a lot. But I don't know if I would consider that mentorship.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I know, I saw that actually, in some responses to the tweet. And I can see how some people would say that and I think it could depend on the company. But I think it doesn't have to be a an official. mentor, you know, you don't have to be more experienced and then be working with a junior engineer to say, Okay, well that's like makes you senior because you're mentoring someone with less experience. But I think at the end of the day, we're all helping and learning from each other. But the cheers be I'm with you, Ryan is I don't know if that necessarily is a requirement. Yeah.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah, I actually, slightly off tangent. I was at a conference called calibrate for it was

</p>
<p><strong>Ryan Burgess</strong><br />
such a good conference, is

</p>
<p><strong>Lauren Tan</strong><br />
it? Yeah, it's a really great conference for new engineering managers. And I recall, I don't recall exactly which talk it was, but there was some brief Someone touched upon this topic about sponsorship versus mentorship, which I think is really interesting. A mentor kind of like advises you and like tells you you know, like the things you want to hear, essentially, but a sponsor really pushes you to succeed gives you the right feedback. And I think that's what we do a lot of Netflix. I think, like we sponsor each other, we don't necessarily mentor each other, but we sponsor For each other in terms of like, creating opportunities, like, you know, for example, if we've hired someone who doesn't have, you know, a ton of experience in react, but you know, they're still solid JavaScript developers, maybe we create opportunities for them by you know, you know, like a new feature. We let them work on that. Right. But I, I feel like that's a one of the things I think Netflix tries to do differently, at least in my experience is like that difference between mentorship and sponsorship. I like that, I'd say

</p>
<p><strong>Jem Young</strong><br />
also, no seems to be a general, whatever you're saying, but I agree. No, you don't have to mentor someone to be a senior engineer. Everybody has their own skill set. Some people like everyone in this room are like great public speakers. And like, that's something that's a skill set for other people or contribute to open source or some people blog, or make tech videos explaining things and like everybody has their own skill set, so I wouldn't, I wouldn't ever say like a senior engineer has to do this. But back to the first point. I see engineer like has to lead at some point like you. I think that's inescapable, whether it be people management, if you want to be like VP of engineering or something like that, or CTO or more tech leadership, like you're gonna have to lead at some point. That doesn't necessarily mean mentor, but you have to be able to convince people of your ideas and then teach them new ideas as well.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think and convince them of your approach to I think that's a good way to like you kind of said, teaching them but also helping get someone invested in your approach.

</p>
<p><strong>Jem Young</strong><br />
I like this touch on a very particular software for me, I hate when I hear from people from other companies like, Hey, I propose this to somebody. And they shot it down because they'd been there longer and no explanation just like a no that doesn't work. Like that may be but if you can't explain that to people again, if you can't explain things simply like here's why your ideas don't doesn't work, then you didn't understand what they're proposing and you don't understand the original problem. Like just to shoot it down because you're more senior than they are is like a really flimsy excuse.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, maybe you didn't do Good job convincing them or sharing like, why that approach was good?

</p>
<p><strong>Jem Young</strong><br />
That kind of happens all the time, though. It's Yeah, it's probably one of the most complained about things I hear about from like more junior devs just like, they just shoot down my ideas really quickly without telling me why and that you're not. No one's gonna learn anything from that. If you're just like, No, I know better than you and just listen to me cuz I'm right.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers. What advice would you give someone who maybe is mid level or junior and is wanting to grow? We talked about some of the things that help define what a senior engineer is, what are some things that you would say, are worth investing their time and efforts into grow more into that senior engineer,

</p>
<p><strong>Jem Young</strong><br />
I'd say start with leading a project. Like it doesn't matter how big or how small like you can say I want to upgrade us to the latest Ts lint rule like document that out share that broadly or something like that, like we said earlier, like leading is inescapable if you're going to be a senior engineer, and that's a good place to start. And that's what a differentiate between like a really good coder and our senior engineer They will own something from start to finish. And like if there's mistakes, they own that. If their successes, they distribute that amongst, like everybody who helps, but that's a good starting place it just like any small project, just like, own it and say, like, I'm gonna own this and then

</p>
<p><strong>Lauren Tan</strong><br />
work from there. Now the thing that I think could be really actionable is like, you know, if you work really closely with like your, you know, manager or your VP have an understanding of, you know, like, what are some of the things that they need help with, right? And are there things that, you know, if like, for example, you ask them, like, hey, if you had a second pair of hands, what would you do, right? And maybe they'll tell you like, Oh, you know, there's this part of the code base that's really ancient. It's been around for like, five years. No one's touched it, it's kind of working. But it has a lot of issues. So you know, like, like, understanding what those opportunities are, I think could be a great way to kind of step up into that role where you're no longer passively you're just waiting for work, right? You are taking the initiative to go figure out what needs to be fixed. When you To be better, that could be a good place to start in your current job.

</p>
<p><strong>Jem Young</strong><br />
I love that. Yeah, we'd left off the list. But that's a great point, Lauren, senior engineers are proactive about things. It's not necessarily like, I build x feature Time to go home, it's they see an issue. It's an issue for a lot of people, and they proactively fix it. Even though there's no reward in it. There's no like, it's not sexy to refactor old code or like write tests for things, but it's just something that needs to be done. And you understand that as part of like a good functioning code base. that's a that's a great, great point for senior engineers. I think another

</p>
<p><strong>Ryan Burgess</strong><br />
one too, is look to your peers ask for feedback. What are things that you could be doing better? What it does, and doesn't even have to be a senior engineer that you're asking, but that can be very helpful is similar to what Lauren suggested is going to, you know, whether it be director, manager, VP, some form of leader of like, how can you help, but I think it's also getting feedback from your peers of saying like, what could I be doing better? Where am I lacking? What could I do better on some of the approaches that I'm taking You will, hopefully see your code in pull requests. Just ask for that feedback. And often, like, don't wait for the feedback kind of be more proactive on it.

</p>
<p><strong>Lauren Tan</strong><br />
Another thing I want to highlight, and I think this depends on the company you work at, there's this really great Xen by an engineer. Her name is Julia Evans, and the Xen is called help. I have a manager. And I, if I remember correctly, there is one part which talks about promotions. So, you know, depending on the company, you're working at, working together with your manager on, you know, understanding what is the criteria for, you know, like, how do I move from a mid mid level engineer into a senior engineer, would be a good place to start as well, because then you can see, you can, you know, reflect and try to assess yourself where you are today versus where you know where you want to be.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that. And there again, proactive you need to do like

</p>
<p><strong>Jem Young</strong><br />
to look into that. I like that. So could we can we sum up for people who are just going to skip to the end? Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
can we can we sum it all up what a senior engineer is? Yeah, go for it.

</p>
<p><strong>Jem Young</strong><br />
under the bus, I won't remember all of them. But I can say, we said a senior engineer should lead not necessarily manage people but lead projects, or know how to Yeah, leading projects is good or even leaving people that's fine to either one. They know how to communicate effectively. So they know how to communicate their complex ideas and distill them down. Excellent people of all experience levels, but also we say humility

</p>
<p><strong>Ryan Burgess</strong><br />
that came up, having humility, being able to admit when you've made mistakes and identify where our approach didn't work, being open to new ideas. There's a lot of really good ones in there.

</p>
<p><strong>Lauren Tan</strong><br />
Yeah. And they're not safe. They don't deal in absolutes. It's always about the gray. It's about the nuance, you know, and being thoughtful and not seeing everything in black and white. I think well, having

</p>
<p><strong>Ryan Burgess</strong><br />
Technical depth in some form of expertise. Like we said, we're, you're probably not the expert, but having a strong understanding of the language that you're working in learning how to broaden your impact as well. Yeah, that's good one.

</p>
<p><strong>Jem Young</strong><br />
I think in general, like we can say, like, none of these are, like you said, there. These aren't absolutes. There's no like, you cross this threshold. Yeah. And you're like, Oh, I like that. Yesterday, I was junior and today, I'm Senior. It's just, it just happens. And these are like very abstract concepts. But I think when you're a real senior engineer, like you know it, which is not helpful for anybody trying to, like get there, but it's just, yeah, I questioned myself as a senior engineer, often, which I think is good. But yeah, ultimately, like you know, your strengths, you know, your weaknesses, and you understand the strengths, weaknesses of your team, and you can leverage that to be more productive.

</p>
<p><strong>Ryan Burgess</strong><br />
Well done. Alright. So at the end of each episode, we like to share pics of things that we found interesting and would like to share with our listeners. Let's go around the table and share today's pics.

</p>
<p><strong>Lauren Tan</strong><br />
Lauren I want to start with pick for conference. So this conference was.js, which was held in Paris this year, I was one of the speakers and it was probably like my favorite conference. I've spoken at very interesting format. And some really great speakers. Of course. That's my pick. So check out the recording, which will be coming live soon.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. I'm excited to see it. And I mean, going to Paris for conferences always good to

</p>
<p><strong>Ryan Anklam</strong><br />
Yep. Ryan, what do you have for us? So my first one relates to think it was the last episode where I talked about are the types episode where I talked about my switch to VS code from vim. And one of the plugins that I've been using a lot lately is called code runner. And you can basically just highlight arbitrary code and run it, and it'll give you the output in your console in VS code. That's pretty sweet. It works with a lot of different languages as well. It works with JavaScript, groovy, Java, a number of languages and believe it or not, My second pick is going to be Redux sagas.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm surprised to hear that

</p>
<p><strong>Ryan Anklam</strong><br />
and actually had this pick before we talked about them on the show. But yes, go check out Redux sagas, if you're using Redux. These are actually a pretty powerful concept. And it's basically just a middleware that sits on top of Redux. And as dispatch actions are dispatched, it listens to them. And you can do arbitrary things to your actions. And it's all implemented as generator functions, which makes it super powerful and super expressive, awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
Geometry have

</p>
<p><strong>Jem Young</strong><br />
random question in the middle pick, sorry, is asking the difference between an async function and a generator in an interview? Is that valid JavaScript interview, like in 2018?

</p>
<p><strong>Ryan Burgess</strong><br />
Is that a good question or not? before everyone answers? What value do you get from the answer

</p>
<p><strong>Jem Young</strong><br />
like to understand their technical depth? Maybe not saying that somebody I asked, but I'm curious if that's a fair question or not? I think

</p>
<p><strong>Ryan Anklam</strong><br />
I would ask someone why they would pick one over the other.

</p>
<p><strong>Ryan Burgess</strong><br />
I like that, and

</p>
<p><strong>Ryan Anklam</strong><br />
give an example of, you know, where you would implement one of the one of them or something like that.

</p>
<p><strong>Jem Young</strong><br />
It's a good answer. Yeah, I

</p>
<p><strong>Lauren Tan</strong><br />
think if it's for a very Java specific JavaScript specific position, I think it's valid because I'm imagining more like, you know, if it's like a more generalist role, and maybe that's too much into JavaScript specifics, but if it's a JavaScript, I think it's a fine question. Yeah. Like, I would also ask it the same way Ryan would like, you know, what are the differences? Why would you choose one over the other? What are the pain points if you know like, these bring you over a regular function.

</p>
<p><strong>Jem Young</strong><br />
Thanks, everyone. Sorry, you get the full stream of consciousness here. I have three picks today. First fix is a Netflix original, the haunting of Hill House. It is I'm not a horror fan at all like and this is a pretty scary just like a warning for everyone

</p>
<p><strong>Lauren Tan</strong><br />
and too scared to watch it

</p>
<p><strong>Ryan Anklam</strong><br />
but So I don't do scary movies or shows

</p>
<p><strong>Ryan Burgess</strong><br />
like jam I'm not a horror fan but I really liked it. It was good.

</p>
<p><strong>Jem Young</strong><br />
It's I'm almost finished but I can already say like, it's, it's fantastic. I watch it at the gym because you know, I'm scared just like everybody else I would. I would not recommend watching before bed you will do yourself a disservice. But it's fantastic. It's really worth checking out, even if you're not a hoarder. My second pick is an album that I randomly came across called a elmaleh cadet carrier. Sorry my Spanish is rusty. It is all in Spanish Spanish Spanish not Mexican Spanish as most people know us are familiar with by an artist named Rosalia but it is just fantastic. It's it's like one of those albums that like hit me in the right place at the right time. It's not something I've normally listened to, but it's worth checking out just a totally different like genre of music and I normally listen to you but it's pretty good. And my last pick is a sci fi book called The fifth season. See Ryan nodding,

</p>
<p><strong>Ryan Anklam</strong><br />
nodding said I'm reading it right now. It is amazing.

</p>
<p><strong>Jem Young</strong><br />
It is fantastic for those who don't know, they won the Hugo Award. So there's three books in all three of them at one the Hugo Award, which is like, I don't know two Emmys for sci fi books. It's like the the most prestigious thing you can get for a sci fi book and is every single book has one which tells you something about the author. I won't give anything away, but it's worth reading. I definitely second that pic. It's really, really good book. I have to check it out.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, since react hooks came up, if you're very interested in learning, just a quick introduction to what react hooks are and why they're applicable and why you might want to use them. Our good friend Harry wolf has a great video series that he is always talking about what's new and great in JavaScript land. He has a really good video on react hooks. So I highly recommend checking that out. If you're like what are they talking about? This is perfect. Terry does a good job explaining it.

</p>
<p><strong>Lauren Tan</strong><br />
He does also like go a step beyond and figure out like why you shouldn't use reactor. He

</p>
<p><strong>Ryan Burgess</strong><br />
has a couple videos. The first one is the interesting And then I believe the next one is a little more in depth on it. So in like eight minutes, you get the introduction. And then I believe his next week was a little more into why hooks are good or not, I can't remember they might be I might be combining them a bit, but at least you have a high level of understanding on why you might want to use hooks. It isn't alpha, just,

</p>
<p><strong>Jem Young</strong><br />
yeah, I was at Facebook the other day, and they did say that next think patch version will probably have hooks in it. And then next full, React 17 will be something completely different. So it's, it's like fairly safe. But however, as always, it is an alpha things change.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I'm not saying go use it. But it's good to have a good understanding of why you might want to use it or start to think about maybe why. So that's something since it came up in this episode. I'm like, Hey, this is a perfect time to plug that. And then I saw an interesting TED talk the other day. It's called how I'm fighting bias in algorithms. Really, really great talk and made me think About us as engineers building algorithms and and thinking about this is like, yeah, we can be putting our bias whether it be in diversity or just the way our thoughts could be actually applying into these algorithms. And we should be aware of it. And so the speaker joy, she does a very good job of kind of like just making you think about that, and it's a great talk, so I highly recommend watching that before we end the episode. I want to thank Lauren for joining us again for her second episode. It was a pleasure again, having you on where can people get in touch with you?

</p>
<p><strong>Lauren Tan</strong><br />
Thanks for having me. The best way to reach me is on Twitter. My handle is <a href="https://twitter.com/sugarpirate_">@sugarpirate_</a> with an underscore at the end

</p>
<p><strong>Ryan Burgess</strong><br />
right on where can people get in touch with you panelists

</p>
<p><strong>Jem Young</strong><br />
jump on twitter at <a href="https://twitter.com/JemYoung">@JemYoung</a>

</p>
<p><strong>Ryan Anklam</strong><br />
I'm <a href="https://twitter.com/bittersweetRyan">@bittersweetRyan</a> on Twitter

</p>
<p><strong>Ryan Burgess</strong><br />
and I'm at <a href="https://twitter.com/burgessdryan">@burgessdryan</a> on Twitter. Thank you all for listening today's episode, make sure to subscribe to front end happy hour podcast on whatever you like to listen to podcasts on. Man, you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>, any last words sagas rule.

</p>
<p><strong>Lauren Tan</strong><br />
Looking forward to learning more Cheers. Cheers. Cheers.

</p>


  `;
  return transcript;
};