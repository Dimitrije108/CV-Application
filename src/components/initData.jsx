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
		jobDescription: "Help Desk Specialist for Self-Checkout machines",
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
