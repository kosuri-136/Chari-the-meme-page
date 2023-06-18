import React, {useContext , useEffect, useState } from 'react'
import { Store } from '../App';
import Header from './header'
import "../styles/home.css"
import Footer from './footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const [ token, setToken ] = useContext(Store); // Use the correct context
    const[data,setData]= useState(null);

    
    useEffect(()=>{
      axios.get("http://localhost:7000/myprofile", {
          headers : {
            'x-token': token
          }
      }).then(res => setData(res.data)).catch((err)=> console.log(err))
    },[])


    if(!token){
      return navigate("/signin")
    }



  return (<>
    <Header />
    <div>
    

      <div className='header3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <div style={{ flexGrow: 1, textAlign: 'center' }}>
    <span className='text2'> {data && <p>WELCOME &nbsp;&nbsp; meme lover &nbsp; {data.username}</p>} </span>
  </div>
  <button className='logout' onClick={() => setToken(null)}>Logout</button>
  </div>
      

    <div className="image-slider">
    <div className="image-container">

    <img src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t39.30808-6/354055818_646067390899102_2677076690766273675_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pSJX07-jh-oAX-MPc1o&_nc_ht=scontent.fhyd1-2.fna&oh=00_AfAGchh1ajcJ-QpqR_f6jEfy2fqiH7FhUnMl7zd43D6hzA&oe=6491852D" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/351128349_983187416367271_4092979018686118797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4q5KZlemxHUAX-X3-Mx&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfCv8EJAkwWHWfxY8pS4qK08MoFtHK9njRVy3sScmvqc-g&oe=649126BD" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/350794895_211258264578746_9002434982506446165_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AH0f5qPFfncAX8rah0d&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfCRrVb7UtEaXrgk8P-qCksAgJ4JVuC3XkLCP4pIN0uLQA&oe=6491CC5D" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/350520435_260235179866200_516089710986455578_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hRaEVzurKxQAX8MJDNq&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfA2NRcC13ueNwhkCm8-nsuUFkYSvzevtvJtmzQmdW5Drw&oe=6490FB56" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/334937012_1953371601670670_1196951849857148863_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=i6M1lXjdnPEAX_GiMNB&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfAO5MsSo5T_czBFqEKiT9xrghv7tcIrWO1c91JlCMk27w&oe=6490A193" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/330968285_514368247480112_6353841925818662958_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aS6Bnkw1nvMAX_YOuc6&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfCZvJBDUki1fsrbAp1QFTq5-7_xd3ffKlB4-dewWTH6CQ&oe=6491A9D6" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/330861974_580731723949611_7105796332611581489_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PQHnZeGB8EUAX9_Efsm&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfDwqdyDyF_CctMeeQxd9UKvc85KfMZpRss4mqdY6--_Ng&oe=64913F6C" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/329936592_1242249133389140_8227321706447310895_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y7xlKkEhXF4AX_C4wKy&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBFgcN4D992w4VYGIy98PaCphThereejF9kOypDH1MYTA&oe=64916941" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/330820696_1802674926785426_5860137410073522767_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kBL_beQy7_YAX-lMdys&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfB1FS9Zf7zkjYZ-XZhkN6B4BRRqa4r6nxVz0fbFlZDkaA&oe=64906B07" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/330798013_689638396189621_8687657678184713419_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=84qMRYhULTEAX_AfTbW&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfA9VEmED-4WhWXuDx8lLNQVEglrJLiVlYGDZCITqQn_-Q&oe=6491B6F3" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/322379608_2198344703693820_1650328404601880333_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-LlZPrL5mPsAX81nNDf&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfA6x6y_Xe1MwO0bIa35Urqt08KJKatLjwNJ2SNd9hn6rw&oe=6490576A" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t39.30808-6/320056863_834862687738657_7923660699384008563_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4tW1nvZc5uYAX_niucW&_nc_ht=scontent.fhyd1-2.fna&oh=00_AfAfKiBibBTdL61aUiQbxV5LjrUG4FfdNE_VoPjX10C-qA&oe=6490AA82" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/318211733_509944944267268_5012013215908573777_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TL4CHvIvyeYAX9iFOp-&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfCnKJ_uRxfLlVDqANK4d5zSuWgEM7wstChkqZVz01yFiA&oe=64919704" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/318534539_947198572922799_8209245004810132305_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GgIJ2aHHyj8AX-4TDGg&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfCLAg_pJI0vYo0_5r1nb04ZbprUH7AhVh3WaLZel_TIvA&oe=64905946" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/330861974_580731723949611_7105796332611581489_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PQHnZeGB8EUAX9_Efsm&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfDwqdyDyF_CctMeeQxd9UKvc85KfMZpRss4mqdY6--_Ng&oe=64913F6C" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/329936592_1242249133389140_8227321706447310895_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y7xlKkEhXF4AX_C4wKy&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBFgcN4D992w4VYGIy98PaCphThereejF9kOypDH1MYTA&oe=64916941" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/330820696_1802674926785426_5860137410073522767_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kBL_beQy7_YAX-lMdys&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfB1FS9Zf7zkjYZ-XZhkN6B4BRRqa4r6nxVz0fbFlZDkaA&oe=64906B07" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/330798013_689638396189621_8687657678184713419_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=84qMRYhULTEAX_AfTbW&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfA9VEmED-4WhWXuDx8lLNQVEglrJLiVlYGDZCITqQn_-Q&oe=6491B6F3" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/322379608_2198344703693820_1650328404601880333_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-LlZPrL5mPsAX81nNDf&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfA6x6y_Xe1MwO0bIa35Urqt08KJKatLjwNJ2SNd9hn6rw&oe=6490576A" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t39.30808-6/320056863_834862687738657_7923660699384008563_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4tW1nvZc5uYAX_niucW&_nc_ht=scontent.fhyd1-2.fna&oh=00_AfAfKiBibBTdL61aUiQbxV5LjrUG4FfdNE_VoPjX10C-qA&oe=6490AA82" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/318211733_509944944267268_5012013215908573777_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TL4CHvIvyeYAX9iFOp-&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfCnKJ_uRxfLlVDqANK4d5zSuWgEM7wstChkqZVz01yFiA&oe=64919704" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/318534539_947198572922799_8209245004810132305_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GgIJ2aHHyj8AX-4TDGg&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfCLAg_pJI0vYo0_5r1nb04ZbprUH7AhVh3WaLZel_TIvA&oe=64905946" width="300px" height="300px" alt="Image 1" />
    </div>
    </div>
    <center className='h1'>
    <h1 style={{"font-family":'Bungee Spice'}}>GALLERY</h1>
    </center>

    <div className="gallery">
        
    <img src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t39.30808-6/354055818_646067390899102_2677076690766273675_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pSJX07-jh-oAX-MPc1o&_nc_ht=scontent.fhyd1-2.fna&oh=00_AfAGchh1ajcJ-QpqR_f6jEfy2fqiH7FhUnMl7zd43D6hzA&oe=6491852D" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/351128349_983187416367271_4092979018686118797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4q5KZlemxHUAX-X3-Mx&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfCv8EJAkwWHWfxY8pS4qK08MoFtHK9njRVy3sScmvqc-g&oe=649126BD" width="300px" height="300px" alt="Image 2" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/350794895_211258264578746_9002434982506446165_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AH0f5qPFfncAX8rah0d&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfCRrVb7UtEaXrgk8P-qCksAgJ4JVuC3XkLCP4pIN0uLQA&oe=6491CC5D" width="300px" height="300px" alt="Image 13" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/350520435_260235179866200_516089710986455578_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hRaEVzurKxQAX8MJDNq&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfA2NRcC13ueNwhkCm8-nsuUFkYSvzevtvJtmzQmdW5Drw&oe=6490FB56" width="300px" height="300px" alt="Image 133" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/334937012_1953371601670670_1196951849857148863_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=i6M1lXjdnPEAX_GiMNB&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfAO5MsSo5T_czBFqEKiT9xrghv7tcIrWO1c91JlCMk27w&oe=6490A193" width="300px" height="300px" alt="Image 31" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/330968285_514368247480112_6353841925818662958_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aS6Bnkw1nvMAX_YOuc6&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfCZvJBDUki1fsrbAp1QFTq5-7_xd3ffKlB4-dewWTH6CQ&oe=6491A9D6" width="300px" height="300px" alt="Image 1333" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/330861974_580731723949611_7105796332611581489_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PQHnZeGB8EUAX9_Efsm&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfDwqdyDyF_CctMeeQxd9UKvc85KfMZpRss4mqdY6--_Ng&oe=64913F6C" width="300px" height="300px" alt="Image 1343" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/329936592_1242249133389140_8227321706447310895_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y7xlKkEhXF4AX_C4wKy&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBFgcN4D992w4VYGIy98PaCphThereejF9kOypDH1MYTA&oe=64916941" width="300px" height="300px" alt="Image 132" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/330820696_1802674926785426_5860137410073522767_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kBL_beQy7_YAX-lMdys&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfB1FS9Zf7zkjYZ-XZhkN6B4BRRqa4r6nxVz0fbFlZDkaA&oe=64906B07" width="300px" height="300px" alt="Image 1d" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/330798013_689638396189621_8687657678184713419_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=84qMRYhULTEAX_AfTbW&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfA9VEmED-4WhWXuDx8lLNQVEglrJLiVlYGDZCITqQn_-Q&oe=6491B6F3" width="300px" height="300px" alt="Image 1dd" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/322379608_2198344703693820_1650328404601880333_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-LlZPrL5mPsAX81nNDf&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfA6x6y_Xe1MwO0bIa35Urqt08KJKatLjwNJ2SNd9hn6rw&oe=6490576A" width="300px" height="300px" alt="Image 1c" />
    <img src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t39.30808-6/320056863_834862687738657_7923660699384008563_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4tW1nvZc5uYAX_niucW&_nc_ht=scontent.fhyd1-2.fna&oh=00_AfAfKiBibBTdL61aUiQbxV5LjrUG4FfdNE_VoPjX10C-qA&oe=6490AA82" width="300px" height="300px" alt="Image 1vc" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/318211733_509944944267268_5012013215908573777_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TL4CHvIvyeYAX9iFOp-&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfCnKJ_uRxfLlVDqANK4d5zSuWgEM7wstChkqZVz01yFiA&oe=64919704" width="300px" height="300px" alt="Image 1ddd" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/318534539_947198572922799_8209245004810132305_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GgIJ2aHHyj8AX-4TDGg&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfCLAg_pJI0vYo0_5r1nb04ZbprUH7AhVh3WaLZel_TIvA&oe=64905946" width="300px" height="300px" alt="Image 1b" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/330861974_580731723949611_7105796332611581489_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PQHnZeGB8EUAX9_Efsm&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfDwqdyDyF_CctMeeQxd9UKvc85KfMZpRss4mqdY6--_Ng&oe=64913F6C" width="300px" height="300px" alt="Image 1nn" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/329936592_1242249133389140_8227321706447310895_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y7xlKkEhXF4AX_C4wKy&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBFgcN4D992w4VYGIy98PaCphThereejF9kOypDH1MYTA&oe=64916941" width="300px" height="300px" alt="Image 1nnn" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/330820696_1802674926785426_5860137410073522767_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kBL_beQy7_YAX-lMdys&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfB1FS9Zf7zkjYZ-XZhkN6B4BRRqa4r6nxVz0fbFlZDkaA&oe=64906B07" width="300px" height="300px" alt="Image 1nmm" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/330798013_689638396189621_8687657678184713419_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=84qMRYhULTEAX_AfTbW&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfA9VEmED-4WhWXuDx8lLNQVEglrJLiVlYGDZCITqQn_-Q&oe=6491B6F3" width="300px" height="300px" alt="Image 1mmmm" />
    <img src="https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/322379608_2198344703693820_1650328404601880333_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-LlZPrL5mPsAX81nNDf&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfA6x6y_Xe1MwO0bIa35Urqt08KJKatLjwNJ2SNd9hn6rw&oe=6490576A" width="300px" height="300px" alt="Image 1mmm" />
    <img src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t39.30808-6/320056863_834862687738657_7923660699384008563_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4tW1nvZc5uYAX_niucW&_nc_ht=scontent.fhyd1-2.fna&oh=00_AfAfKiBibBTdL61aUiQbxV5LjrUG4FfdNE_VoPjX10C-qA&oe=6490AA82" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/318211733_509944944267268_5012013215908573777_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TL4CHvIvyeYAX9iFOp-&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfCnKJ_uRxfLlVDqANK4d5zSuWgEM7wstChkqZVz01yFiA&oe=64919704" width="300px" height="300px" alt="Image 1" />
    <img src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/318534539_947198572922799_8209245004810132305_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GgIJ2aHHyj8AX-4TDGg&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfCLAg_pJI0vYo0_5r1nb04ZbprUH7AhVh3WaLZel_TIvA&oe=64905946" width="300px" height="300px" alt="Image 1"  />


    </div>

    </div>
    <Footer />
    </> )
}


export default Home
