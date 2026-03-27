/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "admin@zainpackages.com" }],
    subject: "New Bulk Inquiry from " + e.record.get("companyName"),
    html: "<h2>New Bulk Inquiry</h2><p><strong>Company Name:</strong> " + e.record.get("companyName") + "</p><p><strong>Contact Name:</strong> " + e.record.get("contactName") + "</p><p><strong>Email:</strong> " + e.record.get("email") + "</p><p><strong>Phone:</strong> " + e.record.get("phone") + "</p><p><strong>Order Details:</strong><br>" + e.record.get("orderDetails") + "</p><p><strong>Estimated Quantity:</strong> " + (e.record.get("estimatedQuantity") || "Not specified") + "</p><p><strong>Budget:</strong> " + (e.record.get("budget") || "Not specified") + "</p><p><strong>Inquiry ID:</strong> " + e.record.id + "</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "inquiries");