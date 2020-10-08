// Episode 87 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
  
<p><strong>Ryan Burgess</strong><br />
  Welcome to a brand new episode of the front end happy hour podcast. In this episode we are joined by our fellow colleagues on the back end or back end engineers usual and Eric to talk with us about how backend and front end engineers can work effectively. Together Ujjwal and Eric, can you give us a brief introduction of who you are, what you do and what your favorite happier beverages.
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  My name is Eric, I work on the growth engineering team here at Netflix responsible for maintaining the back end portion of the signup flow. So that is the primary means of acquiring new customers at Netflix and it requires both the back end and the front end to you know, sort of work together to make sure We offer a smooth customer journey. in day to day I'm kind of doing a bit of coding bit of project management at this point in time. drinking a lot of coffee. Favorite happy hour beverage has got to be a Pinot Noir.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Pinot Noir.
  
  </p>
<p><strong>Jem Young</strong><br />
  Not caviar. 
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Ujjwal.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  Hi, I'm Ujjwal Tyagi. I'm also on growth engineering team. I manage the partner and payments part of growth engineering team. as Eric mentioned, growth engineering team owns all the backend services for running sign up or building signup flow across different platforms. We'll go into more details about what we did on. And as part of that we work with many different teams UI specifically, we're kind of an extension or UI. And now within Netflix, microservices architecture, we sort of set in between UI and all the other downstream services. My favorite happier beverage would be all fashion. I recently tried some in Chicago. Those are really good. That's what I usually enjoy. It's a
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  good choice. That's one of my favorites as well. You definitely said that on episodes in the past. All right. Well, Jem, you want to give a brief introduction,
  
  </p>
<p><strong>Jem Young</strong><br />
  Jem young senior software engineer at Netflix, and my day to day responsibility is curating the list of lunch items and critiquing them one by one. Today I had a lovely beef ravioli. It's pretty
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  good. I mean, it's getting harder. There's more and more on our lunch menu.
  
  </p>
<p><strong>Jem Young</strong><br />
  It's a hard job. But you know, that's my day to day got to do it.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  And I'm Ryan Burgess. I'm a software engineering manager. at Netflix for my lunches, I just go to the easiest thing possible. I don't have time to look at this menu that Jem's curating. So maybe I need to get on that. In each episode, the front end happier podcasts. We'd like to choose a keyword that if it's mentioned on the episode, we will all take a drink. What did we decide today's keyword is
  
  </p>
<p><strong>All</strong><br />
  API.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  All right. Any of us say the word API From now on, we will all take a drink. Okay. All right. Yeah. No, yeah. From now on. All right. So Let's jump right in. I'm interested to know a little bit more as what's the day to day of your jobs as backend engineers? What does that entail?
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  I can talk more about what our team really does. Because I guess most people know about what a Ui Ui team does here building the user experience. So what when a user goes to netflix.com, what they see is being rendered by the UI team, right here, but the data that you need for building all of that the information you need to decide what response to a call to action should be like that is all coming from our services. So we set in between UI and the rest of downstream downstream services and at Netflix with the micro services architecture. downstream services are very fine grained, you have a payment service, you have account service. You have a be experimentation service of several services that are doing very specific things. We sort of do a CT screen work, we talk to many different services. They We also maintain all of the signup, business logic within our systems, things like what, what the experience is in a certain country or a certain device, that is all decided by us. As you know, Netflix, sign up is supported on all the devices. And but I guess, between these devices, there are nuances differences. And in order to provide that unified signup experience, our team and the services that our team owns that, that manages the signup experience across all the different devices.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah, and I think that one's a big important one from us being on the UI side is now we're building you eyes for for platform for sign up. We're doing it for iOS, Android website, and TV. And so us being able to carry that business. I mean, we could we could do all the business logic UI, but that would be really, really difficult. And so we rely heavily on your teams to basically create those API's for us.
  
  </p>
