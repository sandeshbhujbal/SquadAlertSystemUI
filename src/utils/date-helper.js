const TIMEZONE_OFFSET = new Date().getTimezoneOffset()
const getNewDate = () => new Date()
const getCurrentMonth = () => getNewDate().getMonth()
const getCurrentYear = () => getNewDate().getFullYear()

const TODAY_EPOCH = getNewDate().getTime() + (TIMEZONE_OFFSET * 60)
const ONE_MONTH = () => new Date(getNewDate().setMonth(getCurrentMonth() - 1))
const ONE_MONTH_EPOCH = ONE_MONTH().getTime() + (TIMEZONE_OFFSET * 60)
const ONE_MONTH_FUTURE = () => new Date(getNewDate().setMonth(getCurrentMonth() + 1))
const ONE_MONTH_FUTURE_EPOCH = ONE_MONTH_FUTURE().getTime() + (TIMEZONE_OFFSET * 60)
const THREE_MONTHS = () => new Date(getNewDate().setMonth(getCurrentMonth() - 3))
const THREE_MONTHS_EPOCH = THREE_MONTHS().getTime() + (TIMEZONE_OFFSET * 60)
const THREE_MONTHS_FUTURE = () => new Date(getNewDate().setMonth(getCurrentMonth() + 3))
const THREE_MONTHS_FUTURE_EPOCH = THREE_MONTHS_FUTURE().getTime() + (TIMEZONE_OFFSET * 60)
const SIX_MONTHS = () => new Date(getNewDate().setMonth(getCurrentMonth() - 6))
const SIX_MONTHS_EPOCH = SIX_MONTHS().getTime() + (TIMEZONE_OFFSET * 60)
const SIX_MONTHS_FUTURE = () => new Date(getNewDate().setMonth(getCurrentMonth() + 6))
const SIX_MONTHS_FUTURE_EPOCH = SIX_MONTHS_FUTURE().getTime() + (TIMEZONE_OFFSET * 60)
const ONE_YEAR = () => new Date(getNewDate().setFullYear(getCurrentYear() - 1))
const ONE_YEAR_EPOCH = ONE_YEAR().getTime() + (TIMEZONE_OFFSET * 60)
const ONE_YEAR_FUTURE = () => new Date(getNewDate().setFullYear(getCurrentYear() + 1))
const ONE_YEAR_FUTURE_EPOCH = ONE_YEAR_FUTURE().getTime() + (TIMEZONE_OFFSET * 60)

/**
 * @description Pass date (in EPOCH or Date format) and get start of the day or end of the day
 * @param {Date|number} date => Mon Apr 19 2021 19:00:37 GMT+0530 (India Standard Time) or 1618770600000
 * @param {boolean} isStart => if true, start of the day, else end of the day
 * @returns {Date|number} modified date
 */
const setTimeOfTheDay = (date, isStart = true) => {
    const isDate = date instanceof Date
    if (!isDate) { // epoch
        date = new Date(date)
    }

    const result = date.setHours(
        isStart ? 0 : 23, // hrs
        isStart ? 0 : 59, // mins
        isStart ? 0 : 59, // secs
        isStart ? 0 : 999 // ms
    )

    if (!isDate) { // epoch
        return result
    }
    return new Date(result) // date object
}

const START_OF_THE_DAY_EPOCH = {
    TODAY: setTimeOfTheDay(TODAY_EPOCH),
    ONE_MONTH: setTimeOfTheDay(ONE_MONTH_EPOCH),
    ONE_MONTH_FUTURE: setTimeOfTheDay(ONE_MONTH_FUTURE_EPOCH),
    THREE_MONTHS: setTimeOfTheDay(THREE_MONTHS_EPOCH),
    THREE_MONTHS_FUTURE: setTimeOfTheDay(THREE_MONTHS_FUTURE_EPOCH),
    SIX_MONTHS: setTimeOfTheDay(SIX_MONTHS_EPOCH),
    SIX_MONTHS_FUTURE: setTimeOfTheDay(SIX_MONTHS_FUTURE_EPOCH),
    ONE_YEAR: setTimeOfTheDay(ONE_YEAR_EPOCH),
    ONE_YEAR_FUTURE: setTimeOfTheDay(ONE_YEAR_FUTURE_EPOCH)
}

const END_OF_THE_DAY_EPOCH = {
    TODAY: setTimeOfTheDay(TODAY_EPOCH, false),
    ONE_MONTH: setTimeOfTheDay(ONE_MONTH_EPOCH, false),
    ONE_MONTH_FUTURE: setTimeOfTheDay(ONE_MONTH_FUTURE_EPOCH, false),
    THREE_MONTHS: setTimeOfTheDay(THREE_MONTHS_EPOCH, false),
    THREE_MONTHS_FUTURE: setTimeOfTheDay(THREE_MONTHS_FUTURE_EPOCH, false),
    SIX_MONTHS: setTimeOfTheDay(SIX_MONTHS_EPOCH, false),
    SIX_MONTHS_FUTURE: setTimeOfTheDay(SIX_MONTHS_FUTURE_EPOCH, false),
    ONE_YEAR: setTimeOfTheDay(ONE_YEAR_EPOCH, false),
    ONE_YEAR_FUTURE: setTimeOfTheDay(ONE_YEAR_FUTURE_EPOCH, false)
}

