export function getBirthDate(): Date {
  return new Date('1999-11-26 18:0:0')
}

export function getAge(): number {
  const today = (new Date()).getTime()
  const birthDate = getBirthDate().getTime()
  
  return Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365.25))
}

export function getExperience(): Array<number> {
  const today = new Date()
  const experienceStartDate = new Date('2018-06-16')

  const yearsOfExperience = Math.floor((today.getTime() - experienceStartDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
  
  const diference = (today.getMonth() + 1) - (experienceStartDate.getMonth() + 1)
  let monthsOfExperience
  if (diference < 0) {
    monthsOfExperience = 12 + diference
  } else {
    monthsOfExperience = diference
  }

  return [yearsOfExperience, monthsOfExperience]
}

export function getExperienceAsString(): string {
  const [yearsOfExperience, monthsOfExperience] = getExperience()

  return `${yearsOfExperience} year${yearsOfExperience > 1 ? "s" : ""} and ${monthsOfExperience} month${monthsOfExperience > 1 ? "s" : ""}`
}