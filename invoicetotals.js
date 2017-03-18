import React from 'react';

export default class InvoiceTotals extends React.Component{
	constructor(props){
		super(props);
	}

	getTotal(){
		return this.props.invoiceitems.reduce((acc, rec) => acc+rec.qty*rec.price , 0);
	}

	getTax(){
		return 0.05*this.getTotal();
	}

	getSubtotal(){
		return this.getTotal()+this.getTax();
	}

	render(){
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-8">
				<div className="panel panel-default">
					<div className="panel-body">
						Subtotal ${Math.round(this.getTotal(),2)}
					</div>
					<div className="panel-body">
						Tax ${Math.round(this.getTax(),2)}
					</div>
					<div className="panel-body">
						Subtotal ${Math.round(this.getSubtotal(),2)}
					</div>
				</div>
				</div>
			</div>
		);
	}
}