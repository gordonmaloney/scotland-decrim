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
			subject: "Sex workers urgently need your support",
			bcc: "Scotland4Decrim@proton.me",
			template: `Dear MSPs,

I’m contacting you as a constituent to ask you to support sex workers' rights, and to work to achieve the full decriminalisation of sex work in Scotland. Decriminalisation enables sex workers to work together for safety: decriminalisation saves lives.

<<whyimportant>>

The poverty crisis in Scotland is driving increasing numbers of people into sex work, especially women and mothers. The government needs to take urgent action to rebuild the social safety net and enable everyone to access state support, so that fewer people have to rely on sex work to meet their needs.

At the same time, the law on sex work in Scotland puts sex workers in danger, and it must change. The partial criminalisation of sex work in Scotland forces sex workers to work alone indoors, or in more isolated areas on the street, in order to avoid being fined or arrested by the police for soliciting or ‘brothel-keeping’. This puts them at increased risk of violence from clients or the police, with no one around to help keep them safe. Criminalisation of sex workers through fines or arrests pushes sex workers further into poverty, and prevents them from being able to exit sex work. There will be people in your constituency who are facing this situation. Please take action to protect them.

Northern Ireland and Ireland (amongst some other European countries) have implemented the "Nordic Model" on sex work, which means criminalising the purchase of sex. Some MSPs are also campaigning to try and introduce this model in Scotland. But evidence shows that the Nordic Model has failed everywhere it has been implemented: sex workers in Nordic Model countries continue to report receiving fines, being arrested, being evicted from their homes or deported, as a result of doing sex work. Client criminalisation puts sex workers in danger, forcing them to avoid the police, and increasing the poverty, stigma, and violence they face. Client criminalisation also drives sex workers away from support services, and worsens their health outcomes.

Not only does the Nordic Model make sex workers less safe, it is also rejected by the Scottish public. A YouGov poll of 1,088 Scottish adults, carried out for National Ugly Mugs (NUM), the UK’s sex worker victim support charity, shows that Scots firmly oppose this controversial sex work policy agenda: only 14% of those polled supported the government passing new laws to prevent people exchanging sexual services for money. Instead, 69% of Scots say the Scottish Government should focus on protecting the health and safety of sex workers. 62% also oppose the Scottish Government’s declaration that sex work always equals violence against women, with only 13% supporting this idea.

Every sex worker-led organisation in the UK is calling for the full decriminalisation of sex work. Decriminalisation would enable sex workers to work together for safety, without fearing fines, arrests or deportation. The full decriminalisation of sex work is also endorsed by organisations including Amnesty International, the World Health Organisation, the UN Working Group on Discrimination against Women and Girls, StopAIDS, and many others. Please listen to sex workers’ demands, and take action to support them.

Please email the sex worker-led campaign Scotland for Decrim at scotland4decrim@proton.me to receive a briefing with more information, and to arrange a meeting to hear more about what sex workers wantdiscuss this further.

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
