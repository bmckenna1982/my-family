import moment from 'moment'

export function extractWeekday(date) {
  return moment(date).format('ddd')
}

export function extractDayOfMonth(date) {
  return moment(date).format('D')
}