/**
 * @description Pass range and get start date and end date
 * @param {string} range => 1/3/6 Months or 1 Year
 * @returns {object} containing startDate and endDate
 */
const getDateRange = (range, dateSelectionType) => {
    const DATE_RANGE = {
        '1 Month': dateSelectionType === 'future' ? ONE_MONTH_FUTURE() : ONE_MONTH(),
        '3 Months': dateSelectionType === 'future' ? THREE_MONTHS_FUTURE() : THREE_MONTHS(),
        '6 Months': dateSelectionType === 'future' ? SIX_MONTHS_FUTURE() : SIX_MONTHS(),
        '1 Year': dateSelectionType === 'future' ? ONE_YEAR_FUTURE() : ONE_YEAR()
    }

    return {
        startDate: dateSelectionType === 'future' ? getNewDate() : DATE_RANGE[range],
        endDate: dateSelectionType === 'future' ? DATE_RANGE[range] : getNewDate()
    }
}

/**
 * @description: Pass date object or epoch and get locale based date in string format
 * @param {Date|number} date => Mon Apr 19 2021 19:00:37 GMT+0530 (India Standard Time) or 1618770600000
 * @param {string} locales => "en-IN"
 * @param {object} options => other options
 * @returns {string} => "19/04/2021" or based on options and locale
 */
const convertDateToLocaleDateString = (
    date,
    locales = 'id-ID',
    options = undefined
) => {
    if (!date) return

    if (!(date instanceof Date)) {
        date = new Date(date)
    }

    return date.toLocaleDateString(locales, options)
}

/**
 * @description Pass epoch date and get locale based date time in string format
 * @param {number} date => 1594102712000
 * @param {string} locale => en-IE
 * @returns {string} date locale string => "31/7/2020, 15:18:32"
 */
const convertEpochToLocaleString = (date, locale = 'en-IE') => {
    if (!date) return null

    return new Date(date).toLocaleString(locale)
}

/**
 * @todo remove later and use convertDateToLocaleDateString instead
 * @description Pass epoch date and get locale based date time in string format
 * @param {number} date => 1594102712000
 * @param {string} locales => 'id-ID'
 * @param {object} options => other options
 * @returns {string} date locale string => "31/7/2020"
 */
const convertEpochToDateString = (date, locales = 'id-ID', options = undefined) => {
    if (!date) return null

    return new Date(date).toLocaleDateString(locales, options)
}

/**
 * @description Pass  Date Object and get hours value
 * @param {Date} date =>  Date Object
 * @returns {number} hour locale number => 7
 */
const getHourFromDate = (date) => {
    if (!date) return 0

    return date.getHours()
}

/**
 * @description Pass  Date Object and get Minutes value
 * @param {Date} date => Date Object
 * @returns {string} minutes locale Minutes => 7
 */
const getMinutesFromDate = (date) => {
    if (!date) return 0

    return date.getMinutes()
}

/**
 * @description Pass  Date Object and set Minutes value to it
 * @param {Date} date => new Date
 * @returns {Date} Date Object
 */
const setMinutesToDate = (date, minutes = 0) => {
    if (!date) return null

    return new Date(date).setMinutes(minutes)
}

/**
 * @description Pass  Date Object and Set Minutes value
 * @param {Date} date => new Date
 * @returns {Date} Date Object to return
 */
const setHoursToDate = (date, hours = 0) => {
    if (!date) return null

    return new Date(date).setHours(hours)
}

/**
 * @description Pass  Date Object and Set Minutes value
 * @param {Date} date => date to which time has to be attached
 * @param {Date} time => time info which needs to be attached to date
 * @returns {number} date in epoch format
 */
const attachTimeToDate = (date, time) => {
    if (!(date instanceof Date)) {
        date = new Date(date)
    }

    const hours = getHourFromDate(time)
    const minutes = getMinutesFromDate(time)

    return setMinutesToDate(
        setHoursToDate(
            date,
            hours
        ),
        minutes
    )
}

export {
    TODAY_EPOCH,
    ONE_MONTH,
    ONE_MONTH_EPOCH,
    ONE_MONTH_FUTURE,
    ONE_MONTH_FUTURE_EPOCH,
    THREE_MONTHS,
    THREE_MONTHS_EPOCH,
    THREE_MONTHS_FUTURE,
    THREE_MONTHS_FUTURE_EPOCH,
    SIX_MONTHS,
    SIX_MONTHS_EPOCH,
    SIX_MONTHS_FUTURE,
    SIX_MONTHS_FUTURE_EPOCH,
    ONE_YEAR,
    ONE_YEAR_EPOCH,
    ONE_YEAR_FUTURE,
    ONE_YEAR_FUTURE_EPOCH,
    getDateRange,
    convertDateToLocaleDateString,
    convertEpochToLocaleString,
    convertEpochToDateString,
    getHourFromDate,
    getMinutesFromDate,
    setMinutesToDate,
    setHoursToDate,
    setTimeOfTheDay,
    START_OF_THE_DAY_EPOCH,
    END_OF_THE_DAY_EPOCH,
    attachTimeToDate
}
