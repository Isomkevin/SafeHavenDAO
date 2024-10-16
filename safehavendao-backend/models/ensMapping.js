import mongoose from 'mongoose';

const EnsMappingSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  ensBasename: { type: String, required: true }
});

const EnsMapping = mongoose.model('EnsMapping', EnsMappingSchema);

export default EnsMapping;
