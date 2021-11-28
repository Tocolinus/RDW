import React from "react";
import './curator.scss'
import curatorPhoto from '../../images/foto-curator.png'

function CuratorItem() {

    return(
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador David"/>
            </div>
            <div className="curator__details">
                <div>
            <h3>David Gagliano</h3>
            <h6>Curadoria</h6>
                </div>
            <p>Graduando de engenharia de produção. Buscando inovação e melhorias, utilizando conhecimentos de engenharia de produção e soluções em TI.</p>
            </div>
        </div>
    )

}

export default CuratorItem