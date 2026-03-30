/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  try {
    const settings = $app.settings();
    const senderAddress = settings.meta.senderAddress;
    const smtpEnabled = !!(settings.smtp && settings.smtp.enabled);
    const hasBuilderMailer =
      !!$os.getenv("BUILDER_MAILER_SENDER_ADDRESS") &&
      !!$os.getenv("BUILDER_MAILER_API_URL") &&
      !!$os.getenv("BUILDER_MAILER_API_KEY");

    if (!smtpEnabled && !hasBuilderMailer) {
      console.log("Mailer is not configured; skipping order confirmation email.");
      e.next();
      return;
    }

    if (!senderAddress) {
      console.log("Sender address is empty; skipping order confirmation email.");
      e.next();
      return;
    }

    const message = new MailerMessage({
      from: {
        address: senderAddress,
        name: settings.meta.senderName || "Sheikh Cosmetics"
      },
      to: [{ address: e.record.get("customerEmail") }],
      subject: "Order Confirmation #" + e.record.id,
      html: "<h1>Thank you for your order!</h1><p><strong>Order ID:</strong> " + e.record.id + "</p><p><strong>Customer Name:</strong> " + e.record.get("customerName") + "</p><p><strong>Product Type:</strong> " + e.record.get("productType") + "</p><p><strong>Quantity:</strong> " + e.record.get("quantity") + "</p><p><strong>Total Price:</strong> " + e.record.get("totalPrice") + "</p><p><strong>Delivery Address:</strong> " + e.record.get("deliveryAddress") + "</p><p>We will process your order shortly and keep you updated.</p>"
    });

    $app.newMailClient().send(message);
  } catch (error) {
    console.log("Order confirmation email failed: " + error);
  }
  e.next();
}, "orders");
