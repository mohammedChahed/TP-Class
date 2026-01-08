import axios from "axios"
import React, { useState } from "react"
import Card from "./components/cards"

function App() {

    const [allData , setAllData] = React.useState([])
    const [input , setInput] = React.useState("")
    const [details , setDetails] = useState([]) 
    const [comment , setComment] = useState([])
    const [displayComm , setDisplayComm] = useState(false)
    
    const [isFiltred, setIsFiltred] = useState(false)
    const [inpComm , setInpComm] = useState({
      
      title:"",
      body:""
      
    })
    

    React.useEffect(()=> {
       fetch("https://jsonplaceholder.typicode.com/posts")
       .then(res => res.json()) 
       .then(data =>setAllData(data)).catch(err=>console.log(err))
      },[])
      console.log(allData)
      function handlAddComm(e){
        const {name,value} = e.currentTarget ;
        setInpComm(prev => ({
          ...prev,
          userId : allData.length + 1,
          id : allData.length + 1,
          [name] : value

        }))
      }
      function handlSubmit(e){
        e.preventDefault();
        const newComm = {
          userId : allData.length +1,
          id:allData.length +1,
          ...inpComm
        }
        setAllData(prev => [...prev,newComm])
      }
      function handlChange(e){
        const {name , value} = e.currentTarget
          setInput(prev => ({
              [name] : value
          }))
        setIsFiltred(true)
      }
      function handDetails(id){
        setDetails([allData[id]])
        setDisplayComm(false)
      }
      
      const listDetails = details.map((item,i) =>{
        return(
          <div key={i}>
            <p>UserId : {item.userId}</p>
            <p>Id : {item.id}</p>
            <p>title : {item.title}</p>
          </div>
        );
      } )
      function handleCommient(id) {
        const filterComment = allData.filter(item => item.userId == id)
        filterComment.map(item => setComment(prev => [...prev,item.body]))
        setDisplayComm(true)
      }

      function deleteComm(i) {
        setComment(comment.filter((_,index) => index !== i ))
      }
      const lsitComment = comment.map((item,i)=>{
        return(
          <div key={i}>
            <p>Comment : {item} </p>
            <button onClick={()=>deleteComm(i)}>supprimer</button>
          </div>
        );
      })
      const dataFiltred = allData.filter(item => item.userId == input.userId || item.title.includes(input.search))
    
    return(
      <>
        <main>
          <h1>Articles</h1>
          <input type="text" name="search" placeholder="Recherche" onChange={handlChange}/>
          <select name="userId" onChange={handlChange}>
            <option value="1">user1</option>
            <option value="2">user2</option>
            <option value="3">user3</option>
            <option value="4">user4</option>
            <option value="5">user5</option>
            <option value="6">user6</option>
            <option value="7">user7</option>
            <option value="8">user8</option>
            <option value="9">user9</option>
            <option value="10">user10</option>
          </select>
        </main>
        <div className="article">
            { isFiltred ? (dataFiltred.map(item => {
                            return <Card title={item.title} onClick={() => handDetails(item.id)} 
                                comment={()=>handleCommient(item.userId)}/>}))
                        : (allData.slice(0,10).map(item => {
                            return <Card title={item.title} onClick={() => handDetails(item.id)} 
                                comment={()=>handleCommient(item.userId)}/>}))
            }
        </div>

        {displayComm ?  
          (<>
            <div className="comment">
              
              {lsitComment}
              <form onSubmit={handlSubmit}>
                <input type="text" name="title" onChange={handlAddComm} />
                <textarea name="body" onChange={handlAddComm} />
                <button>ajouter</button>
              </form>
            </div>
            
            </>) : (<div className="details ">
                        
                        {listDetails}
                      </div>)
        }
      </>
    );
}

export default App
