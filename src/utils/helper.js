// returns deep copy of parameter
function deepClone (data) {
    let value, key

    if (typeof data !== 'object' || data === null) {
        return data // Return the value if data is not an object
    }

    // Create an array or object to hold the values
    const clone = Array.isArray(data) ? [] : {}

    for (key in data) {
        if (hasOwnProperty(data, key)) { // use hasOwnProperty to prevent sonar code smell
            value = data[key]

            // Recursively (deep) copy for nested objects, including arrays
            clone[key] = deepClone(value)
        }
    }

    return clone
}

// returns if parameter is an empty object (true) or not (false)
const isEmpty = obj => obj.constructor === Object && Object.keys(obj).length === 0

/**
 * @description Pass an object and value. Initialize all keys with value
 * !!! mutates original object
 */
const setValueToAllKeys = (obj, value) => {
    for (const key in obj) {
        if (hasOwnProperty(obj, key)) {
            obj[key] = value
        }
    }
}

/**
 * @description Pass value and if value is empty, get separater else value
 * !!! To be used as a filter in template
 * @param {string|number} value => 10/0/"Harry"/""
 * @returns {string} => 10/0/"Harry"/"-"
 */
const replaceEmptyValue = (value, separator = '-') => {
    if (value || value === 0) {
        return value
    }

    return separator
}

/**
 * @description Pass object and key. Returns whether the key is present in the object or not
 * @param {object} obj
 * @param {string} key
 * @returns {boolean} true => if obj has key. false => obj doesn't have key
 */
const hasOwnProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)

/**
 * @description Copies a string to the clipboard.
 * @param {string} text
 * @see {@link https://komsciguy.com/js/a-better-way-to-copy-text-to-clipboard-in-javascript/}
 */
const copyToClipboard = (text) => {
    const listener = function (ev) {
        ev.preventDefault()
        ev.clipboardData.setData('text/plain', text)
    }

    document.addEventListener('copy', listener)
    document.execCommand('copy')
    document.removeEventListener('copy', listener)
}

/**
 * @description Sorts and returns the array
 * @param {array} array
 * @param {string} key => key to be accessed
 * @param {string} order => can be asc, des or ''
 * @see {@link https://stackoverflow.com/a/53279602}
 */
const sortBy = (array, key, order) => {
    if (order !== 'asc' && order !== 'des') { return array }

    const undefinedAndNulls = array.filter(val => val[key] === null || val[key] === undefined)

    const numbers = array.filter(val => !isNaN(val[key]) && val[key] !== null)

    const strings = array.filter(val => val[key] && isNaN(val[key]))
    const sortedStrings = strings.sort((a, b) => {
        const val1 = a[key] || ''
        const val2 = b[key] || ''
        const valueA = val1.toString().trimLeft()
        const valueB = val2.toString().trimLeft()

        return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
    })

    if (order === 'asc') {
        const sortedNumbers = numbers.sort((a, b) => a[key] - b[key])

        return [...undefinedAndNulls, ...sortedNumbers, ...sortedStrings]
    }

    if (order === 'des') {
        const sortedNumbers = numbers.sort((a, b) => b[key] - a[key])

        return [...sortedStrings, ...sortedNumbers, ...undefinedAndNulls]
    }
}

/**
 * @param {array} array array of objects
 * @param {string} filterKey object's key used for filtering
 * @param {string|number|boolean} filterValue value used for filtering
 * @param {boolean} exactSearch if true, return exact match array
 */
const filterBy = (
    array,
    filterKey,
    filterValue,
    exactSearch = false
) => {
    filterValue = filterValue.toString().toLowerCase()

    if (exactSearch) {
        return array.filter(item => {
            return item[filterKey].toString().toLowerCase() === filterValue
        })
    }

    return array.filter(item => {
        return item[filterKey].toString().toLowerCase().includes(filterValue)
    })
}

/**
 * @param {array} array array of objects
 * @param {object} filterList object containing filterKeys and filterValues
 */
const filterTableData = (array, filterList) => {
    for (const filterKey in filterList) {
        const filterValue = filterList[filterKey]
        if (filterValue) {
            array = filterBy(array, filterKey, filterValue)
        }
    }

    return array
}

/**
 * @param {array} array array of objects
 * @param {object} sortList object containing sortKeys and sortValues
 */
const sortTableData = (array, sortList) => {
    for (const key in sortList) {
        const sortOrder = sortList[key]
        if (sortOrder) {
            return sortBy(array, key, sortOrder)
        }
    }

    return array
}

/**
 * @param {array} array array of objects
 * @param {object} pagination object containing pagination info
 */
const paginateTableData = (array, pagination) => {
    const tableData = []
    const itemsPerPage = pagination.item_per_page
    const total = itemsPerPage * pagination.page

    const startIndex = total - pagination.item_per_page
    const endIndex = total

    for (let i = startIndex, j = 0; i < endIndex; i++, j++) {
        if (!array[i]) { // if array length is less than item_per_page
            i = endIndex
        } else {
            tableData[j] = array[i]
        }
    }

    return tableData
}

/**
 * @description passed function to be executed after passed milliseconds
 * @param {function} func
 * @param {number} delay in milliseconds
 */
function debounce (func, delay = 1000) {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments

        clearTimeout(debounceTimer)

        debounceTimer = setTimeout(
            () => func.apply(context, args),
            delay
        )
    }
}

export {
    deepClone,
    isEmpty,
    setValueToAllKeys,
    replaceEmptyValue,
    hasOwnProperty,
    copyToClipboard,
    sortBy,
    filterBy,
    filterTableData,
    sortTableData,
    paginateTableData,
    debounce
}
