export const ALL_CAMPAIGNS = [
	{
		campaignId: "timetodivest",
		campaign: {
			id: "timetodivest",
			title: "Demand LPF divest from apartheid",
			host: "Time to Divest Edinburgh",
			channel: "email",
			target: "custom",
			blurb:
				`The Lothian Pension Fund invests millions of pounds of council-workers' money in propping up Israeli apartheid. Will you write to the pensions committee and demand they vote to divest?`,
			link: "https://www.timetodivest.net/lapf-scotland/lothian/",
			prompts: [
				{
					id: "member",
					question: "Are you a member of the Lothian Pension fund?",
					answerType: "yesno",
					required: true,
					answer: null,
				},
				{
					id: "yourname",
					question: "Your name:",
					answerType: "text",
					required: true,
					answer: null,
				},
			],
			subject: "Divest from apartheid!",
			bcc: "",
			template: `I am writing as a concerned constituent regarding your role on the Lothian Pension Fund’s pensions committee and to express my strong support for the Edinburgh Time to Divest Campaign. I agree that there is a moral imperative to divest from Lockheed Martin, Northrop Grumman, General Dynamics, Caterpillar, Cisco and Siemens. Over 40,000 Palestinians have been killed and over 77,000 wounded in Israel’s relentless attack on Gaza whilst thousands are detained in the West Bank.

The advisory opinion from the International Court of Justice in July has now rendered beyond doubt Israel’s decades-long occupation of the Palestinian territories as illegal and amounting to apartheid. By continuing to hold investments in companies complicit in Israel’s illegal occupation, the Lothian Pension Fund is flagrantly neglecting its ESG responsibilities.

In response to the Russian invasion of Ukraine, the Lothian Pension Fund claimed that “respect for human rights is a priority engagement theme”. Respect for human rights is simply incompatible with continued investments in Israeli apartheid. Serious questions must also be asked about their fiduciary integrity as well. As the UN’s highest court has instructed all member states, including the UK, not to “render aid or assistance in maintaining” Israel’s illegal occupation, it is clear that divestment from complicit companies is both the moral and financially responsible course of action.

Lockheed Martin, Northrop Grumman and General Dynamics are arms manufacturers whose weapons systems are used by the IDF against Palestinian civilians.

Caterpillar provides demolition equipment, often militarised, to the IDF which is used to demolish Palestinian homes, clearing entire Palestinian villages that have existed for hundreds of years.

Siemens and Cisco are technology companies involved in the illegal settlement of the West Bank and the monitoring of the Palestinians living there.

Divestment represents an opportunity for the Pensions Committee to stand firmly on the side of its ESG commitments. I urge you to publicly support divestment and to take every possible measure to ensure it passes as a committee motion.
<<member=yes:
I am a pension holder with the LPF and am ashamed and infuriated to know my pension deductions are being used to invest in these complicit companies.
>>
I look forward to your response and to seeing your continued commitment to these crucial principles.

Yours sincerely,
<<yourname>>`,
			customTarget: [""],
		},
	},
];
