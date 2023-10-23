import './index.css' 

const Post = ({postInfo}) => {

  return (
    <div className="card">
        <p className="title">{postInfo.title}</p>
        <img className="img" src={postInfo.img}></img>
        <div className='downLine'>      
        <div> <p className="votes">Votes: {postInfo.votes}</p></div> 
       <div><button class="btn"><i class="fa-solid fa-chevron-up"></i></button></div> 
        </div>
    </div>
  );
};

export default Post;
