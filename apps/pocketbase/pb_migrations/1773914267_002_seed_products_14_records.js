/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  const record0 = new Record(collection);
    record0.set("name", "Husn-e-Turk Premium Whitening Cream");
    record0.set("brand", "Husn-e-Turk");
    record0.set("productType", "Whitening Cream");
    record0.set("price", 45.99);
    record0.set("description", "Luxurious whitening cream with natural ingredients");
    record0.set("skinBenefits", "Brightens skin, reduces dark spots, improves complexion");
    record0.set("keyIngredients", "Kojic acid, vitamin C, aloe vera");
    record0.set("usageInstructions", "Apply twice daily for best results");
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
    record1.set("name", "Husn-e-Turk Whitening Soap");
    record1.set("brand", "Husn-e-Turk");
    record1.set("productType", "Whitening Soap");
    record1.set("price", 12.99);
    record1.set("description", "Premium whitening soap bar");
    record1.set("skinBenefits", "Gentle cleansing, skin brightening, moisturizing");
    record1.set("keyIngredients", "Glycerin, kojic acid, natural oils");
    record1.set("usageInstructions", "Use daily for cleansing");
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
    record2.set("name", "Beautyloop Radiant Whitening Cream");
    record2.set("brand", "Beautyloop");
    record2.set("productType", "Whitening Cream");
    record2.set("price", 52.99);
    record2.set("description", "Advanced whitening formula");
    record2.set("skinBenefits", "Intense brightening, anti-aging, hydration");
    record2.set("keyIngredients", "Niacinamide, hyaluronic acid, vitamin E");
    record2.set("usageInstructions", "Apply morning and night");
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
    record3.set("name", "Beautyloop Whitening Soap");
    record3.set("brand", "Beautyloop");
    record3.set("productType", "Whitening Soap");
    record3.set("price", 14.99);
    record3.set("description", "Luxurious whitening soap");
    record3.set("skinBenefits", "Deep cleansing, brightening, softening");
    record3.set("keyIngredients", "Shea butter, kojic acid, rose extract");
    record3.set("usageInstructions", "Use twice daily");
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
    record4.set("name", "Arman Elite Whitening Cream");
    record4.set("brand", "Arman");
    record4.set("productType", "Whitening Cream");
    record4.set("price", 48.99);
    record4.set("description", "Premium whitening treatment");
    record4.set("skinBenefits", "Brightens, firms, rejuvenates");
    record4.set("keyIngredients", "Arbutin, vitamin C, peptides");
    record4.set("usageInstructions", "Apply before bedtime");
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
    record5.set("name", "Arman Whitening Soap");
    record5.set("brand", "Arman");
    record5.set("productType", "Whitening Soap");
    record5.set("price", 13.99);
    record5.set("description", "Gentle whitening soap");
    record5.set("skinBenefits", "Cleansing, brightening, nourishing");
    record5.set("keyIngredients", "Coconut oil, kojic acid, honey");
    record5.set("usageInstructions", "Use daily");
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
    record6.set("name", "Hijab Pure Whitening Cream");
    record6.set("brand", "Hijab");
    record6.set("productType", "Whitening Cream");
    record6.set("price", 46.99);
    record6.set("description", "Natural whitening cream");
    record6.set("skinBenefits", "Brightens, protects, moisturizes");
    record6.set("keyIngredients", "Natural extracts, vitamin C, SPF");
    record6.set("usageInstructions", "Apply daily with SPF protection");
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
    record7.set("name", "Hijab Whitening Soap");
    record7.set("brand", "Hijab");
    record7.set("productType", "Whitening Soap");
    record7.set("price", 11.99);
    record7.set("description", "Pure whitening soap bar");
    record7.set("skinBenefits", "Gentle, brightening, protective");
    record7.set("keyIngredients", "Natural oils, kojic acid, aloe");
    record7.set("usageInstructions", "Use twice daily");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("name", "Taryak Luxury Whitening Cream");
    record8.set("brand", "Taryak");
    record8.set("productType", "Whitening Cream");
    record8.set("price", 54.99);
    record8.set("description", "Luxury whitening formula");
    record8.set("skinBenefits", "Intense brightening, anti-wrinkle, hydrating");
    record8.set("keyIngredients", "Gold particles, vitamin E, hyaluronic acid");
    record8.set("usageInstructions", "Apply morning and night");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("name", "Taryak Whitening Soap");
    record9.set("brand", "Taryak");
    record9.set("productType", "Whitening Soap");
    record9.set("price", 15.99);
    record9.set("description", "Premium whitening soap");
    record9.set("skinBenefits", "Luxurious cleansing, brightening");
    record9.set("keyIngredients", "Luxury oils, kojic acid, rose water");
    record9.set("usageInstructions", "Use daily");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("name", "Shaheen Radiant Whitening Cream");
    record10.set("brand", "Shaheen");
    record10.set("productType", "Whitening Cream");
    record10.set("price", 49.99);
    record10.set("description", "Radiant whitening treatment");
    record10.set("skinBenefits", "Brightens, smooths, rejuvenates");
    record10.set("keyIngredients", "Vitamin C, kojic acid, aloe vera");
    record10.set("usageInstructions", "Apply twice daily");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("name", "Shaheen Whitening Soap");
    record11.set("brand", "Shaheen");
    record11.set("productType", "Whitening Soap");
    record11.set("price", 12.99);
    record11.set("description", "Gentle whitening soap");
    record11.set("skinBenefits", "Cleansing, brightening, softening");
    record11.set("keyIngredients", "Natural extracts, kojic acid, glycerin");
    record11.set("usageInstructions", "Use daily");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("name", "Nuha Premium Whitening Cream");
    record12.set("brand", "Nuha");
    record12.set("productType", "Whitening Cream");
    record12.set("price", 51.99);
    record12.set("description", "Premium whitening cream");
    record12.set("skinBenefits", "Brightens, firms, hydrates");
    record12.set("keyIngredients", "Niacinamide, vitamin C, peptides");
    record12.set("usageInstructions", "Apply morning and night");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("name", "Nuha Whitening Soap");
    record13.set("brand", "Nuha");
    record13.set("productType", "Whitening Soap");
    record13.set("price", 13.99);
    record13.set("description", "Premium whitening soap bar");
    record13.set("skinBenefits", "Gentle cleansing, brightening, moisturizing");
    record13.set("keyIngredients", "Shea butter, kojic acid, natural oils");
    record13.set("usageInstructions", "Use twice daily");
  try {
    app.save(record13);
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
