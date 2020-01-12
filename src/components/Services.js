import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {

    state = {
        services: [
            {
                id: "1",
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est sed sem sollicitudin imperdiet."
            },
            {
                id: "2",
                icon: <FaHiking />,
                title: "endless hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est sed sem sollicitudin imperdiet."
            },
            {
                id: "3",
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est sed sem sollicitudin imperdiet."
            },
            {
                id: "4",
                icon: <FaBeer />,
                title: "strongest beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est sed sem sollicitudin imperdiet."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={item.id} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
