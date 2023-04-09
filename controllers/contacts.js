const { Contact } = require("../models/contact");
const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../utils");

const getAllContacts = async (_, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, `Contact with id: ${contactId} was not found`);
//   }
//   res.json(result);
// };

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const deleteContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, `Contact with id: ${contactId} was not found`);
//   }
//   res.json({ message: "Contact deleted" });
// };

// const updateContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, `Contact with id: ${contactId} was not found`);
//   }
//   res.json(result);
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getContactById: ctrlWrapper(getContactById),
  // deleteContact: ctrlWrapper(deleteContact),
  addContact: ctrlWrapper(addContact),
  // updateContact: ctrlWrapper(updateContact),
};
