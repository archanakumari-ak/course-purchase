import React, { Component } from "react";

interface course {
  name: string;
  price: number;
  active: boolean;
}

type CoursesalesState = {
  total: number;
};

type CoursesalesProps = {
  items: course[];
};

class Coursesales extends Component<CoursesalesProps, CoursesalesState> {
  state = {
    total: 0,
  };

  sumPrice = (price: number): void =>
    this.setState({
      total: this.state.total + price,
    });

  render() {
    console.log(this.props.items);
    var courses = this.props.items.map((item, i) => {
      return (
        <Course
          name={item.name}
          price={item.price}
          sumPrice={this.sumPrice}
          key={i}
          active={item.active}
        />
      );
    });
    return (
      <div>
        <h1>You can buy courses:</h1>
        <div id='courses'>{courses}</div>
        <p id='total'>
          {" "}
          Total: <b>{this.state.total}</b>
        </p>
      </div>
    );
  }
}

type MyProps = {
  name: string;
  price: number;
  sumPrice: (price: number) => void;
  active: boolean;
};

type MyState = {
  active: boolean;
};

class Course extends Component<MyProps, MyState> {

  state: MyState = {
    active: false,
  };

  clicker = (): void=> {
    console.log(this.state.active)
    var active = !this.state.active;
    this.setState({
      active: active,
    });
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }

  render() {
    return (
      <div>
        <p className={this.state.active ? "active" : ""} onClick={this.clicker}>
          {this.props.name} <b>{this.props.price}</b>
        </p>
      </div>
    );
  }
}

export default Coursesales;
