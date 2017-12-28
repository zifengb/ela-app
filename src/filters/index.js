// import comStr from '../constants/common'

// /**
//  * @author Zhenyu
//  * @date 2017/08/23
//  * @description 2017-09-12=>Sept || 2017-09-12 =>12
//  * 格式：adaptDate('2017-09-12', 'm|d|md|', 'ZH')
//  * @return String 9月12日
//  */
// export function adaptDate (date, type, lang) {
//   if (!date) return

//   let monthDayStr = ''
//   const month = Number(date.split('-')[1]),
//     day = date.split('-')[2]
//   if (type === 'm') {
//     if (lang === 'ZH') {
//       return month + '月'
//     } else {
//       return comStr.monthEN[month - 1]
//     }
//   } else if (type === 'd') {
//     return day
//   } else if (type === 'md') {
//     if (lang === 'ZH') {
//       monthDayStr = month + '月' + day + '日'
//     } else {
//       monthDayStr = comStr.monthEN[month - 1] + ' ' + day
//     }
//     return monthDayStr
//   }
// }

// /**
//  * @author Zhenyu
//  * @date 2017/08/23
//  * @description 2017-07-21 =>Fri || 2017-07-21 =>周五
//  * 格式：dateToWeek('2017-07-21', 'ZH')
//  * @return String 周五
//  */
// export function dateToWeek (date, lang) {
//   if (!date) return

//   const year = date.split('-')[0],
//     month = date.split('-')[1],
//     day = date.split('-')[2]
//   const myDate = new Date(year, Number(month) - 1, day)
//   let weekStr = ''
//   if (lang === 'ZH') {
//     weekStr = '周' + comStr.dayZH[myDate.getDay()]
//   } else {
//     weekStr = comStr.dayEN[myDate.getDay()]
//   }
//   return weekStr
// }
// /**
//  * @author Zicong
//  * @date 2017/09/21
//  * @description 2017-07-21 =>Fri || 2017-07-21 =>周五 如果日期为今天 会显示今天
//  * 格式：dateToWeek('2017-07-21', 'ZH')
//  * @return 周五
//  */
// export function dateToWeekOfToday (date, lang) {
//   if (!date) return

//   const temDate = new Date()

//   if (temDate.toDateString() === new Date(date).toDateString()) {
//     return '今天'
//   }

//   if (new Date(temDate.getTime() + 24 * 60 * 60 * 1000).toDateString() === new Date(date).toDateString()) {
//     return '明天'
//   }

//   const year = date.split('-')[0],
//     month = date.split('-')[1],
//     day = date.split('-')[2]
//   const myDate = new Date(year, Number(month) - 1, day)
//   let weekStr = ''
//   if (lang === 'ZH') {
//     weekStr = '周' + comStr.dayZH[myDate.getDay()]
//   } else {
//     weekStr = comStr.dayEN[myDate.getDay()]
//   }
//   return weekStr
// }
// /**
//  * @author Zhenyu
//  * @date 2017/09/22
//  * @description 20170721 =>Fri || 20170721 =>周五
//  * 格式：dateToWeek('20170721', 'ZH')
//  * @return String 周五
//  */
// export function dateStrToWeek (dateStr, lang) {
//   if (!dateStr) return

//   const year = dateStr.substr(0, 4),
//     month = dateStr.substr(4, 2),
//     day = dateStr.substr(6, 2)
//   const myDate = new Date(year, Number(month) - 1, day)
//   let weekStr = ''
//   if (lang === 'ZH') {
//     weekStr = '周' + comStr.dayZH[myDate.getDay()]
//   } else {
//     weekStr = comStr.dayEN[myDate.getDay()]
//   }
//   return weekStr
// }
// /**
//  * @author Zhenyu
//  * @date 2017/11/08
//  * @description 2017-11-16 05:25 =>Fri || 2017-11-16 周四 05:25
//  * 格式：dateToWeek('20170721', 'ZH')
//  * @return String 周五
//  */
// export function datetimeStrToFormatStr (datetimeStr, lang) {
//   if (!datetimeStr) return

//   let resStr = ''
//   try {
//     var datetime = datetimeStr.split(' ')
//     resStr = datetime[0] + ' ' + dateToWeek(datetime[0], lang) + ' ' + datetime[1]
//   } catch (e) {
//     // dosomething
//   }
//   return resStr
// }
// /**
//  * @author Zhenyu
//  * @date 2017/07/27
//  * @description dateTimeStr=>时间
//  * 格式：dateStrToHHMM('2017-01-11 14:30')
//  * @return String HHMM (14:30)
//  */
// export function dateStrToHHMM (dateTimeStr) {
//   var hhmm = ''
//   try {
//     hhmm = dateTimeStr.split(' ')[1]
//   } catch (e) {
//     // dosomething
//   }
//   return hhmm
// }
// /**
//  * @author Zhenyu
//  * @date 2017/07/27
//  * @description duration=>时间
//  * 格式：mkFormatXhXm('15:30')
//  * @return String HHMM (15h30m)
//  */
// export function mkFormatXhXm (hhmm) {
//   var res = ''
//   try {
//     const hhmmArr = hhmm.split(':')
//     if (parseInt(hhmmArr[0]) === 0) {
//       res = parseInt(hhmmArr[1]) + 'm'
//     } else {
//       if (parseInt(hhmmArr[1]) === 0) {
//         res = parseInt(hhmmArr[0]) + 'h'
//       } else {
//         res = parseInt(hhmmArr[0]) + 'h' + parseInt(hhmmArr[1]) + 'm'
//       }
//     }
//   } catch (e) {
//     // dosomething
//   }
//   return res
// }
// /**
//  * @author Zhenyu
//  * @date 2017/08/23
//  * @description 1249 => ¥1,249
//  * 格式：currencyInt(1249, '¥')
//  * @return String ¥1,249
//  */
// export function currencyInt (price, symbol, noDecimalFlag) {
//   if (price === null || price === undefined) {
//     return ''
//   }