<p><strong>Jem Young</strong><br />
  Here's yours, I would just add that
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  Along with all that, you know, business logic and sort of sitting between the front end and the back end, we also as engineers as part of our day to day work. There are a lot of insights and a lot of telemetry and operational excellence that comes into it. So we do you know, we have on call rotations, we have tons of business metrics that we need to keep an eye on. And so making sure that the various A B tests that we might be allocating are are functioning correctly, making sure that the service is operating at a certain level, these are all things that you know, as a back end team are definitely we're responsible to since our services, definitely responsible for logging much of the data that is used as sort of the business source of truth. So there's a lot of not just writing code but making sure the services doing the correct
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  thing that Really good point because reliability and availability are very important for our services. Given that for Netflix in general, yeah, especially our services given that we control all the signups we we kind of drive all the signups and login for Netflix, if our services are down, people cannot sign up or login. So that's very big business impact. And that's why reliability and availability are very important.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Nothing as important and definitely makes it easier on us when things are working. The UI will work too, which is great. You mentioned a downstream services like what does that mean?
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  Yeah, so downstream services for us would be services like payments accounts. These are the places where we go to to get data. Our services don't really own any data. We don't manage anything in terms of user state, anything other than that. What we do is when we get a request from a client from a UI, let's say browser or mobile phone, we in order to decide what experience to build for that particular use There, we need to collect data from many different places. So we go to account to see if there is some information on the user. And that might influence the experience that they get. We also go to payment service to see if once we have decided where they are, where the user is going to land, let's say on the payment page, we'll go to payment service to see what kind of payment methods are available in that country for that user. And we will do the same thing for other services, we go to AB, all our features are AB tested. So every single request that comes to us makes multiple calls to less ad, we find out whether user is allocated to certain test. If not, Candace, you should use this user be allocated to a certain date. So we do all of those things before we decide what the experience will look like. Once we get data from each of these services. We then apply our own business logic on top of that. So we use that data to decide what the final experience will look like. But ultimate control is within our services to to make that decision. And then we have a separate more like a state machine for each platform. That decides that will then fine, give that final response back to the client in, for example, if it's browser will send it to the browser state machine, which will know about what browser is capable of what are the things that it can and cannot do, and then build something that is compatible with build something that is compatible with that.
  
  </p>
