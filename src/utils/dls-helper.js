// TABLE
/**
 * @param {object} tableRef => table reference
 * @param {number} index => index of row whose checkbox's value need to be toggled
 * @param {Boolean} value => whether row should be checked or unchecked
 */
const toggleRowSelection = (tableRef, index, value = true) => {
    const tableRow = tableRef.$el.querySelectorAll('tr')[index]
    if (!tableRow) { return }

    const checkbox = tableRow.querySelector('td>div>input')
    checkbox.checked = value
}

/**
 * @param {object} tableRef => table reference
 * @param {boolean} isUsingFilter => is table using filter
 * @description to be called when table row checkbox is checked/unchecked
 *
 *
 * if all rows are selected, select check all checbox
 * if none of the rows are selected, deselect check all checbox
 * if some rows are selected, attach 'partial' class
 */
const toggleCheckAllSelection = (tableRef, isUsingFilter = true) => {
    const tableRows = [...tableRef.$el.querySelectorAll('tr')]

    const checkAllCheckBoxWrapper = tableRows[0].querySelector('th>div')
    checkAllCheckBoxWrapper.classList.remove('b-partial')
    const checkAllCheckBox = checkAllCheckBoxWrapper.querySelector('input')
    checkAllCheckBox.checked = false

    tableRows.splice(0, isUsingFilter ? 2 : 1) // remove 1st two rows. i.e. table header and filter row or if not using filter will remove header only

    const checkboxes = tableRows.map(row => row.querySelector('td>div>input'))

    // return if there are no rows in table
    if (!checkboxes.length) { return }

    const allRowsChecked = checkboxes.every(checkbox => checkbox.checked)
    const allRowsUnchecked = checkboxes.every(checkbox => !checkbox.checked)

    if (allRowsChecked) {
        checkAllCheckBox.checked = true
        return
    }

    if (allRowsUnchecked) {
        return
    }

    // some rows are checked
    checkAllCheckBox.checked = true
    checkAllCheckBoxWrapper.classList.add('b-partial')
}

export {
    toggleRowSelection,
    toggleCheckAllSelection
}
