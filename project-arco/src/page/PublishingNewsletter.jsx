import { useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const PublishingNewsletter = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  useEffect(()=>{
    window.addEventListener("scroll",function(){
      // 프로그래스 바가 있다면 실행할 수 있도록
      if(document.querySelector(".article-main") != null){ // 비어있는 게 아니라면
          // 세팅함수 실행
          showButton();
        }
      })
  },[])

        function showButton(){
          // 스크롤한 높이
          let curreY = document.documentElement.scrollTop;
          
          // 전체 높이
          let totalY = document.documentElement.scrollHeight-document.documentElement.clientHeight;
          
    
          // 퍼센트로 바꿔서 progress css의width값에 넣어주기
          let percentage = (curreY/totalY)*100;
          
          if (percentage>=55){
            document.querySelector(".top-botton").style.display = "flex"
          }else{
            document.querySelector(".top-botton").style.display = "none"
          }
        }

  return ( 
    <div>
      <header className="article-header">
        <h1 style={{margin:"15px 20px", fontSize:"3.3em"}}>ARCO Newsletter</h1>
        <Link to='/' element={<Home/>} style={{}}> 
          ARCO Home
        </Link>
      </header>
      <main className="article-main">
        <h1>November's article</h1>
        <section className="article-section">
          <h2>100,000 abandoned animals a year in Korea.</h2>
          <img src={require("../img/homeless_4.jpg")} alt="no image"
                style={{width:"100%", height: "40%", objectFit:"cover "}}/>
          <p className="first-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget 
            nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. 
            Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed 
            adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. 
            Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. 
            Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh 
            praesent. In hac habitasse platea dictumst quisque sagittis purus. 
            Pulvinar elementum integer enim neque volutpat ac.
          </p>
          <p>
            Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper
            malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus
            nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum 
            sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. 
            Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus 
            dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu 
            ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec 
            ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit 
            amet nisl suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim 
            convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam ac 
            tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum 
            nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est 
            placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis 
            vulputate enim.
          </p>
          <p>
            Sit amet nulla facilisi morbi tempus. Nulla facilisi cras fermentum odio eu. 
            Etiam erat velit scelerisque in dictum non consectetur a erat. Enim nulla aliquet 
            porttitor lacus luctus accumsan tortor posuere. Ut sem nulla pharetra diam. Fames 
            ac turpis egestas maecenas. Bibendum neque egestas congue quisque egestas diam. 
            Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget felis eget nunc 
            lobortis mattis aliquam faucibus purus. Faucibus interdum posuere lorem ipsum 
            dolor sit.
          </p>
          <p>
            Et netus et malesuada fames ac. Erat pellentesque adipiscing commodo elit at 
            imperdiet dui accumsan. Sodales neque sodales ut etiam sit amet nisl purus in. 
            Maecenas volutpat blandit aliquam etiam. Sit amet luctus venenatis lectus magna 
            fringilla urna porttitor rhoncus. Egestas purus viverra accumsan in nisl. Semper 
            feugiat nibh sed pulvinar proin. Duis convallis convallis tellus id interdum 
            velit laoreet. Ante in nibh mauris cursus mattis molestie. Ut etiam sit amet 
            nisl purus in mollis nunc. Feugiat sed lectus vestibulum mattis ullamcorper velit 
            sed ullamcorper. Tellus at urna condimentum mattis pellentesque id nibh tortor id. 
            Tristique magna sit amet purus gravida quis blandit turpis cursus. Dolor sit amet 
            consectetur adipiscing. Consequat ac felis donec et odio pellentesque diam volutpat. 
            Nunc sed augue lacus viverra vitae congue. Mauris in aliquam sem fringilla ut morbi 
            tincidunt augue.
          </p>
          <p>
            Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean 
            vel elit scelerisque mauris pellentesque. Accumsan sit amet nulla facilisi morbi 
            tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis egestas 
            maecenas pharetra convallis posuere. Nibh venenatis cras sed felis eget velit aliquet. 
            Elementum nisi quis eleifend quam adipiscing. Amet cursus sit amet dictum sit amet 
            justo donec enim. Odio pellentesque diam volutpat commodo sed egestas egestas 
            fringilla. Habitant morbi tristique senectus et netus et malesuada. Imperdiet 
            dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ac turpis egestas maecenas 
            pharetra.
          </p>
          <div className="emotion-box">
            <div>
            <p>0</p>
            <button className="happy-face">🥰</button>
            </div>
            <div>
            <p>0</p>
            <button className="touching-face">🥺</button>
            </div>
            <div>
            <p>0</p>
            <button className="sad-face">😢</button>
            </div>
            <div>
            <p>0</p>
            <button className="angry-face">😡</button>
            </div>
          </div>
          <div className="top-botton">
            <button onClick={()=>{window.scrollTo(0,0);}}>Top</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PublishingNewsletter;