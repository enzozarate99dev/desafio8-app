import { display } from '@mui/system';
import React from 'react'
import Card from './Cards';
import Button from '@mui/material/Button';


const Main =()=>(
    <main>
        <section className="hero">
 
            <h1>DESARROLLO DE APLICACIONES WEB</h1>
            <p>Especializados en el desarrollo de temas personalizados. Si tiene una empresa que busca presencia en la web o está buscando contratar, contácteme aquí .</p>

            <Button variant="contained" sx={{ backgroundColor:'#ffcb05' }}>Get Started</Button>
        </section>
        <section className="cards">
            <Card title="Git" description="lorem ipsum"></Card>
            <Card title="JS" description="lorem  ipsum"></Card>
        </section>
        <style jsx>
            {`
            .cards{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
            }
            .hero{
                width: 100%;
                height: 750px;
                background-color: indigo ;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            `}
            
        </style>
    </main>
)
export default Main