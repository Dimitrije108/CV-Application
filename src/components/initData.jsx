export const initPersonalDetails = {
	firstName: "",
	lastName: "",
	jobTitle: "",
	email: "",
	phone: "",
	country: "",
	city: "",
}

export const initEducation = {
	degree: "",
	school: "",
	city: "",
	startDate: "",
	endDate: "",
}


export const initEducationList = [
	{
		degree: "B.A. Archaeology",
		school: "Faculty of Philosophy",
		city: "Belgrade",
		startDate: "2014-10",
		endDate: "2020-09",
		id: crypto.randomUUID(),
	},
	{
		degree: "Package design",
		school: "Design school",
		city: "Belgrade",
		startDate: "2010-09",
		endDate: "2014-06",
		id: crypto.randomUUID(),
	},
]

export const initWorkHistory = {
	jobTitle: "",
	company: "",
	location: "",
	startDate: "",
	endDate: "",
	jobDescription: "",
}

export const initWorkHistoryList = [
	{
		jobTitle: "Help Desk Specialist",
		company: "NCR",
		location: "Belgrade",
		startDate: "2021-05",
		endDate: "2022-05",
		jobDescription: "Help Desk Specialist for Self-Checkout machines.",
		id: crypto.randomUUID(),
	},
	{
		jobTitle: "Archaeologist",
		company: "Zavod za zaštitu spomenika kulture",
		location: "Pančevo",
		startDate: "2018-10",
		endDate: "2021-01",
		jobDescription: "Writing and keeping the archaeological dig site journal, drawing archaeological finds, excavating the archeological site, etc.",
		id: crypto.randomUUID(),
	},
]

export const initSkillList = [
	{ skill: "HTML", id: crypto.randomUUID() },
	{ skill: "CSS", id: crypto.randomUUID() },
	{ skill: "JavaScript", id: crypto.randomUUID() },
	{ skill: "React", id: crypto.randomUUID() },
	{ skill: "NodeJS", id: crypto.randomUUID() },
]
