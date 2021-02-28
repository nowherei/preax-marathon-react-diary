import React from 'react';
import PostListItem from '../postListItem/postListItem';
import './postList.css';
import smile_1 from './smiles/smile_1.png';
import smile_2 from './smiles/smile_2.png';
import smile_3 from './smiles/smile_3.png';
import smile_4 from './smiles/smile_4.png';
import smile_5 from './smiles/smile_5.png';
import smile_6 from './smiles/smile_6.png';
import smile_7 from './smiles/smile_7.png';
import smile_8 from './smiles/smile_7.png';
import smile_9 from './smiles/smile_8.png';
import smile_10 from './smiles/smile_9.png';
import smile_11 from './smiles/smile_10.png';
// import img_1 from './note_1.png';
// import img_2 from './note_11.png';
// import img_3 from './note_2.png';
// import img_4 from './note_3.png';
// import img_5 from './note_4.png';
// import img_6 from './note_5.png';
// import img_7 from './note_6.png';
// import img_8 from './note_7.png';
// import img_9 from './note_8.png';
// import img_10 from './note_9.png';
// import img_11 from './note_10.png';

function PostList() {
    return (
        <>
            <div className="post-list">
                <div className="note-img note_1">
                    <PostListItem 
                        imgSmile={smile_1} 
                        title="Побывал в горах" 
                        date="Вт 14 янв" 
                        descr="Сегодня я почувствовал детское волнение..."/>
                </div>
                <div className="note-img note_2">
                    <PostListItem 
                        imgSmile={smile_2}
                        title="Побывал в горах" 
                        date="Вт 14 янв" 
                        descr="Сегодня я почувствовал детское волнение..."/>
                </div>
                <div className="note-img note_3">
                    <PostListItem 
                        imgSmile={smile_3}
                        title="Печалька" 
                        date="Вт 14 янв" 
                        descr="Сегодня я почувствовал детское волнение..."/>
                </div>
                <div className="note-img note_4">
                    <PostListItem 
                        imgSmile={smile_4}
                        title="Побывал в горах" 
                        date="Вт 14 янв" 
                        descr="Сегодня я почувствовал детское волнение..."/>
                </div>
                <div className="note-img note_5">
                    <PostListItem 
                        imgSmile={smile_5}
                        title="Пожрал всякого" 
                        date="Вт 14 янв" 
                        descr="Что-то вдруг нахлынуло желание сладкого..."/>
                </div>
                <div className="note-img note_6">
                    <PostListItem 
                        imgSmile={smile_6}
                        title="Замечтался о прекрасном" 
                        date="Вт 14 янв" 
                        descr="Сегодня я почувствовал детское волнение..."/>
                </div>
                <div className="note-img note_7">
                    <PostListItem 
                        imgSmile={smile_7}
                        title="Побывал в горах" 
                        date="Вт 14 янв" 
                        descr="Сегодня я почувствовал детское волнение..."/>
                </div>
                <div className="note-img note_8">
                    <PostListItem imgSmile={smile_8}/>
                </div>
                <div className="note-img note_9">
                    <PostListItem 
                        imgSmile={smile_9}
                        title="Побывал в горах" 
                        date="Вт 14 янв" 
                        descr="Сегодня я почувствовал детское волнение..."/>
                </div>
                <div className="note-img note_10">
                    <PostListItem 
                        imgSmile={smile_10}
                        title="Побывал в горах" 
                        date="Вт 14 янв" 
                        descr="Сегодня я почувствовал детское волнение..."/>
                </div>
                <div className="note-img note_11">
                    <PostListItem 
                        imgSmile={smile_11}
                        title="Побывал в горах" 
                        date="Вт 14 янв" 
                        descr="Сегодня я почувствовал детское волнение..."/>
                </div>
            </div>
        </>
    )
}

export default PostList;