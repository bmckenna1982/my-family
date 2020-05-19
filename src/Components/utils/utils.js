import moment from 'moment'

const extractWeekday = (date) => {
  return moment(date).format('ddd')
}

const extractDayOfMonth = (date) => {
  return moment(date).format('D')
}

const nowHour = (date) => {
  return moment(date).add(1, 'hour').format('H:00')
}

const endHour = (date) => {
  return moment(date).add(2, 'hour').format('H:00')
}

const eventDate = (date) => {
  if (moment(date).format('ll') === moment([]).format('ll')) {
    return 'Today'
  }
  return moment(date).format('ddd D')
}

const eventTime = (time) => {
  const timeArr = time.split(':')
  const hour = timeArr[0] % 12
  const timePeriod = timeArr[0] > 11 ? 'PM' : 'AM'
  return `${hour}:${timeArr[1]} ${timePeriod}`
}

const getCurrentDay = () => {
  return moment([]).format('D')
}

const extractMonth = (date) => {
  return moment(date).format('MMMM')
}

const formatForCompare = date => {
  return moment(date).format('LL')
}

export {
  extractWeekday,
  extractDayOfMonth,
  nowHour,
  endHour,
  eventDate,
  eventTime,
  getCurrentDay,
  extractMonth,
  formatForCompare,
}