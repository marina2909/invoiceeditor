import React from 'react';

export default function InvoiceTotals(props){
	
	let subTotal = props.invoiceitems.reduce((acc, rec) => acc+rec.qty*rec.price, 0);
	let tax = 0.05*subTotal;
	let total = subTotal+tax;

	return (
		<div className="row">
			<div className="col-md-3 col-md-offset-9">
				<div className="panel panel-default">
					<strong>
						<div className="panel-body bg-success">
							<div className="row">
								<div className="col-xs-6">Subtotal</div>
								<div className="col-xs-6 text-right">${subTotal.toFixed(2)}</div>
							</div>
							<div className="row separator-top-10">
								<div className="col-xs-6">Tax (5%)</div>
								<div className="col-xs-6 text-right">${tax.toFixed(2)}</div>
							</div>
							<div className="row separator-top-10">
								<div className="col-xs-6">Total</div>
								<div className="col-xs-6 text-right">${total.toFixed(2)}</div>
							</div>
						</div>
					</strong>
				</div>
			</div>
		</div>
	);
	
}