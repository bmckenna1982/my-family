import moment from 'moment'

export function extractWeekday(date) {
  return moment(date).format('ddd')
}

export function extractDayOfMonth(date) {
  return moment(date).format('D')
}

export function nowHour(date) {
  return moment(date).add(1, 'hour').format('H:00')
}

export function endHour(date) {
  return moment(date).add(2, 'hour').format('H:00')
}