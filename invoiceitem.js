import React from 'react';
import ajax from './ajax';

export default class InvoiceItem extends React.Component{
	constructor(props){
		super(props);
		this.state = { 
			id: props.rec.id||'',
			item: props.rec.item||'',
			qty: props.rec.qty||'',
			price: props.rec.price||''
		};
		this.onAddClick = this.onAddClick.bind(this); 
		this.onUpdateClick = this.onUpdateClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	onAddClick(){
		if (!this.state.item || !(this.state.qty && this.state.qty>=0) || !(this.state.price && this.state.price>=0)){
			alert('Values are not valid');
			return;
		}
		ajax.add(this.state.item, this.state.qty, this.state.price)
			.then(data => this.props.onAdd(data))
			.then(()=>{
				this.setState({
					id: '',
					item: '',
					qty: '',
					price: ''
				});
			});
	}

	onUpdateClick(){
		if (!this.state.item || !(this.state.qty && this.state.qty>=0) || !(this.state.price && this.state.price>=0)){
			alert('Values are not valid');
			return;
		}
		ajax.update(this.state.id, this.state.item, this.state.qty, this.state.price)
			.then(data => this.props.onUpdate(data));
	}

	onDeleteClick(){
		ajax.delete(this.state.id).then(data => this.props.onDelete(data));
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
				<td className="col-md-3 vertical-middle">
					${(this.state.price*this.state.qty).toFixed(2)}
				</td>
					{ 
						this.props.onAdd ? 
						<td className="col-md-2">
							<button type="button" className="btn btn-primary" onClick={this.onAddClick}>
								<span className="glyphicon glyphicon-remove-save"></span>Save new item
							</button>
						</td>:
						<td className="col-md-2">
							<span className="separator-right-2">
								<button type="button" className="btn btn-primary" 
									onClick={this.onUpdateClick}>
									<span className="glyphicon glyphicon-remove-save"></span> Save
								</button>
							</span>
							<button type="button" className="btn btn-danger" 
								onClick={this.onDeleteClick}>
								<span className="glyphicon glyphicon-remove-sign"></span> Delete
							</button>
						</td>
					}
			</tr>
		)
	}
}

InvoiceItem.defaultProps = {
	rec: {}
};