<p><strong>Jem Young</strong><br />
  So you're in, in simpler terms for people who don't work in Silicon Valley, necessarily. So you're an aggregated interface for the front end. So you collect all these other services and data from them. And then you prevent, present an interface so that the UI doesn't have to deal with them directly. That'd be a good way of summarizing
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  in a way. Yes. So to give you some context around this, we used to have, we were at a place where you guys were directly talking to these services. And it just became difficult for us to scale at that point. So now we wanted to onboard sign up on more devices. And that meant that he was team had to recreate all of this logic In each of these new platforms, by putting us in between, we've abstracted all of that complexity away from UI. Now there's one place which already has everything in place. So an onboarding simply means talking to us. So we do aggregate these API's from downstream services downstream being these payments specific services. But on top of that, we have our own business logic to decide. So it's not enough just to know what payment methods are available. We also combine that with the user state, we combine that with a B test that user is allocated to, and based on all of that information, so we form a final response or decision on that request.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I mean, even like one of the things with the responses that you get as a UI engineer is knowing the fields and everything that I'm going to need to build that UI. But even just this like one simple thing. It sounds stupid, but it's so good is getting the regex as a response so that I am now validated in an email address against the same regex that you're using on the back And it seems minor. But I've definitely been in companies where you're almost emailing with the back end team, hey, which regex Are you using to validate that email address, and there's been so much value in just having that consistency. Because to the user, they don't want to be like, Oh, well, I typed in a valid email on the client. But then now the server is saying it's invalid, just because two teams can talk together. And so to me, that was even very, very powerful to actually have that in the response,
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  I might just do a quick plug for the growth engineering blog post we have on medium, I think will, that will actually go into some more depth and have some imagery around this back end, front end, middle tier that we're kind of discussing, we think of what growth engineering is doing as more of a middle tier type of thing. So yeah, we'll put I think we'll put that in the show notes. And just, I think an example actually helps to like if you if you think about the Netflix signup flow like most people probably haven't gone through it in quite a while. It's more like you know, the member Express is really the what a lot of people are thinking about when they think of Netflix, but the signup flow is, you know, the first, the first thing people kind of encounter on their journey with Netflix. And if you just think about the signup flow, it consists of a welcome screen. It's sort of like the landing page. And what the back end is giving you there's, you know, what the, what the CTA should do next to the call to action buttons, where should we take the user next we help drive some of the back end and middle tier decisions, like which imagery should we show to these users, you might notice there's some content imagery on the homepage, we can't just show the same content globally, because our licensing for contents different in different countries. So we have to make sure that we're showing things that are relevant to a given customer or visitor. And then if you proceed through the signup funnel, the next thing is plant selection. So we show you what the product offerings are. So you can make you know the right choice for whatever devices you might have or the number of people in your household, that kind of thing. The next thing would be registration. And so as you're moving through these pages, like behind the scenes, we are Calling the backend services to get the product offerings that are available, we can sort those things we can mutate those responses in the middle tier, make sure that you could have AB logic, for example, make sure that if you want to test a given feature of a given offering, that would happen in the middle tier. And then we're kind of putting an abstraction between the backend services and the client side, of course, registration. There's some things like regular expression, validation that can happen in our layer. And then once those things are validated, then we can go ahead and you know, actually process a, an actual registration request in the backend systems, at which point the user actually has, of course, data in the system and an account. And then you can proceed through payment and the rest of the signup flow. And all those along the way. It's sort of where the place where we can have those abstractions in place to add any more logic on top of these calls, especially AB logic. That's sort of the core of what we do.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah, it makes a lot of And I think also juggling with all different countries you've mentioned there too, is that there's a lot of permutations between countries that you're having to deal with. And that can affect what the UI looks like and responds to just depending on the country, on the device, everything. I'm not
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  sure if Jem, you were here at that point, when we built this protocol, were you hearing? Yeah, you were here. So you probably remember all the discussion we had. And this particular approach looks so different from what we were used to giving all the control to servers. So it, we ended up with a protocol that was entirely server driven. But client is the one which is specifying exactly what they need. So we would have those discussions with the client, but fine, didn't have to worry about what this where we are getting this data from? And are we able to maintain this consistency across platforms, what the look would look like, what the experience will actually look like. So Kyle didn't have to worry about any of that. And that was client giving away a lot of control and at the same time overhead as well, about how the experiences at the end gonna be built. We ended up building something where server took all the responsibility for giving the actual data model that is needed to finally rendering that particular page. And that was a big shift from what people were used to at the time. So, so much discussion about, is this the right thing? We are doing? Not. But But when we started working with it, I guess UI teams were the most happy team afterwards, because there's, you know, so much coupled it to I think that was a big Yeah. So that was a, it took a long time to get there. But I think we are still finding it very useful to have this driven by server where server decides what the validation should look like, what what fields are available, and have the capability of dynamically changing these fields and changing the experience as well.
  
  </p>
