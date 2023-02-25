const loadData = async () => {
    const res = await fetch('http://127.0.0.1:5500/js/api-1-data.js');
    const data = await res.text()

    console.log(data.message)

}
loadData()