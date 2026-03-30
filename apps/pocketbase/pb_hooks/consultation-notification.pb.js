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
      console.log("Mailer is not configured; skipping consultation notification email.");
      e.next();
      return;
    }

    if (!senderAddress) {
      console.log("Sender address is empty; skipping consultation notification email.");
      e.next();
      return;
    }

    const message = new MailerMessage({
      from: {
        address: senderAddress,
        name: settings.meta.senderName || "Sheikh Cosmetics"
      },
      to: [{ address: "info@sheikhcosmetics.com" }],
      subject: "New Consultation Request from " + e.record.get("name"),
      html: "<h2>New Consultation Request</h2><p><strong>Name:</strong> " + e.record.get("name") + "</p><p><strong>Email:</strong> " + e.record.get("email") + "</p><p><strong>Phone:</strong> " + e.record.get("phone") + "</p><p><strong>Project Description:</strong><br>" + e.record.get("projectDescription") + "</p><p><strong>Preferred Contact Method:</strong> " + (e.record.get("preferredContactMethod") || "Not specified") + "</p><p><strong>Request ID:</strong> " + e.record.id + "</p>"
    });

    $app.newMailClient().send(message);
  } catch (error) {
    console.log("Consultation notification email failed: " + error);
  }
  e.next();
}, "consultations");
