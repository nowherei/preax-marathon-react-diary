import React from 'react';
// import { BrowserRouter, Router } from "react-router-dom";
import {
  Route,
  Switch
} from "react-browser-router";

import './App.css';
import DayCards from './components/DayCards/DayCards';
import Header from './components/Header/Header';
import NewNote from './components/NewNote/NewNote';
import Note from './components/Note/Note';

import day1 from './assets/bg_images/day-1.jpg';
import day2 from './assets/bg_images/day-2.jpg';
import day3 from './assets/bg_images/day-3.jpg';
import day4 from './assets/bg_images/day-4.jpg';
import day5 from './assets/bg_images/day-5.jpg';
import day6 from './assets/bg_images/day-6.jpg';
import day7 from './assets/bg_images/day-7.jpg';
import day8 from './assets/bg_images/day-8.jpg';
import day9 from './assets/bg_images/day-9.jpg';
import day10 from './assets/bg_images/day-10.jpg';
import day11 from './assets/bg_images/day-11.jpg';


const cards = [
  { id: 1, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day1 },
  { id: 2, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day2 },
  { id: 3, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day3 },
  { id: 4, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day4 },
  { id: 5, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day5 },
  { id: 6, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day6 },
  { id: 7, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day7 },
  { id: 8, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day8 },
  { id: 9, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day9 },
  { id: 10, title: 'Побывал в горах', text: ['Сегодня я почувствовал детское волнение...'], date: 'Вт 14 янв', emoji: '😌', photo: day10 }
];


function App() {
  const text = [
    `Это бесспорная истина, недаром же мы редко доверяемся тем, кто лучше нас. Скорее уж мы избегаем их общества. Чаще всего мы исповедуемся тем, кто похож на нас и разделяет наши слабости. Мы вовсе не хотим исправляться, не стремимся к самоусовершенствованию: прежде всего нужно, чтобы нас судили со всеми нашими слабостями. Нам хочется, чтобы нас пожалели и поддержали дух наш. В общем, мы хотели бы и не считаться виновными, и не стараться очиститься. В нас недостаточно цинизма и недостаточно добродетели. У нас нет ни силы зла, ни силы добра. Вы читали Данте? Правда? Вот черт! Вы, стало быть, знаете, как это у Данте? Ведь он допускает, что ангелы были нейтральными в распре между Богом и Сатаной. Он отводит им место в преддверии, так сказать в вестибюле своего ада. Мы с вами в вестибюле, дорогой друг.`,
    `Терпение? Вы, разумеется, правы. Нужно набраться терпения и ждать Страшного суда. Но, к несчастью, нам некогда, мы торопимся. Так торопимся, что мне даже пришлось стать судьей на покаянии. Однако мне сначала нужно было привести в порядок свои открытия и уладить дело с насмешками моих современников. С того вечера, когда меня позвали к ответу — а ведь меня действительно позвали, — я обязан был ответить или по крайней мере поискать ответ. Это оказалось нелегко. Я долго блуждал наугад. Но этот постоянный хохот и насмешки научили меня яснее разбираться в себе и увидеть наконец, что я совсем не прост. Вы не улыбайтесь, эта истина не так уж элементарна, как кажется. Элементарными называют такие истины, которые человек открывает последними, — вот и все.`,
  ];

  const note = {
    title: 'Побывал в горах',
    text,
    date: '21 августа 2021 года',
    emoji: '😌'
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <Header />
        <Route exact path='/' render={props => <DayCards {...props} cards={cards} />} />
        <Route path='/new' render={NewNote} />
        {/* <Note {...note} /> */}
      </div>
      <Route path='/note' render={() => <Note {...note} />} />



      {/* <Route exact path='/note' render={<Note title={'Побывал в горах'} text={text} date={'21 августа 2021 года'} emoji={'😌'} />} />
      
        <Route path='/' render={Header} />
        <Route exact path='/new' render={NewNote} />
        <DayCards cards={cards} />
        <NewNote />
      </div> */}
    </div>
  );
}

export default App;


