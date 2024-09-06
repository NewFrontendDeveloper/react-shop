import Header from "./components/Header"
import Footer from "./components/Footer"
import React from "react";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartData: [],
      items: [
        {
          id: 1,
          title: "Каромелька соленая",
          img: 'Банофи.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 2,
          title: "Каромелька соленая",
          img: 'восторг.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 3,
          title: "Каромелька соленая",
          img: 'йогурт кусок 2.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 4,
          title: "Каромелька соленая",
          img: 'йогуртовый с клубникой 1.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 5,
          title: "Каромелька соленая",
          img: 'клубничный мохито 1.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 6,
          title: "Каромелька соленая",
          img: 'тирамису2.jpg',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },

      ]
    }
    this.addToCart = this.addToCart.bind(this)
    this.deleteCartData = this.deleteCartData.bind(this)
  }
  render() {
    return (
      <div className="main-cont">
        <Header cartData={this.state.cartData} onDelete={this.deleteCartData} />
        <Items items={this.state.items} onAdd={this.addToCart} />
        <Footer />
      </div>
    );
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
