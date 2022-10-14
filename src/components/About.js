import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    A store when you can find all what you pet needs.
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default About;