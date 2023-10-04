import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Categories from './components/Categories/Categories';
import FullItem from './components/Items/FullItem/FullItem';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          img: 'head.jpg',
          title: 'Шлем разгневанного гладиатора',
          desc: 'Сохраняй голову на плечах',
          category: 'Head',
          price: '1600'
        },
        {
          id: 2,
          img: 'weapon.jpg',
          title: 'Лабрисса разгневанного гладиатора',
          desc: 'Голову с плеч!',
          category: 'Weapon',
          price: '8000'
        },
        {
          id: 3,
          img: 'chest.png',
          title: 'Нагрудник разгневанного гладиатора',
          desc: 'Чтобы не выпрыгнуло сердце',
          category: 'Chest',
          price: '1600'
        },
        {
          id: 4,
          img: 'gloves.png',
          title: 'Рукавицы разгневанного гладиатора',
          desc: 'Для стальной хватки',
          category: 'Gloves',
          price: '1600'
        }, {
          id: 5,
          img: 'legs.jpg',
          title: 'Набедренники разгневанного гладиатора',
          desc: 'Никто не заметит, что вы испугались',
          category: 'Legs',
          price: '1600'
        },
        {
          id: 6,
          img: 'shoulder.jpg',
          title: 'Наплечники разгневанного гладиатора',
          desc: 'Все по плечу!',
          category: 'Shoulder',
          price: '1600'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {

    return (
      <div className="App">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <FullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }


  chooseCategory(category) {
    if (category === 'All') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(e => e.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter(e =>
        e.id !== id)
    })
  }


  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(e => {
      if (e.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
