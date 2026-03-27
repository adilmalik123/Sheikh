/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("brands");

  const record0 = new Record(collection);
    record0.set("name", "Husn-e-Turk");
    record0.set("description", "Premium whitening beauty cream with natural ingredients");
    record0.set("benefits", "Whitening, brightening, skin lightening, even skin tone");
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
    record1.set("description", "Advanced whitening beauty cream for radiant skin");
    record1.set("benefits", "Whitening, brightening, moisturizing, anti-aging");
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
    record2.set("name", "Arman Beauty Cream");
    record2.set("description", "Luxurious whitening cream with herbal extracts");
    record2.set("benefits", "Whitening, skin brightening, nourishing, protective");
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
    record3.set("name", "Hijab Beauty Cream");
    record3.set("description", "Specialized whitening cream for sensitive skin");
    record3.set("benefits", "Whitening, gentle brightening, soothing, hydrating");
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
    record4.set("name", "Taryak Beauty Cream");
    record4.set("description", "Traditional whitening cream with proven results");
    record4.set("benefits", "Whitening, skin lightening, rejuvenating, moisturizing");
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
    record5.set("name", "Shaheen Beauty Cream");
    record5.set("description", "Professional whitening cream for all skin types");
    record5.set("benefits", "Whitening, brightening, clarifying, protective");
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
    record6.set("name", "Nuha Beauty Cream");
    record6.set("description", "Natural whitening cream with organic ingredients");
    record6.set("benefits", "Whitening, brightening, nourishing, anti-inflammatory");
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
