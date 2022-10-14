import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main>
                <h2>This is the pet homepage!</h2>
                <p>We love all the animals.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

export default Home;