/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "info@sheikhcosmetics.com" }],
    subject: "New Distributor Inquiry: " + e.record.get("companyName"),
    html:
      "<h2>New Distributor Inquiry</h2>" +
      "<p><strong>Full Name:</strong> " + e.record.get("fullName") + "</p>" +
      "<p><strong>Company Name:</strong> " + e.record.get("companyName") + "</p>" +
      "<p><strong>Email:</strong> " + e.record.get("email") + "</p>" +
      "<p><strong>Phone:</strong> " + e.record.get("phone") + "</p>" +
      "<p><strong>City / Region:</strong> " + (e.record.get("city") || "Not specified") + "</p>" +
      "<p><strong>Message:</strong><br>" + (e.record.get("message") || "Not provided") + "</p>" +
      "<p><strong>Status:</strong> " + (e.record.get("status") || "new") + "</p>" +
      "<p><strong>Inquiry ID:</strong> " + e.record.id + "</p>"
  });
  try {
    $app.newMailClient().send(message);
  } catch (error) {
    $app.logger().error("Failed to send distributor inquiry email", "error", error);
  }
  e.next();
}, "distributors");
