import mongoose from 'mongoose';

const alarmSchema = new mongoose.Schema({
  todoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Todo',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Alarm = mongoose.model('Alarm', alarmSchema);

export default Alarm;
