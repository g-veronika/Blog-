import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './Form.css';

export default function Form() {

    const [article, setArticle] = useState({
        title: "",
        body: ""
    })

    const dispatch = useDispatch();  


    const handleForm = e => {
        e.preventDefault();
    }

    const handleInput = e => {

        console.log("HELLO")

    }


    return (

        <>
            <h1 className="title-form">Ecrivez un article</h1>
            <form onSubmit={handleForm} className="container-form">
                <label htmlFor="title">Titre</label>
                <input 
                onChange={handleInput}
                value={article.title}
                type="text" 
                id="title" 
                placeholder="Entrez votre nom"/>

                <label htmlFor="article">Votre article</label>
                <textarea 
                onChange={handleInput}
                value={article.body}
                id="article" 
                placeholder="Votre article"></textarea>

                <button>Envoyez l'article</button>

            </form>
        </>
    )
}
