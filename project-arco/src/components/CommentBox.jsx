import { useCallback } from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo } from "../modules/comment";

const CommentBox = () => {
    const memolist = useSelector((state)=>state.comment.memolist);
    
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const addMemo = useCallback(()=>{ 
      if(name && text){
        dispatch( addmemo( { name:name, text:text} ) )
      }
      document.querySelector(".nickname-input").value = ""
      document.querySelector(".text-area").value = ""
      
    },[dispatch,name,text])


    return (  
        <div>
          <p>Review</p>
          <div className="comment-box">
            <div className="name-box">
            <label htmlFor="">Nickname</label>
            <input type="text" className="nickname-input"
              onChange={(e)=>{setName(e.target.value)}} placeholder="Nickname"/>
            </div>
            <div className="text-box">
            <textarea type="text" className="text-area"
              onChange={(e)=>{setText(e.target.value)}} placeholder="Comment your review."/>
            <button onClick={addMemo}>comment</button>
            </div>
            <div className="added-comment-box">
              {   
                memolist.map((memo, i)=>(
                  <div key={i} className="added-comment-inner-box">
                    <p className="comment-name">{memo.name}</p>
                    <p className="comment-text">{memo.text}</p>
                    <p className="comment-date">
                      {memo.year}.
                      {memo.month<10? (`0${memo.month}`): memo.month}.
                      {memo.date<10? (`0${memo.date}`):memo.date}.
                      </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    );
}

export default CommentBox;