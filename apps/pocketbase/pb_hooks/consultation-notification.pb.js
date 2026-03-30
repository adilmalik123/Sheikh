/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "info@sheikhcosmetics.com" }],
    subject: "New Consultation Request from " + e.record.get("name"),
    html: "<h2>New Consultation Request</h2><p><strong>Name:</strong> " + e.record.get("name") + "</p><p><strong>Email:</strong> " + e.record.get("email") + "</p><p><strong>Phone:</strong> " + e.record.get("phone") + "</p><p><strong>Project Description:</strong><br>" + e.record.get("projectDescription") + "</p><p><strong>Preferred Contact Method:</strong> " + (e.record.get("preferredContactMethod") || "Not specified") + "</p><p><strong>Request ID:</strong> " + e.record.id + "</p>"
  });
  try {
    $app.newMailClient().send(message);
  } catch (error) {
    $app.logger().error("Failed to send consultation notification email", "error", error);
  }
  e.next();
}, "consultations");
