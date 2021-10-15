import { MyError } from "./MyError.js";
const list = document.querySelector('.list')

export class Characters {
    _url;

    constructor(url) {
        this._url = url;
    }
    getCharacters() {
         fetch(this._url)
        .then(data => data.json())
        .then(data => {
            data.results.forEach(el => {
                list.innerHTML+=this.createCharacter(el)
            })
        })
        .catch(e=>new MyError(e.message));
    }
    createCharacter (data)  {
        return `
            <li class="list__item ">
                <div class="list__item_img-wrapper">
                    <img class="list__item_img" src='${data.image}' alt='${data.name}'/>
                </div>
        
                <div class="list__item_info">
                    <div class="name">Char Name: ${data.name}</div>
                    <div class="gender">Gender: ${data.gender}</div>
                    <div class="status">status: ${data.status}</div>
                    <div class="species">race: ${data.species}</div>
                </div>
            </li>
        `
    }
    filter (str) {
        fetch(this._url+'/?name='+str)
        .then(data => data.json())
            .then(data => {
            data.results.forEach(el => {
                list.innerHTML+=this.createCharacter(el)
            })
        })
            .catch(e => {
                new MyError(e.message)
                alert('there is no results with that name')
                this.getCharacters()
            });
    }
}
export class Character extends Characters {
    constructor(url) {
        super(url)
    }
    getCharacter (id)  {
        fetch(this._url+'/'+id)
       .then(data => data.json())
       .then(data => {
           return data.name
       })
    }
}