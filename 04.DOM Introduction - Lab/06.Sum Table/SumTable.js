function sumTable() {
    let sum=0
    let rows=document.querySelectorAll('tr')
    for (let i = 1; i < rows.length-1; i++) {
        const cols=rows[i].children
      sum+=Number(cols[cols.length-1].textContent)
    }
    document.getElementById('sum').textContent=sum
   }
