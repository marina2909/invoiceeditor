import React from 'react';

export default class InvoiceItem extends React.Component{
	constructor(props){
		super(props);
		this.state = { 
			id: props.rec.id || '',
			item: props.rec.item || '',
			qty: props.rec.qty || '',
			price: props.rec.price || ''
		};
		this.onAddClick = this.onAddClick.bind(this); 
	}

	onAddClick(){
		this.props.onAdd(this.state.item, this.state.qty, this.state.price);
		this.setState({
			id: '',
			item: '',
			qty: '',
			price: ''
		});
	}

	render(){
		return (
			<tr>
				<td className="col-md-3">
					<input type="text" className="form-control" placeholder="Item" 
						value={this.state.item}
						onChange={evt => this.setState({item : evt.target.value})}/>
				</td>
				<td className="col-md-2">
					<input type="number" className="form-control" placeholder="Quantuty" 
						value={this.state.qty}
						onChange={evt => this.setState({qty: evt.target.value})}/>
				</td>
				<td className="col-md-2">
					<div className="input-group">
						<span className="input-group-addon" id="basic-addon1">$</span>
						<input type="number" className="form-control" placeholder="Price"
							value={this.state.price} 
							onChange={evt => this.setState({price: evt.target.value})}/>
					</div>
				</td>
				<td className="col-md-3">
					${ this.state.price*this.state.qty ? (this.state.price*this.state.qty).toFixed(2) : 0}
				</td>
					{ 
						this.props.onAdd ? 
						<td className="col-md-2">
							<button type="button" className="btn btn-primary" onClick={this.onAddClick}>
								<span className="glyphicon glyphicon-remove-save"></span>Save new item
							</button>
						</td>:
						<td className="col-md-2">
							<button type="button" className="btn btn-primary" 
								onClick={rec => this.props.onUpdate(this.state.id, this.state.item, this.state.qty, this.state.price)}>
								<span className="glyphicon glyphicon-remove-save"></span> Save
							</button>
							<button type="button" className="btn btn-danger" 
								onClick={rec => this.props.onDelete(this.state.id)}>
								<span className="glyphicon glyphicon-remove-sign"></span> Delete
							</button>
						</td>
					}
			</tr>
		)
	}
}

