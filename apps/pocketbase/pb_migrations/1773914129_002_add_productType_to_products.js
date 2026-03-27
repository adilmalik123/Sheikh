/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  const existing = collection.fields.getByName("productType");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("productType"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "productType",
    required: false,
    values: ["Whitening Cream", "Whitening Soap"]
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("products");
  collection.fields.removeByName("productType");
  return app.save(collection);
})
