import { makeAutoObservable } from "mobx"

export default class WordsData {

    words = [];
    isLoading = true;
    error = null;
    visible = false; 

    constructor() {
        makeAutoObservable(this);
    }

    setVisible = () => { 
        this.visible = !this.visible;
    } 

    getWords =  () => {
        this.isLoading = true;

        fetch(`/api/words`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                this.words = response;
            })
            .catch(error => {
                this.error = error;
            });
        this.isLoading = false;
    }

    editWord = (id, word) => {
        word.tags  = ''; 
        this.isLoading = true;
        fetch(`/api/words/${id}/update`,  { method: 'POST', body: JSON.stringify(word) })
            .then((response) => response.json())
            .then(() => {this.words = this.words.map(item => item.id === id ? word : item)});
        this.isLoading = false;
    }

    deleteWord = (id) => {
        this.isLoading = true;
        fetch(`/api/words/${id}/delete`, { method: 'POST' })
            .then((response) => response.json())
            .then(() => {this.words =  this.words.filter(n => n.id !== id)});
        this.isLoading = false;
    }

    addWord = (word) => {
        this.isLoading = true;
        fetch(`/api/words/add`, { method: 'POST', body: JSON.stringify(word) })
            .then((response) => response.json())
            .then((response) => this.words.push(response));
        this.isLoading = false;
    }

}


