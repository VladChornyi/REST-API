const express = require("express");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");

const {
  addContact,
  getAllContacts,
  deleteContact,
  updateContact,
  updateStatusContact,
  getContactById,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", getContactById);

router.post("/", validateBody(schemas.addSchema), addContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", validateBody(schemas.addSchema), updateContact);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
