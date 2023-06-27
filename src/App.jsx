import { Field, Form, Formik } from "formik"
import McdonaldsImg from "./assets/img/mcdonalds.png"

function App() {
  return (
    <div>
      <Formik initialValues={{
        step:1,
        lastStep:4,
        //step 1:
        name:'',
        surname: '',
        //step 2
        birth: '',
        phone: '',
        //step 3
        email:'',
        position:'',
        //step 4
        about: ''
      }} onSubmit={(values,actions)=>{
        console.log('values',values)
      }}>
          {({values,setFieldValue})=>{

            const nextHandle = e =>{
              e.preventDefault();
              setFieldValue('step', values.step + 1);
            }
            const prevHandle = e =>{
              setFieldValue('step', values.step - 1);
            }

            return(
              <Form className="w-[400px] py-4 mx-auto">

              <header className="mb-4">
                <img className="object-cover h-28 w-56 mx-auto" src={McdonaldsImg} alt="logo" />
                <h3 className="text-lg font-medium text-zinc-700">Step {values.step}</h3>
              </header>

              {values.step === 1 && (
                <div className="grid gap-3">
                <Field name="name" className="form-input" placeholder="Name"/>
                <Field name="surname" className="form-input" placeholder="Surname"/>
                </div>
              )}
              {values.step === 2 && (
                <div className="grid gap-3">
                <Field name="birth" type="date" className="form-input" placeholder="Birth"/>
                <Field name="phone" type="number" className="form-input" placeholder="Phone"/>
                </div>
              )}
              {values.step === 3 && (
                <div className="grid gap-3">
                <Field name="email" type="email" className="form-input" placeholder="Email" />
                <Field as="select" name="position" className="form-input" placeholder="Position">
                  <option value="Technic">Technic</option>
                  <option value="brigade">a member of the brigade</option>
                </Field>
              </div>
              )}
              {values.step === 4 && (
                <div className="grid gap-3">
                <Field name="about" component="textarea" className="form-textarea" placeholder="About"/>
                </div>
              )}

              <div className={`grid ${values.step>1 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4`}>
                {values.step>1 && 
                <button className="button" onClick={prevHandle} type="button">Previous</button>
                }
                {values.step===values.lastStep &&(
                  <button className="button" type="submit">Submit</button>
                ) || (<button className="button" onClick={nextHandle} type="button">Next</button>)}
              </div>
            </Form>
            )
          }}
      </Formik>
    </div>
  )
}

export default App
