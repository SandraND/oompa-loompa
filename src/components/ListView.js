import React, { Component } from 'react';
import axios from 'axios';
import {
    StyleSheet, View, FlatList, Text
} from 'react';

import { PlainInput, ItemComponent } from './List';


export class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterText: '',
            fixedHeight: true,
            logViwable: false,
            numColumns: 3,
            virtualized: true,
        }
    }

    _onChangeFilterText = filterText => {
        this.setState(() => ({ filterText }))
    }

    _onChangeNumColumns = numColumns => {
        this.setState(() => ({ numColumns: Number(numColumns)}))
    }



    componentDidMount() {
        axios.get('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas')
            .then(response => {
                console.log(response.data.results)
                const data = response.data.results;
                this.setState({ data });
            });
    }

    render() {
        const filterRegex = new RegExp(String(this.state.filterText), 'i')
        const filter = item =>
        filterRegex.test(item.text) || filterRegex.test(item.title)
        const filteredData = this.state.data.filter(filter)
        return(
            <View style={this.styles.searchRow}>
                <View style={this.styles.row}>
                    <PlainInput 
                    onChangeText={this._onChangeFilterText}
                    placeholder='search'
                    value={this.state.filterText}/>

                </View>
                <FlatList
                    data={filteredData}
                    key={this.state.numColumns + (this.state.fixedHeight ? 'f' : 'v' ) }
                    numColumns={this.state.numColumns || 1}
                    renderItem={this._renderItemComponent}
                    onViewableItemsChanged={this._onViewableItemsChanged}
                ></FlatList>
            </View>
        )
    }

    _renderItemComponent = ({ item }) => (
        <View style={this.styles.card}>
            <ItemComponent 
                item={item}
                fixedHeight={this.state.fixedHeight}
                />
        </View>
    )

    // _onViewableItemsChanged = info => {
    //     if(this.state.logViwable) {
    //         infoLog(
    //             'onViewableItemsChanged: ',
    //             info.changed.map(v => ({ ...v, item: '...'})),
    //         )
    //     }
    // }


    // filterText(e) {
    //     let updatedList = this.state.data;
    //     updatedList = updatedList.filter((item => {
    //         return item.first_name.toString().toLowerCase().search(
    //             e.target.value.toLowerCase()) !== -1;
    //     }));

    //     this.setState({
    //         updatedList
    //     });
    // }

    // filterText(e) {
    //     this.setState({
    //         input: e.target.value
    //     })
    // }

    // redirect = (e, data) => {
    //     console.log('redirect');
    //     console.log(data);
    // }

    // render() {
    //     const list = this.state.data
    //     .filter(d => this.state.input === '' || [d].includes(this.state.input))
    //     .map((d, first_name) => <li key={first_name}>{d}</li> );
    //     return (
    //         <div>
    //             <div>
    //             <input value={this.state.input} 
    //                 type='text'
    //                 placeholder='search'
    //                 onChange={this.filterText} />

    //                 <ul>
    //                     <li key={list}>{
    //                         {list}
    //                          {(this.state.data).map(item =>
    //                         <li onClick={((e) => this.redirect(e, item))} key={item.first_name}>
    //                             {item.first_name},
    //                                 {item.last_name},
    //                                 {item.profession},
    //                                 {item.image}
    //                         </li>
    //                     )} 
    //                     }
    //                     </li>   
    //                 </ul>
    //             </div>
    //         </div>
    //     );
    // }
}