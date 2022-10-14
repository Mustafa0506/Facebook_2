let url = 'http://localhost:3001/user'
let main = document.querySelector('main')

axios.get(url)
    .then(res => reload(res.data))



function reload(arr) {
    for(let item of arr){
        main.innerHTML += `
        <div class="block">
        <div class="title">${item.name}</div>
        <div class="description">Company: ${item.company.name}
            Website: ${item.website}
            Phone: ${item.phone}</div>
        <button class="more">Подробнее</button>
    </div>
        `
    }
}