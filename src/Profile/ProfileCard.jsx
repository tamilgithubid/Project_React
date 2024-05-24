import React, { useState } from "react";
import Card from "./Card";
import muthu from '../assets/muthu.jpeg'
import tamil from '../assets/tamil.jpeg'
import sabari from '../assets/sabari.jpeg'
import prasanth from '../assets/prasanth.jpeg'
import broo from '../assets/broo.jpeg'
import '../Profile/Card.css'


const ProfileCard = () => {
    return (
        <section className="hero-section">
            <div className="card-grid">
                <Card
                    imgUrl={prasanth}
                    category="Software Engineer"
                    heading="Tester"
                />
                <Card
                    imgUrl={broo}
                    category="Software Engineer"
                    heading="FrontEnd Developer"
                />
                <Card
                    imgUrl={tamil}
                    category="Software Engineer"
                    heading="Frontend Developer"
                />
                <Card
                    imgUrl={sabari}
                    category=" Software Engineer"
                    heading="BackEnd Developer"
                />
                <Card
                    imgUrl={muthu}
                    category="Category"
                    heading="Pattern"
                />
            </div>
        </section>
    );
};



export default ProfileCard