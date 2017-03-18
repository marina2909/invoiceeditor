import React from 'react';

export default class extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: '',
			qty: '',
			price: ''
		};
		this.onAddClick = this.onAddClick.bind(this); 
	}

	componentWillMount(){
		this.setState({
			id: this.props.rec.id,
			item: this.props.rec.item,
			qty: this.props.rec.qty,
			price: this.props.rec.price
		})
	}

	onAddClick(){
		this.props.onAdd(this.state.item, this.state.qty, this.state.price);
		this.setState({
			item: '',
			qty: '',
			price: ''
		});
	}

	render(){
		return (
			<tr key={this.state.id}>
				<td className="col-md-3">
					<input type="text" className="form-control" placeholder="Item" 
						value={this.state.item}
						onChange={evt => this.setState({item : evt.target.value })}/>
				</td>
				<td className="col-md-2">
					<input type="number" className="form-control" placeholder="Quantuty" 
						value={this.state.qty}
						onChange={evt => this.setState({qty : evt.target.value })}/>
				</td>
				<td className="col-md-2">
					<div className="input-group">
						<span className="input-group-addon" id="basic-addon1">$</span>
						<input type="number" className="form-control" placeholder="Price"
							value={this.state.price} 
							onChange={evt => this.setState({price : evt.target.value })}/>
					</div>
				</td>
				<td className="col-md-3">
					${ this.state.price*this.state.qty ? Math.round(this.state.price*this.state.qty,2) : 0}
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

