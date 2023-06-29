import * as Yup from "yup";
 export const validation = Yup.object().shape({
 name : Yup.string().when('step',{
    is:1,
    then: schema => schema.required()
 }),
 surname : Yup.string().when('step',{
    is:1,
    then: schema => schema.required()
 }),
 birth : Yup.date().when('step',{
    is:2,
    then: schema => schema.required()
 }),
 phone : Yup.number().when('step',{
    is:2,
    then: schema => schema.required()
 }),
 email : Yup.string().when('step',{
    is:3,
    then: schema => schema.required()
 }),
 position : Yup.string().when('step',{
    is:3,
    then: schema => schema.required()
 }),
 about : Yup.string().when('step',{
    is:4,
    then: schema => schema.required()
 }),
})