import {useState} from 'react';

const Notice = (props) => {
    const [noticels, noticeSet ] = useState(['img1','img2','img3']);
    const [number, setNumber ] = useState(0);

    return (
        <div>
           <h3>{ props.title }</h3>
           <p>
            <button
            onClick={
                () => {
                    setNumber(number + 1);
                    const newNoticels = [ '새로운이미지'+number, ...noticels ]
                    noticeSet(newNoticels); 
                }
            }
            >후기</button> 
           </p>            
           <ul>
            {
                noticels.map((item, index) => {
                    return(
                        <li>{item}</li>
                    )
                })
            }
           </ul>
        </div>
    );
}

export default Notice;
