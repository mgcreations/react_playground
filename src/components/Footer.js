import React from 'react';

import ContactCard from "../components/ContactCard";
import Joke from "../components/Joke";

function Footer() {
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
                <Joke
                    joke={{ question: "Why do we tell actors to break a leg?", punchLine: "Because every play has a cast" }}
                />

                <Joke
                    joke={{ question: "What do you call a fish without eyes?", punchLine: "FSH" }}
                />

<Joke
                    joke={{ question: "What do you call a pig that does karate?", punchLine: "A pork chop" }}
                />

<Joke
                    joke={{ punchLine: "when life gives you melons, you're dyslexic" }}
                />

            </div>
        </div>
    );
}

export default Footer;