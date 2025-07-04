// Copyright (c) 2025, thomas and contributors
// For license information, please see license.txt

frappe.ui.form.on("Site Inspection", {
	   quotation: function(frm){
		if (frm.doc.quotation){
			frappe.call(
				{
					method : "frappe.client.get",
					args:{
						doctype:"Quotation",
						name:frm.doc.quotation

					},
					callback:function(r){
						let item = r.message.items
						frm.clear_table("items")
						item.forEach(item=> {
							let child = frm.add_child("items")
							child.item = item.item_code
							child.item_name = item.item_name

						})
						frm.refresh_field("items")
					}

				}
			)
           }},
		status: function(frm){   
			if (frm.doc.status === "Under Review"){
		frm.add_custom_button("Mark As Completed",function(){
		
			frm.set_value("status","Completed")
	
				}
				
				)}
			else{
				frm.remove_custom_button("Mark As Completed")
			}
		

			}	}
		)
 