let id = window.location.href.split('=').at(-1)
let description = document.querySelector('.description')
let title = document.querySelector('.title')
let url = 'http://localhost:3001/user'


axios.get(url + '/' + id)
    .then(res => showInfo(res.data))

const showInfo = (data) => {
    title.innerHTML = `User: ${id} - ${data.name}`

        description.innerHTML += `
        <p>
                {
                    "id": ${id},<br>
                    "name": "${data.name}",<br>
                    "username": "${data.username}",<br>
                    "email": "${data.email}",<br>
                    "address": {<br>
                      "street": "${data.address.street}",<br>
                      "suite": "${data.address.suite}",<br>
                      "city": "${data.address.city}",<br>
                      "zipcode": "${data.address.zipcode}",<br>
                      "geo": {<br>
                        "lat": "${data.address.geo.lat}",<br>
                        "lng": "${data.address.geo.lng}"<br>
                      }<br>
                    },<br>
                    "phone": "${data.phone}",<br>
                    "website": ${data.website}",<br>
                    "company": {<br>
                      "name": "${data.company.name}",<br>
                      "catchPhrase": "${data.company.catchPhrase}",<br>
                      "bs": "${data.company.bs}"<br>
                    }<br>
                
            </p>
        `
    }


