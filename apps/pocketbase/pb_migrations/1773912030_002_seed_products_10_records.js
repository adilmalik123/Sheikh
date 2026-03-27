/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  const record0 = new Record(collection);
    record0.set("name", "Husn-e-Turk Premium Whitening Cream");
    record0.set("brand", "Husn-e-Turk");
    record0.set("description", "Intensive whitening cream with natural botanical extracts for deep skin lightening");
    record0.set("skinBenefits", "Whitening, brightening, even skin tone, radiant complexion");
    record0.set("keyIngredients", "Kojic acid, vitamin C, aloe vera, glycerin");
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
    record1.set("name", "Beautyloop Radiant White Cream");
    record1.set("brand", "Beautyloop");
    record1.set("description", "Advanced formula for visible whitening and skin brightening");
    record1.set("skinBenefits", "Whitening, brightening, moisturizing, anti-aging");
    record1.set("keyIngredients", "Niacinamide, hyaluronic acid, vitamin E, arbutin");
    record1.set("price", 1499);
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
    record2.set("name", "Arman Herbal Whitening Cream");
    record2.set("brand", "Arman Beauty Cream");
    record2.set("description", "Luxurious cream with herbal extracts for natural whitening");
    record2.set("skinBenefits", "Whitening, skin brightening, nourishing, protective");
    record2.set("keyIngredients", "Turmeric, saffron, sandalwood, rose extract");
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
    record3.set("name", "Hijab Gentle Whitening Cream");
    record3.set("brand", "Hijab Beauty Cream");
    record3.set("description", "Specialized formula for sensitive skin with gentle whitening action");
    record3.set("skinBenefits", "Whitening, gentle brightening, soothing, hydrating");
    record3.set("keyIngredients", "Chamomile, aloe vera, vitamin C, glycerin");
    record3.set("price", 999);
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
    record4.set("name", "Taryak Traditional Whitening Cream");
    record4.set("brand", "Taryak Beauty Cream");
    record4.set("description", "Time-tested formula with proven whitening results");
    record4.set("skinBenefits", "Whitening, skin lightening, rejuvenating, moisturizing");
    record4.set("keyIngredients", "Kojic acid, licorice extract, vitamin C, shea butter");
    record4.set("price", 1099);
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
    record5.set("name", "Shaheen Professional Whitening Cream");
    record5.set("brand", "Shaheen Beauty Cream");
    record5.set("description", "Professional-grade whitening cream suitable for all skin types");
    record5.set("skinBenefits", "Whitening, brightening, clarifying, protective");
    record5.set("keyIngredients", "Alpha-arbutin, vitamin C, niacinamide, jojoba oil");
    record5.set("price", 1399);
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
    record6.set("name", "Nuha Natural Whitening Cream");
    record6.set("brand", "Nuha Beauty Cream");
    record6.set("description", "Pure natural whitening cream with organic botanical ingredients");
    record6.set("skinBenefits", "Whitening, brightening, nourishing, anti-inflammatory");
    record6.set("keyIngredients", "Organic aloe vera, vitamin E, green tea extract, honey");
    record6.set("price", 1599);
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
    record7.set("name", "Beautyloop Intensive Whitening Serum Cream");
    record7.set("brand", "Beautyloop");
    record7.set("description", "Concentrated whitening formula for intensive skin lightening");
    record7.set("skinBenefits", "Whitening, brightening, moisturizing, skin renewal");
    record7.set("keyIngredients", "Vitamin C, hyaluronic acid, niacinamide, arbutin");
    record7.set("price", 1699);
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
    record8.set("name", "Husn-e-Turk Night Whitening Cream");
    record8.set("brand", "Husn-e-Turk");
    record8.set("description", "Overnight whitening treatment for deep skin rejuvenation");
    record8.set("skinBenefits", "Whitening, brightening, rejuvenating, nourishing");
    record8.set("keyIngredients", "Kojic acid, retinol, vitamin E, aloe vera");
    record8.set("price", 1399);
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
    record9.set("name", "Arman Luxury Whitening Cream");
    record9.set("brand", "Arman Beauty Cream");
    record9.set("description", "Premium whitening cream with luxury ingredients for superior results");
    record9.set("skinBenefits", "Whitening, brightening, anti-aging, protective");
    record9.set("keyIngredients", "Gold particles, saffron, vitamin C, argan oil");
    record9.set("price", 1899);
  try {
    app.save(record9);
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
