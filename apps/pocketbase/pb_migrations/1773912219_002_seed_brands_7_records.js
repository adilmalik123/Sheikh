/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("brands");

  const record0 = new Record(collection);
    record0.set("name", "Husn-e-Turk");
    record0.set("description", "Whitening Beauty Cream");
    record0.set("benefits", "Brightening, Whitening, Moisturizing, Anti-aging, Skin Lightening");
    record0.set("ingredients", "Kojic Acid, Vitamin C, Glycerin, Aloe Vera, Shea Butter, Hyaluronic Acid");
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
    record1.set("description", "Whitening Beauty Cream");
    record1.set("benefits", "Brightening, Whitening, Moisturizing, Skin Radiance");
    record1.set("ingredients", "Niacinamide, Vitamin E, Glycerin, Aloe Vera, Jojoba Oil");
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
    record2.set("description", "Premium Whitening Beauty Cream");
    record2.set("benefits", "Whitening, Brightening, Moisturizing, Skin Renewal");
    record2.set("ingredients", "Arbutin, Vitamin C, Glycerin, Rose Extract, Aloe Vera");
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
    record3.set("description", "Whitening Beauty Cream");
    record3.set("benefits", "Whitening, Brightening, Moisturizing, Skin Protection");
    record3.set("ingredients", "Kojic Acid, Glycerin, Vitamin E, Aloe Vera, Sunflower Oil");
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
    record4.set("description", "Whitening Beauty Cream");
    record4.set("benefits", "Whitening, Brightening, Moisturizing, Anti-inflammatory");
    record4.set("ingredients", "Turmeric, Glycerin, Aloe Vera, Vitamin C, Coconut Oil");
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
    record5.set("description", "Whitening Beauty Cream");
    record5.set("benefits", "Whitening, Brightening, Moisturizing, Skin Softening");
    record5.set("ingredients", "Glycerin, Aloe Vera, Vitamin E, Shea Butter, Chamomile Extract");
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
    record6.set("description", "Whitening Beauty Cream");
    record6.set("benefits", "Whitening, Brightening, Moisturizing, Skin Hydration");
    record6.set("ingredients", "Glycerin, Aloe Vera, Vitamin C, Hyaluronic Acid, Rose Water");
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
