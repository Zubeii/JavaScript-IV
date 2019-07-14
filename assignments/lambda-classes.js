class Person {
	constructor(people) {
		this.name = people.name;
		this.age = people.age;
		this.location = people.location;
	}
	speak() {
		return `Hello my name is ${this.name} I am from ${this.location}`;
	}
}

class Instructor extends Person {
	constructor(skills) {
		super(skills);
		this.specialty = skills.specialty;
		this.favLanguage = skills.favLanguage;
		this.catchPhrase = skills.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}`;
	}
}

class Student extends Person {
	constructor(students) {
		super(students);
		this.previousBackground = students.previousBackground;
		this.className = students.className;
		this.favSubjects = students.favSubjects;
	}
	listsSubjects() {
		console.log(`${this.favSubjects}`);
	}
	PRAssignment(subject) {
		return `${student.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject) {
		return `${student.name} has begun sprint challenge on ${subject}`;
	}
}

class TeamLead extends Instructor {
	constructor(lead) {
		super(lead);
		this.gradClassName = lead.gradClassName;
		this.favInstructor = lead.favInstructor;
	}
	standUp(name, channel) {
		return `${name} announces to ${channel}, @channel stand up times`;
	}
	debugCode(student, subject) {
		return `${name} debugs ${student.name}'s code on ${subject}`;
	}
}

const fred = new Instructor({
	name        : 'Fred',
	location    : 'Bedrock',
	age         : 37,
	favLanguage : 'JavaScript',
	specialty   : 'Front-end',
	catchPhrase : `Don't forget the homies`,
});

console.log(fred.age);

const amine = new Student({
	name               : 'Amine',
	location           : 'Holbrook',
	age                : 35,
	favSubjects        : 'Javascript',
	specialty          : 'Full-Stack',
	previousBackground : 'IT',
	className          : 'webPT8',
	favSubjects        : [ 'Html', 'CSS', 'JavaScript' ],
});
console.log(amine.listsSubjects);
console.log(amine.favSubjects);
