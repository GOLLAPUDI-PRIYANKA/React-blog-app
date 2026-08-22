import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import EditPost from './EditPost';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions)=>actions.setPosts)
  //const [posts,setPosts]=useState([]);
  // const [search,setSearch]=useState('');
  // const [searchResults,setSearchResults]=useState([]);
  // const [editTitle,setEditTitle]=useState('');
  // const [editBody,setEditBody]=useState('');
  // const [postTitle,setPostTitle]=useState('');
  // const [postBody,setPostBody]=useState('');
  // const history=useNavigate();
  // const {width}=useWindowSize();
  const {data,fetchError,isLoading}=useAxiosFetch('http://localhost:3500/posts')

  useEffect(()=>{
    setPosts(data);
  },[data,setPosts])

  

  
  return (
    <div className="App">
      <Header title="React js Blog" />
      <Nav />
      <Routes>
        <Route exact path="/"
         element= {<Home isLoading={isLoading}
          fetchError={fetchError}
          />}
        />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