<p><strong>Jem Young</strong><br />
  You know, what's what's really interesting is that other companies don't do this and other places I've worked does the server drive everything in the client just consumes that and doesn't do any business logic. And I think one of the reasons for that is one, there's a higher upfront cost to pay, like you said, and setting up the protocol that you will build, it's a lot of upfront works of very, very, very high upfront costs. And it's a lot of trust that the front end team has put in the back end team that it's all gonna work out, you two are gonna stay in sync. And I think that level of collaboration is really hard to achieve. Many companies and a lot of people just don't want to give up control. It's just much easier for me to fix things rather than wait for Eric to fix them. But I think what is helps with our collaboration, why our system works, and like we have this state machine somewhere else, and I don't worry about it. Is that like we maintain this open dialogue all the time, and I think it's that physically Eric, who I work with, primarily, and it was well in the beginning, like very responsive, very receptive. On the UI side, we say, hey, there's an issue. And I tracked it down to the bad bad data coming back. We always sit down together and we isolate that we fix it versus like, hey, yeah, it's your problem. Your tests are broken or something like that. I think that has really helped, like our back and forth.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  You've separated some concerns from you know, Not being very coupled on the like the code where it is very decoupled, having a back end front end and there are separated. But it's like you still have to have a lot of those conversations and think strategically together. You know, who's going to own what, how's it going to interact? What does that contract look like? Or maybe I should just call it API API essentially ready for Cheers. But I think a big thing that comes into the collaboration and how to collaborate really well is there's no way to get away from actually having conversations. I think it really helps talking with each other and working very collaborative together. And almost like physically sitting close together, I think can be a very helpful thing to is if you're working on, on projects together, getting up from your desk and talking to one another is really important.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  Yeah. I don't think this protocol or the way we are doing it would have been so successful had it not been for this effective collaboration between our teams because every single change today we that has to be made requires a conversation between as required There's some discussion about what is how should we should go about doing that. So I guess collaboration is a must, it has to happen. Without it, this protocol can really be it can really work. And what is interesting is, we work in this cross functional sort of design where there's UI representation, there's the US there's other downstream services, I think we are still very loosely coupled. Because no one is no one needs to know how the other team is doing it. But just have that trust, as you mentioned, jam is that you know, where everybody is doing their stuff, right and in a way that unblocks the, the client from them or allows the client to do to build their, their build their system properly. I feel the way we achieve it in terms of collaboration is like we have these project teams and work very closely together. So whenever we have a new feature request, the teams decide what it will entail on different sites from different teams. And I think the other benefit of having that is we end up coming up, we end up coming up with a better solution, then what? You know, sometimes I feel so I've had several cases where I would say, yeah, this particular feature, I'm going to go build it this way. But just because I was discussing it with someone on in the team, I ended up getting to a better solution, which made it more scalable, which made it work for other platforms as well.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah. And I think in order for us to work independently, or loosely coupled, as you put it usual, is you still have to have those conversations like up front to is like sometimes we are working on projects at different times, maybe the UI is ready to start building something but the back end is still working on a previous project or is just tied up and not able to jump on that right away. But I think having those conversations up front, you can work out what that contract is going to look like and at least align on that. And then hopefully, once everything's done on both ends, they just kind of work together and tie up I think that's been really beneficial. And without a conversation here, just hoping that those things will work. And it's it's never the case.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  And things do change, we start with that. The things keep on changing from the back end side, when you come up with a mock maybe a stub at first and allows your client and now you're trying to build something independently in parallel. And then chances are things change, the best way is to just keep the other person informed about the changes that you are encountering and how it will impact the other person. I think that's something I feel we do a really good job at as well. These slack channels and other places that we use. We a lot. And I think that's another thing to remember when collaborating,
  
  </p>
