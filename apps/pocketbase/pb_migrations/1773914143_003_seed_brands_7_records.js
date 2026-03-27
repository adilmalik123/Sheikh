/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("brands");

  const record0 = new Record(collection);
    record0.set("name", "Husn-e-Turk");
    record0.set("description", "Premium Turkish beauty brand specializing in natural skincare and whitening products with traditional formulations");
    record0.set("benefits", "Natural ingredients, skin brightening, anti-aging, moisturizing");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("name", "Beautyloop");
    record1.set("description", "Modern beauty brand focused on innovative whitening and skincare solutions for all skin types");
    record1.set("benefits", "Advanced formulation, fast results, dermatologist tested, suitable for sensitive skin");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("name", "Arman");
    record2.set("description", "Luxury skincare brand offering premium whitening creams and soaps with exotic ingredients");
    record2.set("benefits", "Luxury experience, intensive whitening, skin rejuvenation, long-lasting effects");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("name", "Hijab");
    record3.set("description", "Halal-certified beauty brand dedicated to modest beauty and natural whitening products");
    record3.set("benefits", "Halal certified, natural ingredients, ethical sourcing, gentle on skin");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "Taryak");
    record4.set("description", "Traditional herbal beauty brand combining ancient recipes with modern skincare science");
    record4.set("benefits", "Herbal formulation, traditional wisdom, natural whitening, skin healing");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "Shaheen");
    record5.set("description", "Professional beauty brand trusted by salons and beauty experts for premium whitening solutions");
    record5.set("benefits", "Professional grade, salon quality, proven results, expert recommended");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "Nuha");
    record6.set("description", "Organic beauty brand committed to sustainable and eco-friendly whitening skincare products");
    record6.set("benefits", "Organic certified, eco-friendly, sustainable, cruelty-free, natural whitening");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
