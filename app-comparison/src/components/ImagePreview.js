import React from 'react'



export default function ImagePreview({ src = "https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-2715.jpg?size=626&ext=jpg" }) {
    return (
        <div className="col s6">
            <img className="materialboxed" width="350" src={src}></img>
        </div>
    )
}
