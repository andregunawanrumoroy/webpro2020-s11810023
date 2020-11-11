import React, { Component, useEffect, useState } from "react";


//================ Cara pertama ====================
/*class Counter extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
        };
    }
    render() {
        return (
            <div>
                <p>Counter Component</p>
                <p>Komponen ini sudah diklik sebanyak {this.state.number} kalimat</p>
                <button> onClick={() => this.setState ({ number: this.number + 1 })} Tambah</button>
                <button> onClick={() => this.setState ({ number: this.number - 1 })} Kurang </button>
            </div>
        );
    }
}

//================ Cara Kedua ======================
class Counter extends Component {
    state = {
        number: 0,
    };

    tambah = () => {
        this.setState({ number: this.state.number + 1});
    };

    kurang = () => {
        this.state.number < 1
            ? this.setState({ number: 0})
            : this.setState({ number: this.state.number - 1});
    };

    render() {
        return (
            <div>
                <p>Counter Component</p>
                <p>Komponen ini sudah diklik sebanyak {this.state.number} kalimat</p>
                <button> onClick={this.tambah} Tambah</button>
                <button> onClick={this.kurang} Kurang</button>
            </div>
        );
    }
}
*/
//================ Cara Ketiga ======================
const Counter = (props) => {
    const [number, setNumber] = useState(0);
    const [title, setTitle] = useState("Counter");

    useEffect(() => {
        console.log ("Komponen telah di mount");
    }, []);

    const tambah = () => {
        setNumber(nuber + params);
    };

    const kurang = () => {
        number < 1 ? setNumber(0) : setNumber(number - 1);
    };

    return (
        <div>
            <p>{props.title}</p>
            <p>Komponen ini sudah diklik sebanyak (number) kali</p>
            <button onClick={() => tambah(1)}> Tambah </button>
            <button onClick={kurang}> Kurang </button>
        </div>
    );
};

export default Counter;