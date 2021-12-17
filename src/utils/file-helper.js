/**
 * @description used to convert input stream to files and download it
 * @param {string} data => contents of the file
 * @param {string} mimeType => file extension (ex: 'text/csv')
 * @param {string} filename
 */
function downloadFile (
    data,
    mimeType = 'text/csv',
    filename = `file-${new Date().toLocaleString()}`
) {
    const blob = new Blob([data], {
        type: mimeType
    })

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename)
        return
    }

    const a = document.createElement('a')
    a.href = window.URL.createObjectURL(blob)
    a.download = filename
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

function downloadPdfFile (
    data,
    mimeType = 'application/pdf',
    filename = `file-${new Date().toLocaleString()}`
) {
    const binaryString = atob(data)
    const binaryLen = binaryString.length
    const bytes = new Uint8Array(binaryLen)
    for (let i = 0; i < binaryLen; i++) {
        const ascii = binaryString.charCodeAt(i)
        bytes[i] = ascii
    }
    // TODO: call downloadFile function instead
    const blob = new Blob([bytes], { type: mimeType })
    const a = document.createElement('a')
    a.href = window.URL.createObjectURL(blob)
    a.download = filename
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

export {
    downloadFile,
    downloadPdfFile
}
