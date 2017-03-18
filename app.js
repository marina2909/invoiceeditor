import React from 'react';
import ReactDOM from 'react-dom';
import InvoiceItems from './invoiceitems';
import ajax from './ajax';

export default class Application extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			invoiceitems: []
		};
		this.onAdd = this.onAdd.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	componentDidMount(){
		ajax.getAll()
			.then(data => this.setState({invoiceitems: data}));
	}

	onAdd(rec){
		this.setState({invoiceitems: this.state.invoiceitems.concat([rec])});
	}

	onUpdate(rec){
		this.setState({
			invoiceitems: this.state.invoiceitems.map(r => r.id == rec.id ? rec : r)
		});
	}

	onDelete(id){
		this.setState({invoiceitems: this.state.invoiceitems.filter(e => e.id != id)});
	}

	render() {
		return (
			<div>
				<h1>Invoice editor</h1>
				<InvoiceItems onAdd={this.onAdd}
					onUpdate={this.onUpdate} 
					onDelete={this.onDelete} 
					invoiceitems={this.state.invoiceitems}/>
			</div>
		);
	}
}

ReactDOM.render(
	<Application />,
	document.getElementById('main-container')
);




