export const ALL_CAMPAIGNS = [
	{
		campaignId: "decrimnow",
		campaign: {
			id: "decrimnow",
			title: "Full decriminalisation",
			host: "Scotland for Decrim",
			channel: "email",
			target: "msps",
			blurb: `Scotland for Decrim is a grassroots campaign fighting for the full decriminalisation of sex work in Scotland.`,
			link: "https://scotlandfordecrim.org/",
			prompts: [
				{
					id: "yourname",
					question: "Your name:",
					answerType: "text",
					required: true,
					answer: null,
				},
			],
			subject: "Scotland needs decriminalisation",
			bcc: "Scotland4Decrim@proton.me",
			template: `Dear MSPs,

I’m contacting you as a constituent to ask you to support sex workers' rights, and to work to achieve the full decriminalisation of sex work in Scotland. Decriminalisation enables sex workers to work together for safety: decriminalisation saves lives.

The poverty crisis in Scotland is driving increasing numbers of people into sex work, especially women and mothers. The government needs to take urgent action to rebuild the social safety net and enable everyone to access state support, so that fewer people have to rely on sex work to meet their needs.

At the same time, the law on sex work in Scotland puts sex workers in danger, and it must change. The partial criminalisation of sex work in Scotland forces sex workers to work alone indoors, or in more isolated areas on the street, in order to avoid being fined or arrested by the police for soliciting or ‘brothel-keeping’. This puts them at increased risk of violence from clients or the police, with no one around to help keep them safe. Criminalisation of sex workers through fines or arrests pushes sex workers further into poverty, and prevents them from being able to exit sex work. There will be people in your constituency who are facing this situation. Please take action to protect them.

Northern Ireland and Ireland (amongst some other European countries) have implemented the "Nordic Model" on sex work, which means criminalising the purchase of sex. But evidence shows that the Nordic Model has failed everywhere it has been implemented: sex workers in Nordic Model countries continue to report receiving fines, being arrested, being evicted from their homes or deported, as a result of doing sex work. Client criminalisation puts sex workers in danger, forcing them to avoid the police, and increasing the poverty, stigma, and violence they face. Client criminalisation also drives sex workers away from support services, and worsens their health outcomes.

Not only does the Nordic Model make sex workers less safe, it is also rejected by the Scottish public. A YouGov poll of 1,088 Scottish adults, carried out for National Ugly Mugs (NUM), the UK’s sex worker victim support charity, shows that Scots firmly oppose this controversial sex work policy agenda: only 14% of those polled supported the government passing new laws to prevent people exchanging sexual services for money. Instead, 69% of Scots say the Scottish Government should focus on protecting the health and safety of sex workers. 62% also oppose the Scottish Government’s declaration that sex work always equals violence against women, with only 13% supporting this idea.

Every sex worker-led organisation in the UK is calling for the full decriminalisation of sex work. Decriminalisation would enable sex workers to work together for safety, without fearing fines, arrests or deportation. The full decriminalisation of sex work is also endorsed by organisations including Amnesty International, the World Health Organisation, the UN Working Group on Discrimination against Women and Girls, StopAIDS, and many others.

Please email Scotland for Decrim at scotland4decrim@proton.me to receive a briefing with more information, and to arrange a meeting to discuss this further.

Thank you,
<<yourname>>`,
			customTarget: [""],
		},
	},
];
