$(document).ready(function() {
			$.getJSON("product.json", function(data) {
				$("table").append("<tr>"+"<th>Name</th>" +"<th>Quantity</th>"+ "<th>Stock#</th>"+ "<th>Capacity</th>"+ "<th>Colour</th>" + "</tr>");
				$.each(data, function() {
					$.each(this, function(key, value){
						$("table").append(
							"<tr>"+
								"<td>"+	 value.name + "</td>" +
								"<td>" +  value.quantity + "</td>"+
								"<td>" + value.stock + "</td>" +
								"<td>" + value.capacity + "</td>" +
								"<td>" + value.color + "</td>"+
							"</tr>"
						);
					});
				});
						
			});
				
			
});