<p><strong>Jem Young</strong><br />
  think so what I'm hearing from both of you is it's really the ownership model is that it's very clear, and that this section I own, I can write tests against this contract, but you own it. If something is missed displaying in the UI. It's not necessarily your concern because you say I'm getting this data and giving out this data. And that's correct to the best of my knowledge. And then as a UI engineer, I need to track down with the issues. I think that is kind of the essence of collaboration is just like if something's broken, I can say like, hey, it's not coming out, right? Like, cool. I'm on it. And then I can go off, do whatever I need to do. Versus I need to track it down and talk to the right team, the right team, that's you handle that if the UI is misbehaving or the logics incorrect, I handle that. And that, that like really clear handoff is really important collaboration. We talked about this separation between the two teams, but how important is it to know what the other discipline is doing? How much does the backend need to know about what the front end is doing? How much does the front end need to know about the back end?
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  Interesting, I think in terms of the technologies, we shouldn't have to know too much. I think we've, you know, we've developed this protocol, as we've been discussing, and as long as the two two entities communicate that protocol, things should just work. And we shouldn't have to care too much about that. Technology is being used on on the other side. But I guess you know, there are there are certain things that we must know about, sign up on different platforms, different platforms have different requirements, they, they may be boot up differently, they have a different sequence of events that needs to take place. And both sides need to agree on sort of what should happen during those sequences. So there is to some degree, some things we need to consider. And that comes down to you know, the collaboration. But in terms of technologies, we don't need to know too much in terms of tackling the actual business problem. Sometimes there are things we need to share.
  
  I don't know if you'd like to add to that.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  Yeah, I guess that's true. Details about technology or how something is being implemented, doesn't really add that much value, probably. I mean, out of curiosity, you can learn about those things, but doesn't really add much value, but I think there is a lot of To be paid from just knowing the overall architecture of how teams are doing different things, so that that enables you to come up with a better solution. And also when you're going, for example, if a UI team has a request, and they want a back end team to build it, just knowing about how the back end team goes about doing things like what what is the design layer for them, it will at least enable you to ask the right questions, and maybe even think about whether this particular feature the way your request you thinking about the request, should that change a little bit as well, because, you know, sometimes, UI engineers very much focused on their platform would come bring a requirement from their perspectives. But if they know that backend service is serving all these different platforms as well, how can this help others and if they have a little bit of idea of what overall request flow looks like in on the backend side? That just leads to I've seen that that leads to a better discussion about what you know, and a better discussion about how this should be done. And also more trusting each other's team as well. Because, you know, back end teams are not going to say yes to everything you are requesting either there's going to be changes there. If you have that trust that hey, I understand why. What are some of the causes that might some of the reasons that might cause this? I think you just go about those discussions slightly differently.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I think since I also I like that you guys both touched on like business logic, or even like the platform that you're working on and understand at least both having an understanding what the capabilities are, and also what you're trying to achieve for the business I think is super important. But yeah, I guess you don't really care if which JavaScript framework we're using, you're like, cool. It's it's been rendered. That's great.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  It does help to know that yes, before you call us, you call the other services to get some information. So whenever we get a request from someplace about getting a new data field, we know that UI has this capability so we can reach out to you I at that point. So it's good to know those things.
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  It's not like we don't know anything about you. I actually I actually actually enjoy going in. And when I'm debugging stuff, open up the dev tools in Chrome and step through the the data model in react. And I mean, that's, I think you want to learn it, it's there.
  
  </p>
<p><strong>Jem Young</strong><br />
  That's true. That's a good point. I think all UI engineers should build API's at some point. Cheers. To me, being a good engineers being well rounded, you don't have to be an expert at Java. But it it's helpful to know something about another programming language outside of JavaScript or Python or Java, like whatever your primary is, learn another one, or at least, like have some passing familiarity. But yeah, it's important for UI engineers or front engineers to build some sort of backend service. So you understand the complexity of like load balancers and like cookies and authorization is insanely complex, that it's something that you take for granted as a as a front end engineer until you have to do and you're like, wait, what you have to do the master cookies, but you have to expire them and then you have to renew them. You have to. It's so complex, and it gives you healthy respect for what people do on the other side. The flip back engineer should write some UI code because I've been places where there's a, oh, just HTML JavaScript, like just put it up there and CSS. But again, it's you're like, Oh, crap, this is actually really hard to, to build for and like these, all these complexities you have to think about so I think doing that. I know, Eric, you've done a bit of UI work. I
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  have, and most people are saying that UI engineer should, right. It has been I came in as more of a full stack engineer, I always was more of a build the entire application. I liked building the entire application. Usually monoliths, you know, I didn't really get exposed to the type of architecture we're discussing here today until Netflix, because we're doing I think we're sort of leading the way in terms of some of these, you know, handing all the control off to the server. So, but I think it's, I've always loved dabbling on the UI and the back end and I'll continue building the the odd UI
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  It really helps you like to Jem's point, it's like it helps you build empathy and also probably helps the conversations when you're collaborating, because you get a better sense of what the other discipline is capable of and where that business logic should live, or you know, where this interaction should happen. And I think it does really help you be more well rounded, but also to help you have a better conversation with the fellow team member.
  
  </p>
