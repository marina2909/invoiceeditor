import React from 'react';
import Invoiceitem from './invoiceitem';
import InvoiceTotals from './invoicetotals';

export default class extends React.Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<div className="table-container">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th className="col-md-3">Item</th>
								<th className="col-md-2">Qty</th>
								<th className="col-md-2">Price</th>
								<th className="col-md-3">Total</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<Invoiceitem rec={{}} onAdd={this.props.onAdd}/>
							{this.props.invoiceitems.map(rec=>(
								<Invoiceitem rec={rec} onUpdate={this.props.onUpdate} onDelete={this.props.onDelete}/>
							))}
						</tbody>
					</table>
				</div>
				<InvoiceTotals invoiceitems={this.props.invoiceitems}/>
			</div>
		);
	}
}


