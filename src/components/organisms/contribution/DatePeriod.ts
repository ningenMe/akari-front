import dayjs from 'dayjs'

export type DatePeriod = {
  startDate: Date
  endDate: Date
}

export const getEndDate = (startDayjs: dayjs.Dayjs) : dayjs.Dayjs => {
  return startDayjs.add(6,'M').subtract(1,'d')
}

export const getInitDatePeriod = ():DatePeriod => {
  const today = dayjs().subtract(2, 'M')
  const baseDay = today.hour(0).minute(0).second(0)
  {
    const startDate = baseDay.subtract(1,'y').month(9).date(1)
    const endDate = getEndDate(startDate)
    if (startDate <= today && today <= endDate) {
      return {
        startDate: startDate.toDate(),
        endDate: endDate.toDate()
      }
    }
  }
  {
    const startDate = baseDay.month(3).date(1)
    const endDate = getEndDate(startDate)
    if (startDate <= today && today <= endDate) {
      return {
        startDate: startDate.toDate(),
        endDate: endDate.toDate()
      }
    }
  }
  const startDate = baseDay.month(9).date(1)
  const endDate = getEndDate(startDate)
  return {
    startDate: startDate.toDate(),
    endDate: endDate.toDate()
  }
}

export const getFormatDate = (date: Date): string => {
  return date.getFullYear().toString()
    + '-' + (date.getMonth()+1).toString().padStart(2, '0')
    + '-' + date.getDate().toString().padStart(2, '0')
      .replace(/\n|\r/g, '');
}
