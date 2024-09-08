import Header from "./components/Header"
import Footer from "./components/Footer"
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartData: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Каромелька соленая",
          img: 'Банофи.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'desserts',
          price: '384.99'
        },
        {
          id: 2,
          title: "Каромелька соленая",
          img: 'восторг.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'cakes',
          price: '384.99'
        },
        {
          id: 3,
          title: "Каромелька соленая",
          img: 'IMG_2769.jfif',
          desc: "Натуральная соленая русская каромель",
          category: 'loaves',
          price: '384.99'
        },
        {
          id: 4,
          title: "Каромелька соленая",
          img: 'йогуртовый с клубникой 1.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'cakes',
          price: '384.99'
        },
        {
          id: 5,
          title: "Каромелька соленая",
          img: 'клубничный мохито 1.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'desserts',
          price: '384.99'
        },
        {
          id: 6,
          title: "Каромелька соленая",
          img: 'тирамису2.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'desserts',
          price: '384.99'
        },

      ]
    }
    this.state.currentItems = this.state.items
    this.addToCart = this.addToCart.bind(this)
    this.deleteCartData = this.deleteCartData.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="main-cont">
        <Header cartData={this.state.cartData} onDelete={this.deleteCartData} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToCart} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteCartData(id) {
    this.setState({ cartData: this.state.cartData.filter(el => el.id !== id) })
  }

  addToCart(item) {
    let isInArray = false
    this.state.cartData.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ cartData: [...this.state.cartData, item] })
  }
}

export default App;
