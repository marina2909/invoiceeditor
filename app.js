import React from 'react';
import InvoiceItems from './invoiceitems';
import ajax from './ajax';

export default class Application extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			invoiceitems: [],
			subtotal: '',
			tax:'',
			total:''
		};
		this.onAdd = this.onAdd.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	componentDidMount(){
		ajax.getAll()
			.then(data => this.setState({invoiceitems: data}))
			.catch();
	}

	onAdd(item, qty, price){
		ajax.add(item, qty, price)
			.then(data => {
				let invoiceitems = this.state.invoiceitems.concat([data]);
				this.setState({invoiceitems: invoiceitems});
			})
			.catch();
	}

	onUpdate(id, item, qty, price){
		ajax.update(id, item, qty, price)
		.then(data => this.setState({invoiceitems: this.state.invoiceitems}))
		.catch();
	}

	onDelete(id){
		ajax.delete(id)
		.then(data => {
			let invoiceitems = this.state.invoiceitems.filter(e => e.id != id)
			this.setState({invoiceitems: invoiceitems});
		})
		.catch();
	}

	render() {
		return (
			<div>
				<InvoiceItems onAdd={this.onAdd}
					onUpdate={this.onUpdate} 
					onDelete={this.onDelete} 
					invoiceitems={this.state.invoiceitems}/>
			</div>
		);
	}
}



