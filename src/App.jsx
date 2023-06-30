import { ErrorMessage, Field, Form, Formik } from "formik"
import McdonaldsImg from "./assets/img/mcdonalds.png"
import { validation } from "./validations/validation"
import classnames from 'classnames';
import check from './assets/img/checked.png'

function App() {

  const steps=[
    {
      step:1,
      title:"Name"
    },
    {
      step:2,
      title:"birth phone"
    },
    {
      step:3,
      title: "work"
    },
    {
      step:4,
      title: "about"
    }
  ]

  return (
    <div>
      <Formik
      validationSchema={validation}
       initialValues={{
        step:1,
        lastStep:4,
        //step 1:
        name:'',
        surname: '',
        //step 2
        birth: '',
        position:'',
        //step 3
        email:'',
        phone: '',
        //step 4
        about: ''
      }} onSubmit={(values,actions)=>{
        console.log('values',values)
      }}>
          {({values,setFieldValue,isValid,dirty})=>{

            const nextHandle = e =>{
              e.preventDefault();
              setFieldValue('step', values.step + 1);
            }
            const prevHandle = e =>{
              setFieldValue('step', values.step - 1);
            }
            const stepHandle = e =>{
              setFieldValue('step', e)
            }
            return(
              <Form className="w-[400px] py-4 mx-auto">

              <header className="mb-4">
                <img className="object-cover h-28 w-56 mx-auto" src={McdonaldsImg} alt="logo" />
                <div className="grid grid-cols-4 gap-x-3 border border-zinc-400 rounded-md">
                {
                  steps.map(step =>(
                    <button onClick={()=>stepHandle(step.step)} disabled={values.step < step.step} className={classnames("flex flex-col justify-center items-center py-2 relative z-10 text-white after:content after:absolute after:-z-10 after:left-9 after:w-20 after:border-2",{"after:border-green-500":values.step > step.step},{"after:border-red-500":values.step <= step.step},{"after:hidden":step.step===values.lastStep})} type="button" key={step.step}>
                      <div className={classnames("w-16 h-16 flex items-center justify-center rounded-full  text-sm",{"bg-green-600": values.step > step.step,"bg-blue-600": values.step===step.step,"bg-red-600":values.step!==step.step})}>{values.step > step.step ? <img src={check}/> : step.title}</div>
                    </button>
                  ))
                }
                </div>
              </header>

                {values.step === 1 && (
                  <div className="grid gap-3">
                    <div>
                      <Field name="name" className="form-input" placeholder="Name" />
                      <ErrorMessage name="name" component="small" className="block text text-sm text-red-600 mt-1" />
                    </div>
                    <div>
                      <Field name="surname" className="form-input" placeholder="Surname" />
                      <ErrorMessage name="surname" component="small" className="block text text-sm text-red-600 mt-1" />
                    </div>
                  </div>
                )}
                {values.step === 2 && (
                  <div className="grid gap-3">
                    <div>
                      <Field name="birth" type="date" className="form-input" placeholder="Birth" />
                      <ErrorMessage name="birth" component="small" className="block text text-sm text-red-600 mt-1" />
                    </div>
                    <div>
                      <Field as="select" name="position" className="form-input" placeholder="Position">
                        <option hidden>Position</option>
                        <option value="Technic">Technic</option>
                        <option value="brigade">a member of the brigade</option>
                      </Field>
                      <ErrorMessage name="position" component="small" className="block text text-sm text-red-600 mt-1" />
                    </div>
                  </div>
                )}
                {values.step === 3 && (
                  <div className="grid gap-3">
                    <div>
                      <Field name="email" type="email" className="form-input" placeholder="Email" />
                      <ErrorMessage name="email" component="small" className="block text text-sm text-red-600 mt-1" />
                    </div>
                    <div>
                      <Field name="phone" type="number" className="form-input" placeholder="Phone" />
                      <ErrorMessage name="phone" component="small" className="block text text-sm text-red-600 mt-1" />
                    </div>
                  </div>
                )}
                {values.step === 4 && (
                  <div className="grid gap-3">
                    <div>
                      <Field name="about" component="textarea" className="form-textarea" placeholder="About" />
                      <ErrorMessage name="about" component="small" className="block text text-sm text-red-600 mt-1" />
                    </div>
                  </div>
                )}

              <div className={`grid ${values.step>1 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4`}>
                {values.step>1 && 
                <button className="button" onClick={prevHandle} type="button">Previous</button>
                }
                {values.step===values.lastStep &&(
                  <button className="button" type="submit">Submit</button>
                ) || (<button className="button" onClick={nextHandle} type="button" disabled={!isValid || !dirty}>Next</button>)}
              </div>
            </Form>
            )
          }}
      </Formik>
    </div>
  )
}

export default App
