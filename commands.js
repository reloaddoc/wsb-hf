/* 
    setting here:
    * the game name (will appear as title)
    * Credits (will appear at the footer of the page)
	* commads of the game
*/

sGameName = "WSB-GME Saga - HF view (Click text)";

GameCredits = "Alex";

aCommands = {
	"Start": [
		["i", "images/hfintro.png"],
		["t", "It's 2019 and people come to you and your Hedge Fund to invest their money. You need to find things to invest in, generate a nice profit, keep some of it and hand the rest back to your investors. That is your job."],
		["t", "You send your interns to a GameStop store to buy a present for your son. They return and tell you how empty and outdated the store looked. You are intrigued and do some research on the company."],
		["i", "images/inspector.png"],
		["t", "This company is in horrible shape, you find. It's a brick-and-mortar store in a world that increasingly buys its stuff online. And it's share price suggests the company is worth about $1 billion. This is insane. You are sure it's the next RadioShack and will go under."],
		["b", "You ask your interns to do a thorough financial analysis on GameStop.", "Do financial research on GameStop"],
		["b", "You decide to do nothing and invest 100,000 Dollars in Tesla instead.", "Invest in Tesla"]
	],
	"Do financial research on GameStop": [
		["i", "images/lol.png"],
		["t", "Your guys find that the company is truly in bad shape. You all laugh. CEOs are coming and going, losses and debt are piling up, digital downloads are the future, foot traffic for GameStop stores is falling."],
		["t", "This it it, boys, you tell them. You are going to short GameStop. This is one of your speciality moves, after all. Other hedge funds do currency trading or go long, you typically go short. "],
		["t", "You decide that Gamestop's current share price of $5 is overvaluing the business. There will be no turnaround. You go short. You borrow hundred of thousands of GameStop shares at $5. You borrow them from Pension Funds, among others. They have many shares and for a small fee are willing to lend them."],
		["t", "You agree that you will return the shares by 29 January 2021 at the latest. Today, you immediately sell the shares on for $5 and will buy them back once they have fallen below $5, thereby making a nice profit. This is what you do best, after all: shorting."],
		["b", "Only tell your interns about it and walk the dog.", "Interns"],
        ["b", "Publish a research report to let the world know that you shorted GameStop. Hopefully this will lead to people selling shares, thereby making the price fall.", "Research"]
	],
	"Invest in Tesla": [
		["i", "images/oklife.png"],
		["t", "You invest in Tesla and its share price rises dramatically in the next two years."],
		["t", "You enjoy a relaxing life and are rich."],
		["b", "Restart and take a more risky path.", "Start"],
	],

	"Interns": [
	["i", "images/oklife.png"],
	["t", "Your interns are understanding and not questioning your investment decisions."],
	["t", "You no longer think about GameStop and enjoy a relaxing life."],
	["b", "Restart.", "Start"],
	],

	"Out": [
	["i", "images/lemon.png"],
	["t", "You got squeezed like a lemon. These WSB guys won, but at least it's over."],
	["t", "You make a heavy loss and will never short shares again."],
	["b", "Restart.", "Start"],
	],

	"Research":[
		["i", "images/hf-short.png"],
		["t", "You publish your opinion on GameStop on your website. You are also required to notify the SEC, the financial watchdog, about your moves. You are a huge Hedge Fund and regulators want to know what you are up to."],
		["t", "Not many people are taking notice of your report. It is a failing business, after all. You've heard some rumors that Michael Burry and a bunch of crazy Reddit guys are bullish on the GameStop stock. You think they are crazy."],
		["t", "Everything is going well for you. GameStop tried to sell itself to save it, but no one wants to buy it. Haha, this is going fantastic. "],
		["i", "images/dogfood.png"],
		["t", "Then, out of nowhere, an investor named Ryan Cohen invests in GameStop. He successfully built an online pet-food retailer and many people pin their hopes on him to transform GameStop. You spill your coffee and laugh. A pet-food-style transformation for GameStop? This is getting better and better."],
       		["b", "You give interviews and tell newspapers you remain short on GameStop.", "WSB2"],
		["b", "You get nervous after all and close your short positions", "Interns"]
    ],	
	"WSB2":[
		["i", "images/bird.png"],
		["t", "The situation is getting slightly worrying. There is a group on Reddit called Wallstreetbets and they are so freaking bullish on GameStop, they are buying up shares and thus driving up the price. This is madness, you think to yourself."],
		["t", "GameStop shares are at $10 now. This is bad. Not only do you need to pay small fees to the Pension Fund or your broker for borrowing the shares, these fees are also going up when the shares unexpectedly go up. This is because the price gap widens, thereby creating more risk for the brokers, for instance."],
		["t", "This is insane. WSB people seem to think a fair share price would be somewhere around $30 to $60, given a potential digital transformation of the company."],
		["t", "You know that the more GameStop shares rise, the higher your loss will be. You need to do something."],
		["b", "You publish another report slamming GameStop's future prospects.", "Melvin"],
		["b", "You buy back shares at $10, take a heavy loss but at least it's over. You invest in Tesla instead.", "Interns"]
	],
	"Melvin":[
		["i", "images/exclam.png"],
		["t", "Shares are at $30 now. This is not good."],
		["t", "What is even worse, GameStop is heavily shorted. You weren't the only one to speculate on falling share prices. In fact, the short interest of GameStop is at 140%. Which means that they are over-shorted. Which means that all who borrowed shares will need to find 140% of shares to return, but there are only 100% of them. And many of them are held by company officials who are not allowed to sell them."],
		["t", "You discuss with your fellow Wall Street friends and no one knows what's happening."],
		["t", "You know you need to buy back the shares in the very near future. Because you agreed with the original owners a certain date at which to return the shares."],
		["t", "It's a public battle now. People on WSB, Discord and Twitter are jumping on the GameStop train, buying shares. Shares are trading at over $100 now. You are deep under water with your shorts and need to raise cash."],
		["b", "You call some business partners and ask for a cash injection.", "Hold"],
		["b", "You end it all and buy shares at a heavy loss.", "Interns"]
    ],	
	"Hold":[
		["i", "images/friends.png"],
		["t", "Your Wall Street friends give you some cash. They also want you to be smart about the situation and eliminate your short positions, i.e. buy back shares and return them."],
		["t", "Lucky for you, so many people have joined this WSB movement that it's pure speculation by now. GameStop shares rise to $110, before falling back to $60. Secretly, you buy some shares and close some of your positions."],
		["t", "This is chaos out there. Feeloaders have been appearing and try to pump and dump other shares too. Such as Nokia or Nakd."],
		["t", "You hear that many popular brokers restrict trading in GameStop. You chuckle. These brokers allowed people to trade stocks on margin, which means these people borrow money from these brokers to trade the shares. This was a fine way of enticing young people to trade. But now these brokers are getting nervous and restricting margin trades."],
		["t", "The brokers' trading restrictions brought GameStop shares down a bit. People still talk about a 130% short interest, but you know that many of these positions are new ones and no longer the initial $5-positions which proved desastrous. All is well then."],
		["b", "It's Thursday now. You have closed all your short positions. You go to bed.", "Showdown"],
		["b", "It's Thursday now. You have closed all your short positions and visit your local GameStop, which has closed down. You go to bed.", "Showdown"]
	],
	"Showdown":[
		["i", "images/manrich.png"],
		["t", "You slept well and feel calm. You know you generated a heavy loss with your short positions. You publicly announce you will no longer be publishing your research reports about short-selling."],
		["t", "You review the past couple of days. Influential CEOs of electric car companies have publicly sided with WSB. Shouldn't have shorted their company, you think to yourself."],
		["t", "Trading limitations are still in place for the ordinary investors. Suits them well, you think. They shouldn't organise themselves and do such trades. Bad for your business."],
		["t", "You call up some of your Wall Street friends. Many made billions out of the whole frenzy. Especially your friends that bought trading information from those brokers, thereby being able to anticipate market movements, i.e. share price directions. You congratulate them."],
		["t", "Even though people are angry with Wall Street and the brokers, there is no showdown today. GameStop shares have fallen and many first-time retail investors might get burned.", "Dog"],
		["b", "You pet your dog.", "Dog"]	
	],
	"Dog":[
		["i", "images/bored.png"],
		["t", "What a crazy world, you think to yourself. Luckily, you're still in business. The show will go on. Nothing to see here anymore."],
		["t", "You walk your dog."],
		["r", "Retry"]
	]
}			
