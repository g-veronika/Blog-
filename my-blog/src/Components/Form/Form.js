import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './Form.css';

export default function Form() {

    const [article, setArticle] = useState({
        title: "",
        body: ""
    });

    const dispatch = useDispatch();  


    const handleForm = (e) => {
        e.preventDefault();

        dispatch({
            type: "ADDARTICLE",
            payload: article    
        })

        setArticle({
            title: "",
            body: ""
        })
    };

    const handleInput = (e) => {

        if(e.target.classList.contains("inp-title")) {
            const newObjState = {...article, title: e.target.value};
            setArticle(newObjState);
        }
        else if(e.target.classList.contains("inp-body")) {
            const newObjState = {...article, body: e.target.value};
            setArticle(newObjState);
        }

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
                placeholder="Entrez votre nom"
                className="inp-title"
                />

                <label htmlFor="article">Votre article</label>
                <textarea 
                onChange={handleInput}
                value={article.body}
                id="article" 
                placeholder="Votre article"
                className="inp-body"
                ></textarea>

                <button>Envoyez l'article</button>

            </form>
        </>
    )
}
