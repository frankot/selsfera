import AdminPageWrapper from '@/app/admin/_components/AdminPageWrapper'
import EventForm from '../_components/EventForm'

export default function AddEventPage() {
  return (
    <AdminPageWrapper title="Dodaj wydarzenie">
      <EventForm />
    </AdminPageWrapper>
  )
}
