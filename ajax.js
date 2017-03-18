let invoiceitems = [{id: 1, item: 'Widget', qty: 2, price: 20},
					{id: 2, item: 'Cog', qty: 2, price: 31.98}];
let maxid = 2;
export default{
	update: function(id, item, qty, price){
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				let editItem = invoiceitems.find(item => item.id == id);
				editItem.item = item;
				editItem.qty = qty;
				editItem.price = price;
				resolve(editItem);
			}, 100);
		});
	},
	add: function(item, qty, price){
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				maxid++;
				let newItem = {id: maxid, item: item, qty: qty, price: price};
				invoiceitems.push(newItem);
				resolve(newItem);
			}, 100);
		});
	},
	delete: function(id){
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				invoiceitems = invoiceitems.filter(rec => rec.id != id);
				resolve(id);
			}, 100);
		});
	},
	getAll: function(){
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve(invoiceitems.slice());
			}, 100);
		});
	} 
}

