CREATE TABLE "listings" (
  "id" serial primary key,
  "cost" float,
  "sqft" float,
  "type" varchar(120),
  "city" varchar(120),
  "image_path" varchar(120)
);