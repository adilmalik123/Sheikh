/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: e.record.get("customerEmail") }],
    subject: "Order Confirmation #" + e.record.id,
    html: "<h1>Thank you for your order!</h1><p><strong>Order ID:</strong> " + e.record.id + "</p><p><strong>Customer Name:</strong> " + e.record.get("customerName") + "</p><p><strong>Product Type:</strong> " + e.record.get("productType") + "</p><p><strong>Quantity:</strong> " + e.record.get("quantity") + "</p><p><strong>Total Price:</strong> " + e.record.get("totalPrice") + "</p><p><strong>Delivery Address:</strong> " + e.record.get("deliveryAddress") + "</p><p>We will process your order shortly and keep you updated.</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "orders");