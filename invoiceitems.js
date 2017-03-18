import React from 'react';
import Invoiceitem from './invoiceitem';
import InvoiceTotals from './invoicetotals';

export default function Invoiceitems(props){

	return (
		<div>
			<div className="table-container">
				<table className="table table-striped table-bordered">
					<thead>
						<tr className="bg-success">
							<th className="col-md-3">Item</th>
							<th className="col-md-2">Qty</th>
							<th className="col-md-2">Price</th>
							<th className="col-md-3">Total</th>
							<th></th>
						</tr>
					</thead>
					<tbody>	
						{props.invoiceitems.map(rec=>(
							<Invoiceitem key={rec.id} rec={rec} onUpdate={props.onUpdate} onDelete={props.onDelete}/>
						))}
						<Invoiceitem key={-1} onAdd={props.onAdd}/>
					</tbody>
				</table>
			</div>
			<InvoiceTotals invoiceitems={props.invoiceitems}/>
		</div>
	);
}



