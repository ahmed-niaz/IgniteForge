import { useLoaderData } from "react-router-dom";


const Article = () => {
    const article = useLoaderData()
    return (
        <main>
            <h2>Article </h2>
        </main>
    );
};

export default Article;