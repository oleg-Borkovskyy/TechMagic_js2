import {searchRickCount} from './counter.js'
import { Character} from './Character.js'
import { Episodes } from './Episode.js'

const characterUrl = 'https://rickandmortyapi.com/api/character'
const episodeUrl='https://rickandmortyapi.com/api/episode'
const searchInput=document.querySelector('.search__input')
const searchBtn=document.querySelector('.search__button')
const list = document.querySelector('.list')
const h1Title = document.querySelector('.title')
const charactersBtn=document.querySelector('.characters')
const episodesBtn = document.querySelector('.episodes')
let pageInfo = 'characters';
const counter=searchRickCount()

const char = new Character(characterUrl)
const episode = new Episodes(episodeUrl)

charactersBtn.addEventListener('click', event => {
    event.preventDefault();
    list.innerHTML = ''
    char.getCharacters()
    pageInfo = 'characters'
    h1Title.innerHTML='Rick and Morty Characters'
})

episodesBtn.addEventListener('click', event => {
    event.preventDefault();
    list.innerHTML = ''
    episode.getEpisodes()
    pageInfo = 'episodes'
    h1Title.innerHTML='Rick and Morty Episodes'

})

searchBtn.addEventListener('click', event => {
    event.preventDefault();
    list.innerHTML = ''
    pageInfo === 'characters' ?
        char.filter(searchInput.value)
        :
        episode.filter(searchInput.value);
    console.log(counter(searchInput.value))
    searchInput.value = ''
})

char.getCharacters(characterUrl)
h1Title.innerHTML='Rick and Morty Characters'
