import React from 'react';

import ContactCard from "../components/ContactCard";
import Joke from "../components/Joke";

import jokesData from "../components/jokesData";

function Footer() {

        const jokesComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)

    return (
        <div className="footer">
            <h3>This is my first footer in React</h3>
            <div className="contacts">
                <ContactCard
                    contact={{ name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }}
                />
                <ContactCard
                    contact={{ name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com" }}
                />
                <ContactCard
                    contact={{ name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com" }}
                />
                <ContactCard
                    contact={{ name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com" }}
                />
            </div>

            <div className="joke">
                {jokesComponents}

            </div>
        </div>
    );
}

export default Footer;