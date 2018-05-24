import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import './styles/style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: '1',
        name: 'Wendel Freitas',
        hour: 'há 2 dias',
        image:
          'https://24153-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/09/avatar_user__1473307203-400x400.jpg',
        post:
          'Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Quem manda na minha terra sou euzis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Quem num gosta di mim que vai caçá sua turmis!',
      },
      {
        id: '2',
        name: 'Gustavo',
        hour: 'há 5 horas',
        image:
          'http://americaeast.panewsmedia.org/images/default-source/default-album/brad-campeau-laurion.png?sfvrsn=0',
        post:
          'Suco de cevadiss deixa as pessoas mais interessantis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta.',
      },
      {
        id: '3',
        name: 'Diego',
        hour: 'há 7 minutos',
        image:
          'https://gravatar.com/avatar/0988796fb50136535a69cea314396cfa?s=512&d=https://codepen.io/assets/avatars/user-avatar-512x512-6e240cf350d2f1cc07c2bed234c3a3bb5f1b237023c204c782622e80d6b212ba.png',
        post:
          'Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Paisis, filhis, espiritis santis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.',
      },
    ],
  };
  render() {
    return (
      <div>
        <Header />
        <Content data={this.state.posts} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
