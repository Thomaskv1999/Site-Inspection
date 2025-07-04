# Copyright (c) 2025, thomas and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class SiteInspection(Document):
	def on_submit(self):
		if (self.create_followup_task ==1):
			doc = frappe.new_doc("ToDo")
			doc.description = "Follow up on inspection feedback"
			doc.reference_type = "Site Inspection"
			doc.reference_name = self.name
			# sp = frappe.db.get_value("Quotation",self.quotation,"custom_sales_person")
			# doc.allocated_to = sp
			frappe.msgprint("Task Created")
			doc.insert()
    
	def before_submit(self):
		for i in self.items:
			if (i.inspection_rating == "Poor"):
				frappe.msgprint(f"Inspection Rating is Poor for item {i.item_name}")