<p><strong>Jem Young</strong><br />
  A lot of what helps is a common logging platform and common metrics that are visible to everybody on all teams so that it doesn't matter where the request comes from. I know where it ends up. And it's in wherever some pipeline, but it ends up in cabana, or whatever platform you use. And then that's where I know that back end engineers, they look so I look there too. So we have this shared understanding about like, Hey, I noticed this and here's an exact lock file. So we like this common vocabulary between the two of us even though we're writing two different languages. There's this unified place to look anything for any server metrics, things like that. I say like hey, The server's not doing well. And I can pull up the dashboard, where you to look, say like, Oh, this, this thing's out of memory right here. Like, let's go chase that down. I think that's really helpful. Like we all share this common common understanding. And our Kibana tool
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  actually is being used by UI teams a lot. So that's, that's to your point, Ryan is just that it is effective, because your engineers know what they're looking for. They know what our service, the back end service is doing, how when they are writing these different events. So they can interpret a lot of information just by looking at the logs, they can even find out some issues in their request. So before even reaching us, they know what was wrong and they can debug it or solve it themselves. Same thing with us before we and that's another. I guess, important thing when working in this more collaborative environment is everyone has to do their part. So it's important that you make sure that you've tested all things yourself before you go ask someone else to spend time on it because oftentimes, you are able to catch it through logs to other If you don't have those, maybe invest in tools first. Because that's very important. I guess. That's how you have this better relationship with each other. Because you know that, hey, if the other person is reaching out, chances are it's on my site, so I should just immediately look at it. And, and that comes from just knowing a little bit about how other systems work as well.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I think it's important what you said there, though, too, is having the expectation that each other's done a bit of investigation first, because like, then it's not just throw it over the fence model where it's ads broken on there, and they'll just throw it at them. It's like, hey, I've looked at this is how I came to that conclusion, but it's on your end, something's happening. Here's what I tested and tried. And that ends up being a lot better of a relationship versus the like, that's not my problem. You go deal with it.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  Yeah, I sound so obvious, but I've seen so many, I guess in the previous companies so many times where, because people are just not investing enough time, friend and then reaching out to someone else. And that just breaks the trust like other person. Sometimes it's their issue, but they don't want to invest And they'll let it sit there for several days and then go back to
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  it. Yeah, I think
  
  it might might just be our team culture. But one of the things that I think about is, whenever I find that the UI like, or any other team actually comes to us and says, like, Hey, can you look into this issue for us? I think of it as almost like, we treat it almost like a forcing function in our team to improve our tooling to make sure that we can enable our partners to better serve themselves, because ultimately, we're all going to be better off if we can understand the system a little bit better. And see, I think it's, I mean, that shared responsibility around looking at the data and understanding it is yeah, sort of critical to our success. Otherwise, our team would just be a huge bottleneck for every every query that came in around like, you know, why is this field not there? What happened when the user click this button and they didn't go to this other page where I expected them to so it's helping
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  scale yourself and that you're not getting every question. So we've talked a lot about like building this separate Like separating concerns and, you know, having more of us server driven business logic for the UI. How would you approach this? Like, usually you're obviously here at Netflix, in some of those conversations. I came in midway as we're migrating. But what if someone wants back endorphin and wants to move to this in their companies? Like, what advice would you all give to someone wanting to move to that protocol?
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  I guess the first advice would be there has to be a strong motivation. because it requires the commitment, not just for the short term, but for a very long term, you eyes should be comfortable with not having that control over the code. Because it does, I guess there is a trade off, they can move much more faster if they have full control. And if they're trying to fix or build a feature. Now you have to depend on another team. So you there has to be that proper. Consider you have to think about all the dependency you're introducing by having a structure like this. And the other thing is it you should Do it when it's more than one systems like for us, we have different platforms that are supporting signup flow in different ways. And that adds all the values. But if you have just one platform, for example browser, doing it, it might be an over optimization to build a system like this. So you there should be more than one use case, to build it so that you can build a centralized system or back end server service, which knows a little bit about all these different platforms and can kinda in a way, personalize it according to the, to the platform. So that helps a lot in that case, too. And you The third thing is it's about you have to have those expertise, where UI teams are pretty exploited I just doing the UI stuff. And of course, I guess there's backend teams are expert at doing their stuff. So they can both you have this low separation layer, which then that means you lead to some API's that are
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  tears.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  And you mentioned Ryan that now Yes, I was here when this discussion was happening. And to be honest, I think it took people by surprise initially that there was nobody, at least thought that this is a good way of doing it. The way we got it as a new platform was trying to onboard sign up. And they didn't want to do all of the work that everyone else has already done. So that's why we started having this discussion. And I guess it took a little bit convincing even for the back end team, because that's the back end team is right now responsible for so much stuff. And it's not easy to take on that kind of responsibility and you need other things, you need to have tools like Kibana, you need to have enough monitoring alerting in place because you're supporting so many different systems. And if you're, you're not able to track exactly what you're every single change is gonna have an impact on these different systems. It's gonna be a nightmare because and you will get requests and requests or issues from all over the places it's gonna be very difficult. So before you can go in, you have to be prepared to win Weston, automation, integration testing, you have to get comfortable with testing each and every single use case and use flow that's going to be there. And again, we I think that we are more like an extension of our UI. So we get involved in almost all the projects that UI team is working on. So it's, you have to have that relationship that kinda, you know, teamwork that with the, with the UI as well that you can work very closely. And you have to have that culture in the company, your teams enjoy working together.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah, I think another thing to add to as we talk about this, as we have fairly decent sized teams, and I think this model really works well for that when you can separate those concerns. And there are companies like some smaller startups where it may not make sense to invest as heavily in something like this, but there are ways that you can make a smaller investment but maybe you start testing this out on a isolated feature or page. You don't have to go full blown on this. model that you can start to test into this and see how it works rather than investing heavily in it because I think that could be a huge expense for a company to go that model. I think there's a lot of benefits for doing it. But kind of test your way into it, try it out, see what works and what doesn't rather than trying to get the perfect solution right at the start. All right, well, let's hop into pics. At the end of the each episode, we like to usually choose pics of things that we found useful or interesting for our listeners. Let's go around the table and share pics for today's episode. He's you all you want to start it off. Okay.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  Yes. So I mentioned I went to Chicago recently was great. Yeah, except for the weather. It was raining and you know,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  fine. Better than worse. It can be a good thing.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  Yes. But I was. I asked a friend and they told me that in Chicago food is really good. And that is actually so true. Outside of the drinks. The food is also amazing. So I tried their spicy chicken at Perry Perry. That's really good. You should try that. If you go with some name. It's amazing and Few more places as well. burger places and other things and all in Chicago downtown. I feel like when will I go there again? They're so pretty Chicago's a good place to Chicago for food downtown is even better.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yes. Right on Eric. What do you have for us? Ah,
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  nothing about food recently I watched this isn't a Netflix show actually but
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  he does not a requirement.
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  Free solo you guys watch this show. It's a documentary on basically climbing a giant granite granite Cliff in granite wall and Yosemite definitely worth watching. Imagine climbing a 3000 foot granite wall with no ropes.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah, not for me.
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  I found that like really interesting to watch I was you know you're kind of a lot of suspense but you're also there's a moral moral issue there. Like if he falls off when I'm filming this like what happens so super interesting. Other pics, speaking of pigs, actually, I recently bought a new guitar.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  That's very good.
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  wasn't a good pic. Oh, it's fantastic. This marginable m 28. Yeah. I dreamt about this guitar for like 10 years and I finally bought it. And I was like, Yeah, right. It's amazing. Nice. So that's what I'm doing outside of outside of work these days is playing a lot of guitar.
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  Exactly. Yeah. Nice to bring it in on me.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Like, agreed.
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  Yeah, like maybe next happy hour.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah. Jem, what do you have for us?
  
  </p>
