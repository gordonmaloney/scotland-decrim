export const ALL_CAMPAIGNS = [
	{
		campaignId: "decrimnow",
		campaign: {
			id: "decrimnow",
			title: "Full decriminalisation",
			host: "Scotland for Decrim",
			channel: "email",
			target: "msps",
			blurb: `Scotland for Decrim is a grassroots campaign fighting for the full decriminalisation of sex work in Scotland. We’re led by sex workers, demanding the changes that sex workers know we need to protect our safety, health, and human rights. For too long politicians and policymakers have ignored sex workers’ voices when making policy and laws about us - it’s time for that to change. You can help us to make our voices heard.`,
			link: "https://scotlandfordecrim.org/",
			prompts: [
				{
					id: "yourname",
					question: "Your name:",
					answerType: "text",
					required: true,
					answer: null,
				},
				{
					id: "whyimportant",
					question:
						"Say in your own words why sex workers’ rights are important to you:",

					answerType: "text",
					required: false,
					answer: null,
				},
			],
			subject: "Reject Regan’s dangerous Bill",
			bcc: "Scotland4Decrim@proton.me",
			template: `Dear MSPs,

I’m contacting you as a constituent to ask you to support sex workers' rights, and to reject Ash Regan’s dangerous proposed Bill. 

<<whyimportant>>

Evidence shows that the Nordic Model has failed everywhere it has been implemented: sex workers in Nordic Model countries continue to report receiving fines, being arrested, being evicted from their homes or deported, as a result of doing sex work. 

Client criminalisation puts sex workers in danger, forcing them to avoid the police, and increasing the poverty, stigma, and violence they face. Client criminalisation also drives sex workers away from support services, and worsens their health outcomes.

Liz Thomson, Amnesty International UK's Scotland programme director said: "If passed into law this Bill will cause many of the same harms against sex workers in Scotland as our researchers have documented in other jurisdictions where the purchase of sex is criminalised.

"As Amnesty's extensive worldwide consultations and first-hand research has shown, the main driver of sex work is poverty and the route to supporting those who want to exit sex work is to ensure that their economic and social rights like access to adequate housing, food and social security are upheld.

"We call on MSPs to oppose the bill and to ensure that the voices and experiences of sex workers are at the centre of any decision making in Scotland that impacts their lives."

Other organisations opposed to the Nordic Model include: the World Health Organisation, Human Rights Watch, National AIDS Trust, Scottish Drug Forum, and PCS Scotland.

In a 2019 review commissioned by the Northern Irish Ministry of Justice, the policy of criminalising the purchasing of sexual services in Northern Ireland was shown to be an abject failure. Reported assaults against sex workers increased by 225% from 2016 – 2018. Evidence suggested that, while some clients were deterred by the law, dangerous, violent and abusive clients remained unaffected by the legislation. Nearly all workers interviewed felt that the law had increased the stigmatisation of sex workers in ways that made them more anxious and which had a negative impact on their day to day life.

A 2018 systematic review of 28 years of global research found that any criminalisation of sex work (including client criminalisation) triples the likelihood of sex workers experiencing violence, and doubles their likelihood of acquiring HIV.

Not only does the Nordic Model make sex workers less safe, it is also rejected by the Scottish public. A YouGov poll of 1,088 Scottish adults, carried out for National Ugly Mugs (NUM), the UK’s sex worker victim support charity, shows that Scots firmly oppose this controversial sex work policy agenda. 69% of Scots say the Scottish Government should focus on protecting the health and safety of sex workers, and providing support to people who want to leave the industry, compared to 14% who support the government passing new laws to prevent people exchanging sexual services for money. Instead, 79% think the Scottish Government should consult sex workers and sex worker-led groups when considering new laws to keep sex workers safe (7% opposed).

Every sex worker-led organisation in the UK is calling for MSPs to vote against this proposed legislation. It is vital that policymaking is based on evidence rather than ideology, and does not seek to moralise – but rather, to create the best environment possible for vulnerable groups in society. In order to do so, consider sex workers’ autonomy and their ability to ask for what they know is best for them, and vote against this Bill.

Please email Scotland for Decrim at scotland4decrim@proton.me to receive a briefing with more information, and to arrange a meeting to discuss this further.

Thank you,
<<yourname>>`,
			customTarget: [""],
			accordion: [
				{
					q: `How do current laws put sex workers in danger?`,
					a: `Current laws on sex work force street-based sex workers to work in more isolated areas in order to avoid being fined or arrested by the police for ‘loitering’ or ‘soliciting’. Laws on ‘brothel-keeping’ mean that two sex workers aren’t allowed to work together indoors for safety, or they risk being prosecuted. Both of these laws put us more at risk of violence from clients or the police. Fines and convictions also trap sex workers in poverty and make it impossible for us to leave sex work if we want to.`,
				},
				{
					q: `Why don’t sex workers support the Nordic Model?`,
					a: `The Nordic Model increases the criminalisation of clients and increases police attention on sex workers, pushing sex workers further into poverty and increasing the stigma we face. Evidence from Ireland shows a 92% increase in sex workers reporting violence after the Nordic Model was implemented there. Criminalising clients does not lead to fewer people doing sex work because sex work is driven by poverty and financial need, not clients’ demand for services.`,
				},
				{
					q: `Why do sex workers want full decriminalisation?`,
					a: `Full decriminalisation puts power back into the hands of sex workers to choose when and how we work, without state or police interference unless we want to call on them for help. It would remove the risk we face of being fined or arrested, evicted from our homes, or deported, for doing sex work. Decriminalisation is proven to work: New Zealand decriminalised sex work in 2003 and sex workers there report an overall increase in safety, as they feel better able to refuse risky clients, to report violence from clients, and to access healthcare. National and international organisations like Amnesty International, Human Rights Watch, the World Health Organisation, and the UN Working Group on Discrimination Against Women and Girls also support full decriminalisation.`,
				},
			],
		},
	},
];
