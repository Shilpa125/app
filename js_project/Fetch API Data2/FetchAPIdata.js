fetch('https://saurav.tech/NewsAPI/everything/cnn.json').then((data)=>{
	console.log(data);
	return data.json();
}).then((completedata)=>{
    console.log(completedata)
let data = "";
completedata.articles.map((values)=>{
	data+=`
	   
         
       <div class="col-lg-4"> 
       <div class="cardss">
        <img src=${values.urlToImage} alt="">
      <p class="publishedAt"><strong>${values.publishedAt}</strong></p>
      <h4 class="title">${values.title.substr(0,100)}</h4>
      <h6 cards="content">${values.content.substr(1,200)}</h6>
      </div>
       </div>
       
 

	</div>`
});




  console.log(data);
  document.getElementById("row").innerHTML=data;
}).catch((err)=>{
	console.log(err);
})