import React from 'react';
import Header from './Header';
import CardsList from './CardsList';

class App extends React.Component {
 
    render() {
        let cardsList = [
            {
                title: 'Bird',
                link: 'https://c1.staticflickr.com/9/8370/8406752121_379eee2281_z.jpg'},
            {
                title: 'Jordan',
                link: 'https://cdn.newsapi.com.au/image/v1/5115ef8c03f1131ad928b5e31df9901a?width=1024'},
            {
                title: 'Lebron',
                link: 'https://www.nbcsports.com/bayarea/sites/csnbayarea/files/styles/article_hero_image/public/2019/02/06/lebronus.jpg?itok=lL2woRCZ'},
            {
                title: 'Rodman',
                link: 'http://media.al.com/news_impact/photo/Dennis%20rodman.PNG'},
            {
                title: 'Shaq',
                link: 'https://i.pinimg.com/originals/98/ca/74/98ca7464b573bfd44898b5cae41a7f26.jpg'}

        ]
        return (
            <div>
                <div><Header /></div>
                <br></br>
                <div>
                    <CardsList cards={cardsList}/>
                </div>
            </div>
        );
    }
}

export default App;

