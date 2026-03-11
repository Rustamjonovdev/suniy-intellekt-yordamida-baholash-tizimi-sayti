import * as XLSX from 'xlsx'

export async function parseExcelFile(file) {
  const ext = file.name.split('.').pop().toLowerCase()

  if (!['xlsx', 'xls', 'csv'].includes(ext)) {
    throw new Error('Iltimos, Excel yoki CSV fayl yuklang')
  }

  if (ext === 'csv') {
    const text = await file.text()

    return text
      .split('\n')
      .slice(1)
      .filter(line => line.trim())
      .map(line => {
        const parts = line.split(',')
        return {
          question: parts[0]?.replace(/"/g, '').trim(),
          answer: parts[1]?.replace(/"/g, '').trim() || ''
        }
      })
      .filter(item => item.question)
      .slice(0, 30)
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      try {
        const wb = XLSX.read(e.target.result, { type: 'binary' })
        const ws = wb.Sheets[wb.SheetNames[0]]
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 })

        const parsed = []

        for (let i = 1; i < data.length; i++) {
          const row = data[i]
          if (!row || !row[0]) continue

          parsed.push({
            question: String(row[0] || '').trim(),
            answer: String(row[1] || '').trim()
          })
        }

        if (!parsed.length) {
          for (let i = 0; i < data.length; i++) {
            const row = data[i]
            if (!row || !row[0]) continue

            parsed.push({
              question: String(row[0] || '').trim(),
              answer: String(row[1] || '').trim()
            })
          }
        }

        resolve(parsed.slice(0, 30))
      } catch (err) {
        reject(err)
      }
    }

    reader.onerror = reject
    reader.readAsBinaryString(file)
  })
}