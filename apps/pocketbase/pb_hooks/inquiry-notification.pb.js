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
      console.log("Mailer is not configured; skipping bulk inquiry email.");
      e.next();
      return;
    }

    if (!senderAddress) {
      console.log("Sender address is empty; skipping bulk inquiry email.");
      e.next();
      return;
    }

    const message = new MailerMessage({
      from: {
        address: senderAddress,
        name: settings.meta.senderName || "Sheikh Cosmetics"
      },
      to: [{ address: "info@sheikhcosmetics.com" }],
      subject: "New Bulk Inquiry from " + e.record.get("companyName"),
      html: "<h2>New Bulk Inquiry</h2><p><strong>Company Name:</strong> " + e.record.get("companyName") + "</p><p><strong>Contact Name:</strong> " + e.record.get("contactName") + "</p><p><strong>Email:</strong> " + e.record.get("email") + "</p><p><strong>Phone:</strong> " + e.record.get("phone") + "</p><p><strong>Order Details:</strong><br>" + e.record.get("orderDetails") + "</p><p><strong>Estimated Quantity:</strong> " + (e.record.get("estimatedQuantity") || "Not specified") + "</p><p><strong>Budget:</strong> " + (e.record.get("budget") || "Not specified") + "</p><p><strong>Inquiry ID:</strong> " + e.record.id + "</p>"
    });

    $app.newMailClient().send(message);
  } catch (error) {
    console.log("Bulk inquiry email failed: " + error);
  }
  e.next();
}, "inquiries");
