import Button from './Button'
import Field from './field'
import Input from './Input'
import Label from './Label'
import { insertCard } from '../utils/supabase-client'
import { redirect } from 'next/navigation'

async function createCard(formData) {
  'use server'
  const organization = formData.get('organization')
  const website = formData.get('website')
  const image = formData.get('image')
  const description = formData.get('description')
  insertCard({ organization, website, image, description })
  redirect('/conservation')
}

export default function CardForm() {
  return (
    <form action={createCard} className="p-8 bg-emerald-600 rounded-lg mt-4 mb-4">
      <Field>
        <Label label="Organization" />
        <Input id="organization" name="organization" />
      </Field>
      <Field>
        <Label label="Website" />
        <Input id="website" name="website" />
      </Field>
      <Field>
        <Label label="Image" />
        <Input id="image" name="image" />
      </Field>
      <Field>
        <Label label="Description" />
        <Input id="description" name="description" />
      </Field>
      <div className="mt-6 flex justify-start font-bold">
        <Button type="submit">Add Organization</Button>
      </div>
    </form>
  )
}