<p><strong>Jem Young</strong><br />
  I've got two picks for today. I mean, I've watched some good Netflix stuff. Watch a lot of bad Netflix stuff, too. So yeah, so it could be the avoid. All right, I got three picks because I do have a Netflix show that is like this great. My first pick is 507 mechanical movements. The something I ran into years ago on the internet and this pops into my feed at some point. It is fascinating, like as an engineer, like understanding how all these gears and things move you're like, how would I make a gear that sometimes runs but it runs like what Once a minute, but it's like constantly running on an engine like how do you design something like that? And this site like has all these different types of movements like that. It's just so fascinating what engineers have come up with to solve these problems it's it's something I don't think about very often like, how does my car work? How does the How do the gears on that change over time and like but the engine never stops and things like that It answers these questions. It's it's really fascinating for the engineering me my pick for Valley silicon. That is my portion of the show where I pick something that is outrageous extreme. It only exists because people have too much money, mostly in Silicon Valley. my pick for Valley silicon is this $270 toaster. It is from Philips. Oh no sorry, it's from Mitsubishi. It only makes one piece of bread at a time and it's $270
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  especially about it.
  
  </p>
<p><strong>Jem Young</strong><br />
  Apparently it makes toast perfectly. If you're a toast connoisseur, or you need to get a gift for Sony who has everything already. This perfect toaster will probably do the trick.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Make more slices though? Like I feel like one is just doesn't make sense.
  
  </p>
