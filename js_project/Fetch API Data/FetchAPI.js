fetch('https://fakestoreapi.com/products').then((data) =>{
	console.log(data);

	return data.json();
}).then((completedata) =>{
	// console.log(completedata[2].title);

	let data = "" ;
	completedata.map((values) =>{
		data+=` 
		<div class="card px-3 shadow p-3 mb-5 bg-body-tertiary rounded" style="width:20rem;">
		<img src=${values.image} class="card-img-top shadow p-3 mb-1 bg-white rounded" alt="" width="200px" height="300px">
		<div class="card-body">
		<h3 class=" card-title">${values.title.substr(0,10)}</h3>
		<h6 class="text-primary">${values.category}</h6>
		<p class="description">${values.description.substr(1,30)}</p>
		<p class="price">${values.price}</p>
		<div class="d-flex justify-content-between bd-height">
		  <p class="rate">Rate: <strong>${values.rating.rate}</strong></p>
		  <p class="count">Count: <strong>${values.rating.count}</strong></p>
		</div>
		
	</div>	
	</div>`
	});

	console.log(data);
	document.getElementById("cards").innerHTML=data;
}).catch((err) =>{
	console.log(err);
})

