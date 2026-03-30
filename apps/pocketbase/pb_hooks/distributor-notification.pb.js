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
      console.log("Mailer is not configured; skipping distributor inquiry email.");
      e.next();
      return;
    }

    if (!senderAddress) {
      console.log("Sender address is empty; skipping distributor inquiry email.");
      e.next();
      return;
    }

    const message = new MailerMessage({
      from: {
        address: senderAddress,
        name: settings.meta.senderName || "Sheikh Cosmetics"
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

    $app.newMailClient().send(message);
  } catch (error) {
    console.log("Distributor inquiry email failed: " + error);
  }
  e.next();
}, "distributors");
