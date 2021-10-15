import { MyError } from "./MyError.js";

const list = document.querySelector(".list");

export class Episodes {
    _url;

    constructor(url) {
        this._url = url;
    }
    getEpisodes () {
              fetch(this._url)
                  .then(data =>data.json())
                  .then(data => {
                      data.results.forEach((el) => {
                      list.innerHTML += this.createEpisode(el);
                  });
                  })
                  .catch(e=>new MyError(e.message));
      };
    createEpisode (data) {
        return `
            <li class="list__item justify-content-start">
                <div class="list__item_info">
                    <div class="name">Episode Title: ${data.name}</div>
                    <div class="air-date">Air date: ${data.air_date}</div>
                    <div class="episode">episode: ${data.episode}</div>
                </div>
            </li>
        `;
    };
    filter(str) {
        fetch(this._url+ '/?name='+str)
        .then(data => data.json())
        .then(data => {
            data.results.forEach(el => {
                list.innerHTML+=this.createEpisode(el)
            })
        })
        .catch(e=>new MyError(e.message));
    }

}

export class Episod extends Episodes{
    constructor(url) {
        super(url)
    }
    getEpisode (id)  {
        fetch(this._url+'/'+id)
       .then(data => data.json())
       .then(data => {
           return data.name
       })
    }
}