<p><strong>Jem Young</strong><br />
  I really want to try it. But like I want to taste what a $270 toaster will do. Apparently it's amazing, but no, I don't think. So,
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  Jem, when you get it then I'd also like to try.
  
  </p>
<p><strong>Jem Young</strong><br />
  In my last pick is a Netflix show. Probably what my favorite shows. It's called. It's Bruno. The really short, they're probably maybe 1115 minutes an episode, but it's about a guy in Brooklyn and his dog and the adventures he has in his neighborhood. That's it. That's a little show. It's so good. It's like Bart hands down one of my favorite shows on Netflix.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Awesome. I have not seen it. So I need to check. This should definitely, definitely check it out. Alright, I have three picks. I added on a Netflix show just to me as well. So I'm choosing the Google Home hub. Essentially it is picture like Google Home or Alexa with the ability that it has a screen on it. I like it, you still get the nice voice interactions. But it does a lot more where you can hook up to like cameras and other integrations that now you have visual aspect to it. So I've just recently got it and been playing around with it. I really like it. It's kind of cool. And then I was also recently in Toronto, and forgot how much I love Hawkins cheese's. I like cannot get them in the US. And I bought a bunch of them while I was there, and now I'm all out of them. So yes, very good. If you were in Canada, maybe you know, Eric, he might be able to understand.
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  What do you think he just reminded me of another pick x b. x pack? Oh, so I signed up for x pack as a Canadian living abroad. I think x pack has other countries as well, but they do they will send you a shipment every month with things from home. Yeah, like he's recently as well. Oh,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  yeah. My third pick is I've actually picked it before but there's a season two now is bad blood. Talking about Canadian things based off some true events in like a mafia in Montreal. So it's on its second season. I really enjoyed the first one, I highly recommend checking out the second season as well just recently finished it, so definitely recommend it. Before we end the episode, I want to thank you all and Eric for joining us. It was a pleasure having both of you join us. Where can people get in touch with you?
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  I share my LinkedIn and Twitter handles. Guess you will be pasting it. Yeah. Yes. So you can get me get in touch with me on. I'm very active on LinkedIn these days for some reason.
  
  And Twitter.
  
  My Twitter handle is yours <a href="https://twitter.com/urstyagi">@urstyagi</a> is my last name is URS TY AGI.
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  Yeah, you can also find me on LinkedIn and Twitter. On Twitter. I have a just my first initial and last name so he is worth <a href="https://twitter.com/eeiswerth">@eeiswerth</a> and LinkedIn. Eric Eiswerth is not many of me.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Nice.
  
  </p>
<p><strong>Eric Eiswerth</strong><br />
  Yeah. It's pretty rare.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  And Jem, where can people get in touch with you
  
  </p>
<p><strong>Jem Young</strong><br />
  send me a letter to Netflix corporate?
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah, they actually can send that. I've gotten some stickers in the mail and things like that.
  
  </p>
<p><strong>Jem Young</strong><br />
  Yeah, send me something like a postcard or something really nice. All
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  right, and you can find me on Twitter at <a href="https://twitter.com/burgessdryan">@burgessdryan</a>. Thank you all for listening today's episode, make sure to subscribe to front end happy hour podcast on whatever you like to listen to podcasts on. And you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. Any last words? 
  
  </p>
<p><strong>Jem Young</strong><br />
  Hawkins cheesies. These are just Cheetos but Canadian. 
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Oh my god, there's so much better than Cheetos. 
  
  </p>
<p><strong>Ujjwal Tyagi</strong><br />
  You have to bring them here now.
  
  </p>
  

  `;
  return transcript;
};