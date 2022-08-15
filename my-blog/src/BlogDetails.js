import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data : blog, IsPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history= useHistory();

    const hanleClick= () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { IsPending && <div>Loading</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={hanleClick}>delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;