//   const priceArr = typeof price !== 'string' ? String(price).split('.') : price.split('.'),
//     currencyList = []

//   priceArr[1] = priceArr[1] ? priceArr[1] + '00' : '00'

//   for (let i = 0, len = priceArr[0].length; i < len; i++) {
//     currencyList.push(priceArr[0].substr(len - i - 1, 1))
//     if (i !== 0 && i + 1 !== len && (i + 1) % 3 === 0) {
//       currencyList.push(',')
//     }
//   }

//   if (symbol) {
//     // symbol = symbol
//     symbol += ' '
//   } else {
//     symbol = ''
//   }

//   return symbol + currencyList.reverse().join('') + (noDecimalFlag ? '' : '.' + priceArr[1].substr(0, 2))
// }

// /**
//  * @author Zicong
//  * @date 2017/08/30
//  * @description 2017-08-17 12:40 => 08-17 周五
//  * 格式：dateToWeek('2017-07-21', 'ZH')
//  * @return String 08-17 周五
//  */
// export function dateToMMDDAndWeek (date, lang) {
//   if (!date) return

//   date = date.split(' ')[0]
//   const dateString = date.slice(5)
//   const year = date.split('-')[0],
//     month = date.split('-')[1],
//     day = date.split('-')[2]
//   const myDate = new Date(year, Number(month) - 1, day)
//   let weekStr = ''
//   if (lang === 'ZH') {
//     weekStr = '周' + comStr.dayZH[myDate.getDay()]
//   } else {
//     weekStr = comStr.dayEN[myDate.getDay()]
//   }
//   return dateString + ' ' + weekStr
// }

// /**
//  * @author Zicong
//  * @date 2017/08/30
//  * @description 195 => 3h15m
//  * 格式：minToHHMM(195)
//  * @return String 3h15m
//  */
// export function minToHHMM (mins) {
//   if (!mins) return
//   const hour = Math.floor(mins / 60)
//   const min = mins % 60
//   if (hour === 0) {
//     return min + 'm'
//   } else if (min === 0) {
//     return hour + 'h'
//   }
//   return hour + 'h' + min + 'm'
// }

// /**
//  * @author Zicong
//  * @date 2017/09/01
//  * @description 2017-09-01 09:55 => 09-01
//  * 格式：dateToHHMM('2017-09-01 09:55') || dateToHHMM('2017-09-01')
//  * @return String 09-01
//  */
// export function dateToHHDD (date) {
//   if (!date) return
//   date = date.split(' ')[0]
//   return date.slice(5, 7) + '-' + date.slice(8, 10)
// }

// /**
//  * @author Zhenyu
//  * @date 2017/09/22
//  * @description 20151202 => 2015-12-02
//  * 格式：dateStrToSplit('20170901')
//  * @return String 2017-09-01
//  */
// export function dateStrToSplit (dateStr) {
//   return dateStr.substr(0, 4) + '-' + dateStr.substr(4, 2) + '-' + dateStr.substr(6, 2)
// }

// /**
//  * @author Zhenyu
//  * @date 2017/09/29
//  * @description 330 => 05:30
//  * 格式：secondFormat('330')
//  * @return String 05:30
//  */
// export function secondFormat(seconds) {
//   var m = Math.floor((seconds / 60 % 60))
//   var s = Math.floor((seconds % 60))

//   if (m < 10) {
//     m = '0' + m
//   }
//   if (s < 10) {
//     s = '0' + s
//   }

//   return m + ':' + s
// }

// /**
//  * @author Zicong
//  * @date 2017/10/14
//  * @description 05:30 => 330
//  * 格式：HHMMToMin('05:30')
//  * @return Number 330
//  */
// export function HHMMToMin(str) {
//   if (!str) {
//     return
//   }

//   let h = parseInt(str.split(':')[0])
//   let m = parseInt(str.split(':')[1])

//   return h * 60 + m
// }

// /**
//  * @author Zhenyu
//  * @date 2017/09/30
//  * @description 2017-09-28T15:25:57.807+0800 => 2017-09-28 15:25
//  * 格式：dateFormat('2017-09-28T15:25:57.807+0800')
//  * @return String 2017-09-28 15:25
//  */
// export function dateFormat(dateStr) {
//   if (!dateStr) {
//     return ''
//   }

//   var tmp = dateStr.split('T')
//   var date = tmp[0]
//   var time = tmp[1]
//   var tmpTime = time.split(':')
//   var h = tmpTime[0]
//   var m = tmpTime[1]

//   return date + ' ' + h + ':' + m
// }

// /**
//  * @author Zhenyu
//  * @date 2017/09/30
//  * @description 1506583557774 => 2017-09-28 15:25
//  * 格式：timestampFormat('1506583557774')
//  * @return String 2017-09-28 15:25
//  */
// export function timestampFormat(timestamp) {
//   if (!timestamp) {
//     return ''
//   }

//   var date = new Date(timestamp)

//   var month = date.getMonth() + 1
//   var day = date.getDate()
//   var hour = date.getHours()
//   var min = date.getMinutes()

//   month = (month < 10 ? '0' : '') + month
//   day = (day < 10 ? '0' : '') + day
//   hour = (hour < 10 ? '0' : '') + hour
//   min = (min < 10 ? '0' : '') + min

//   return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + min
// }
