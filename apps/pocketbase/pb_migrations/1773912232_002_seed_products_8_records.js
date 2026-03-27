/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  const record0 = new Record(collection);
    record0.set("name", "Husn-e-Turk Whitening Cream 50g");
    record0.set("brand", "Husn-e-Turk");
    record0.set("description", "Premium whitening beauty cream with advanced formula for brightening and moisturizing");
    record0.set("skinBenefits", "Brightening, Whitening, Moisturizing, Anti-aging, Skin Lightening");
    record0.set("keyIngredients", "Kojic Acid, Vitamin C, Glycerin, Aloe Vera, Shea Butter");
    record0.set("price", 1299);
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
    record1.set("name", "Beautyloop Radiance Cream 50g");
    record1.set("brand", "Beautyloop");
    record1.set("description", "Luxurious whitening cream for radiant and glowing skin");
    record1.set("skinBenefits", "Brightening, Whitening, Moisturizing, Skin Radiance");
    record1.set("keyIngredients", "Niacinamide, Vitamin E, Glycerin, Aloe Vera");
    record1.set("price", 999);
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
    record2.set("name", "Arman Premium Whitening 50g");
    record2.set("brand", "Arman Beauty Cream");
    record2.set("description", "Professional grade whitening cream with natural extracts");
    record2.set("skinBenefits", "Whitening, Brightening, Moisturizing, Skin Renewal");
    record2.set("keyIngredients", "Arbutin, Vitamin C, Glycerin, Rose Extract");
    record2.set("price", 1199);
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
    record3.set("name", "Hijab Protective Whitening 50g");
    record3.set("brand", "Hijab Beauty Cream");
    record3.set("description", "Specially formulated whitening cream with protective benefits");
    record3.set("skinBenefits", "Whitening, Brightening, Moisturizing, Skin Protection");
    record3.set("keyIngredients", "Kojic Acid, Glycerin, Vitamin E, Aloe Vera");
    record3.set("price", 899);
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
    record4.set("name", "Taryak Natural Whitening 50g");
    record4.set("brand", "Taryak Beauty Cream");
    record4.set("description", "Natural whitening cream with herbal ingredients");
    record4.set("skinBenefits", "Whitening, Brightening, Moisturizing, Anti-inflammatory");
    record4.set("keyIngredients", "Turmeric, Glycerin, Aloe Vera, Vitamin C");
    record4.set("price", 799);
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
    record5.set("name", "Shaheen Soft Whitening 50g");
    record5.set("brand", "Shaheen Beauty Cream");
    record5.set("description", "Gentle whitening cream for soft and smooth skin");
    record5.set("skinBenefits", "Whitening, Brightening, Moisturizing, Skin Softening");
    record5.set("keyIngredients", "Glycerin, Aloe Vera, Vitamin E, Shea Butter");
    record5.set("price", 899);
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
    record6.set("name", "Nuha Hydrating Whitening 50g");
    record6.set("brand", "Nuha Beauty Cream");
    record6.set("description", "Hydrating whitening cream with intensive moisture formula");
    record6.set("skinBenefits", "Whitening, Brightening, Moisturizing, Skin Hydration");
    record6.set("keyIngredients", "Glycerin, Aloe Vera, Vitamin C, Hyaluronic Acid");
    record6.set("price", 1099);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("name", "Husn-e-Turk Deluxe Whitening 100g");
    record7.set("brand", "Husn-e-Turk");
    record7.set("description", "Large size premium whitening cream for extended use");
    record7.set("skinBenefits", "Brightening, Whitening, Moisturizing, Anti-aging");
    record7.set("keyIngredients", "Kojic Acid, Vitamin C, Glycerin, Aloe Vera, Hyaluronic Acid");
    record7.set("price", 2299);
  try {
    app.save(record7);
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
