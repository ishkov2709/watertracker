import * as Yup from 'yup';

const validationSchema = Yup.object({
  weight: Yup.number()
    .typeError('Weight must be a number')
    .required('Required'),
  activityTime: Yup.number()
    .typeError('Activity time must be a number')
    .required('Required'),
  drankWaterAmount: Yup.number()
    .typeError('Drank water amount must be a number')
    .required('Required'),
});

export default validationSchema;
