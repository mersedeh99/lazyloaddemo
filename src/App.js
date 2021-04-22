import data from './data';
import './index.css';
import LazyLoad from 'react-lazyload'; 

const Loading = () =>{
  return(
    <div className="post loading">
<h5>
  Loading...
</h5>
    </div>
  )
}

const Post = ({id, title, body}) =>{
  return(
<div className="post">
<div className="post-img">
  <LazyLoad once={true} placeholder={<img src={`https://picsum.photos/id/${id}/5/5`} alt="..." />}>
  <img src={`https://picsum.photos/id/${id}/1000/1000`} alt="..." />
  </LazyLoad> 
      </div>
  <div className="post-body">
    <h4>{title}</h4>
    <p>{body}</p>
  </div>
</div>
  )
}

function App() {
  return (
    <div className="App">
      <h2>Lazy load demo</h2>
      <div>
        {data.map(post=>(
          <LazyLoad key={post.id} placeholder={<Loading/>}>
            <Post key={post.id} {...post}/>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default App;
