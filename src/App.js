import Header from "./components/Header"
import Footer from "./components/Footer"
import React from "react";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "Каромелька соленая",
          img: '1.png',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 2,
          title: "Каромелька соленая",
          img: '2.png',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 3,
          title: "Каромелька соленая",
          img: 'DSC006021.png',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 4,
          title: "Каромелька соленая",
          img: 'DSC006331.png',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 5,
          title: "Каромелька соленая",
          img: '6.png',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },
        {
          id: 6,
          title: "Каромелька соленая",
          img: 'Шоколадно-ореховый 5.png',
          desc: "Натуральная соленая русская каромель",
          category: 'candy',
          price: '384.99'
        },

      ]
    }
  }
  render() {
    return (
      <div className="main-cont">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
