import React,{ Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {date : new Date()};
       // console.log('constructor');
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);

    }
    componentDidUpdate() {
       

    }
    componentWillUnmount() {
        clearInterval( this.timerID);
    }

    tick() {
        this.setState({date : new Date()});
        
    }

    render() {
       // const style = {heiht : 70, marginTop: 200};

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-success"><img src="/images/logo/logo.png" alt=""/>เอวาตี้ คาเฟ่</h1>
                    </div>                
                    <div className="col-md-4 text-right">                   
                    <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    
                    <ul className="list-inline">
                      <li className="list-inline-item title"><Link className="text-success" to="/"> หน้าหลัก </Link> </li>
                      <li className="list-inline-item title"> | </li>
                      <li className="list-inline-item title"><Link className="text-success" to="/orders"> รายการสั่งซื้อ </Link> </li>
                      <li className="list-inline-item title"> | </li>
                      <li className="list-inline-item title"><Link className="text-success" to="/products"> สินค้า </Link></li>
                      <li className="list-inline-item title"> | </li>
                      <li className="list-inline-item title"><Link className="text-success" to="/about"> เกี่ยวกับเรา </Link> </li>
                    </ul>

                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;