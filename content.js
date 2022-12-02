$(function(){
	let items = $("[tabular-attribute-name='販売元'] > .tabular-buybox-text > span"); 
	items.each(function(i, elem) {
		console.log(i + ': ' + $(elem).text());
		if($(elem).text() != 'Amazon' && $(elem).text() != 'Amazon.co.jp'){
			$("#addToCart_feature_div").html('販売元がAmazonではありません。') ;
			$("#buyNow").html('販売元がAmazonではありません。') ;
		}
	});
});