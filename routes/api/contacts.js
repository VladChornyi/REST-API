const express = require("express");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");

const {
  addContact,
  getAllContacts,
  deleteContact,
  updateContact,
  getContactById,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", getAllContacts);

// router.get("/:contactId", getContactById);

router.post("/", validateBody(schemas.addSchema), addContact);

// router.delete("/:contactId", deleteContact);

// router.put("/:contactId", validateBody(addSchema), updateContact);

module.exports = router;
